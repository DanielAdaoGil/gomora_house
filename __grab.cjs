const fs=require('fs');
const s=fs.readFileSync('C:\\PROJECTOS\\Sites\\gomora_house\\src\\data\\episodes.ts','utf8');
function grab(n){const m=s.match(new RegExp(n+'\\s*=\\s*\\[([\\s\\S]*?)\\];'));return m?m[1]:'';}
function items(t){const out=[];const re=/"((?:[^"\\]|\\.)*)"/g;let m;while((m=re.exec(t))){out.push(m[1]);}return out;}
const d=items(grab('descricoes'));const u=items(grab('megaUrl'));
console.log('DESC_COUNT='+d.length+' MEGA_COUNT='+u.length);
fs.writeFileSync('C:\\PROJECTOS\\Sites\\gomora_house\\__data.json',JSON.stringify({desc:d,mega:u},null,1),'utf8');
console.log('wrote __data.json bytes='+fs.statSync('C:\\PROJECTOS\\Sites\\gomora_house\\__data.json').size);
