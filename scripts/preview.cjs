// Serve Expo's exported Web bundle when Metro file watching is unavailable.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '../dist');
const types = {'.html':'text/html','.js':'text/javascript','.json':'application/json','.svg':'image/svg+xml','.png':'image/png','.ttf':'font/ttf','.css':'text/css'};
if (!fs.existsSync(path.join(root, 'index.html'))) { console.error('Run pnpm build first.'); process.exit(1); }
http.createServer((request,response)=>{
  let name;
  try { name=decodeURIComponent(new URL(request.url,'http://localhost').pathname); } catch { response.writeHead(400).end(); return; }
  const file=path.resolve(root, `.${name==='/'?'/index.html':name}`);
  if (!file.startsWith(root+path.sep)) { response.writeHead(403).end(); return; }
  fs.readFile(file,(error,bytes)=>{if(error){response.writeHead(404).end();return;}response.writeHead(200,{'Content-Type':types[path.extname(file)]??'application/octet-stream','Cache-Control':'no-store'});response.end(bytes);});
}).listen(8082,'127.0.0.1',()=>console.log('Expo Web preview: http://127.0.0.1:8082'));
