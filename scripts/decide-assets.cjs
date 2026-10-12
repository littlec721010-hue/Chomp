const fs = require('fs');
const refs = require('../design/decide/assets.json');
let out = "import React from 'react';\n";
const maps = [], pics = [];
let i = 0;
for (const name of Object.keys(refs)) {
  if (name.endsWith('.svg')) {
    const root = fs.readFileSync('public/assets/figma/' + name, 'utf8').match(/<svg[^>]*>/)[0];
    let w = Number(root.match(/width="([^"]+)/)?.[1]);
    let h = Number(root.match(/height="([^"]+)/)?.[1]);
    if (!w || !h) { const b = root.match(/viewBox="([^"]+)/)[1].split(/\s+/).map(Number); w=b[2]; h=b[3]; }
    out += `import Svg${i} from '../../../public/assets/figma/${name}';\n`;
    maps.push(`'${name}': { component: Svg${i}, width: ${w}, height: ${h} }`); i++;
  } else pics.push(`'${name}': require('../../../public/assets/figma/${name}')`);
}
out += `const icons = {${maps.join(',')}};\nexport const photos: Record<string, number> = {${pics.join(',')}};\nexport type IconName = keyof typeof icons;\nexport function Icon({name}: {name: IconName}) { const a=icons[name]; const Svg=a.component; return <Svg width={a.width} height={a.height} />; }\n`;
fs.mkdirSync('src/features/decide', { recursive:true });
fs.writeFileSync('src/features/decide/assets.tsx', out);
console.log('Verified and mapped', Object.keys(refs).length, 'local design assets');
