import fs from 'node:fs';
import { execFileSync } from 'node:child_process';
import readline from 'node:readline/promises';
import { Writable } from 'node:stream';

// Interactive only: never pass credentials as command-line arguments.
if (!process.stdin.isTTY) throw new Error('Run this script in your own interactive terminal.');
for (const line of fs.readFileSync(new URL('../.env.local', import.meta.url), 'utf8').split(/\r?\n/)) {
  const match = line.match(/^([A-Z_]+)=(.*)$/);
  if (match && !process.env[match[1]]) process.env[match[1]] = match[2].trim();
}
const base = process.env.EXPO_PUBLIC_SUPABASE_URL;
const key = process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
if (!base?.startsWith('https://') || !key?.startsWith('sb_publishable_')) throw new Error('Missing public Supabase configuration.');
let muted = false;
const output = new Writable({ write(chunk, encoding, callback) { if (!muted) process.stdout.write(chunk); callback(); } });
const input = readline.createInterface({ input: process.stdin, output, terminal: true });
async function prompt(label, secret = false) {
  process.stdout.write(label);
  muted = secret;
  try { return await input.question(''); }
  finally { muted = false; if (secret) process.stdout.write('\n'); }
}
const results = [];
const sessions = [];
async function request(path, session, method = 'GET', body) {
  const response = await fetch(base + path, {
    method, signal: AbortSignal.timeout(20000),
    headers: { apikey: key, ...(session ? { Authorization: `Bearer ${session.token}` } : {}),
      'Content-Type': 'application/json', Prefer: 'return=representation' },
    ...(body === undefined ? {} : { body: JSON.stringify(body) }),
  });
  const text = await response.text();
  return { status: response.status, data: text ? JSON.parse(text) : null };
}
function check(name, passed, status) {
  results.push({ name, result: passed ? 'PASS' : 'FAIL', ...(status ? { httpStatus: status } : {}) });
  console.log(`${passed ? 'PASS' : 'FAIL'} ${name}`);
  if (!passed) throw new Error('Check failed. Stopped; review the report before continuing.');
}
async function ownRow(table, column, session) {
  const r = await request(`/rest/v1/${table}?${column}=eq.${session.id}&select=*`, session);
  check(`${session.label}: read own ${table}`, r.status === 200 && r.data?.length === 1, r.status);
  return r.data[0];
}
let failure;
try {
  console.log('Real API account isolation check. Passwords are hidden and never saved.');
  console.log('Cross-account writes use the existing row values; no DELETE requests are sent.');
  console.log('Use the two Beta test accounts. Press Ctrl+C to cancel.');
  for (const label of ['A', 'B']) {
    const email = (await prompt(`Account ${label} email: `)).trim();
    let password = await prompt(`Account ${label} password (hidden): `, true);
    const r = await request('/auth/v1/token?grant_type=password', null, 'POST', { email, password });
    password = '';
    check(`${label}: real password login`, r.status === 200 && !!r.data?.access_token && !!r.data?.user?.email_confirmed_at, r.status);
    sessions.push({ label, id: r.data.user.id, token: r.data.access_token });
  }
  check('Distinct account identities', sessions[0].id !== sessions[1].id);
  for (const [table, column] of [['profiles', 'id'], ['dining_preferences', 'user_id']]) {
    const baseline = [];
    for (const s of sessions) baseline.push(await ownRow(table, column, s));
    for (let i = 0; i < 2; i++) {
      const actor = sessions[i], target = sessions[1-i], original = baseline[1-i];
      const path = `/rest/v1/${table}?${column}=eq.${target.id}`;
      const read = await request(path + '&select=*', actor);
      check(`${actor.label}: cannot read other's ${table}`, read.status === 200 && Array.isArray(read.data) && read.data.length === 0, read.status);
      // Keep values unchanged even if a broken policy unexpectedly permits a write.
      const payload = { ...original }; delete payload.updated_at;
      const update = await request(path, actor, 'PATCH', payload);
      check(`${actor.label}: cannot update other's ${table}`, (update.status === 200 && Array.isArray(update.data) && update.data.length === 0) || (update.status === 403 && update.data?.code === '42501'), update.status);
      const insert = await request(`/rest/v1/${table}`, actor, 'POST', payload);
      check(`${actor.label}: cannot insert other's ${table}`, insert.status === 403 && insert.data?.code === '42501', insert.status);
      const upsert = await fetch(base + `/rest/v1/${table}?on_conflict=${column}`, {
        method: 'POST', signal: AbortSignal.timeout(20000),
        headers: { apikey: key, Authorization: `Bearer ${actor.token}`, 'Content-Type': 'application/json', Prefer: 'resolution=merge-duplicates,return=representation' },
        body: JSON.stringify(payload),
      });
      const upsertBody = await upsert.json();
      check(`${actor.label}: cannot upsert other's ${table}`, upsert.status === 403 && upsertBody?.code === '42501', upsert.status);
      const after = await ownRow(table, column, target);
      check(`${actor.label}: target ${table} unchanged`, JSON.stringify(after) === JSON.stringify(original));
    }
    const anonymous = await request(`/rest/v1/${table}?select=*`, null);
    check(`Anonymous cannot read ${table}`, [401,403].includes(anonymous.status) && anonymous.data?.code === '42501', anonymous.status);
  }
} catch (e) { failure = e.message; console.error(failure); process.exitCode = 1; }
finally {
  input.close();
  // Log out only sessions created by this script, preserving the app's sessions.
  for (const s of sessions) {
    try { const r = await request('/auth/v1/logout?scope=local', s, 'POST'); results.push({ name: `${s.label}: close test session`, result: r.status === 204 ? 'PASS' : 'FAIL', httpStatus: r.status }); }
    catch { results.push({ name: `${s.label}: close test session`, result: 'FAIL' }); }
    s.token = '';
  }
  let commit = 'unknown';
  try { commit = execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim(); } catch {}
  const report = { timestamp: new Date().toISOString(), commit, project: new URL(base).hostname,
    scope: 'Real authenticated HTTP API; DELETE tested separately in rollback-only SQL, not via HTTP.',
    results, ...(failure ? { error: failure } : {}) };
  fs.mkdirSync(new URL('../test-results/', import.meta.url), { recursive: true });
  fs.writeFileSync(new URL('../test-results/account-api.json', import.meta.url), JSON.stringify(report, null, 2));
  console.log('Redacted report: test-results/account-api.json');
}
