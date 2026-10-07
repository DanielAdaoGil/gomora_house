const fs=require('fs');
const j=JSON.parse(fs.readFileSync('C:\\PROJECTOS\\Sites\\gomora_house\\__data.json','utf8'));
let o='var DESC=[\n';
j.desc.forEach((d,i)=>{o+=(i?',\n':'')+JSON.stringify(d);});
o+='\n];\nvar DL=[\n';
j.mega.forEach((u,i)=>{o+=(i?',\n':'')+JSON.stringify(u);});
o+='\n];\ntry{var ov=JSON.parse(localStorage.getItem(LSKEY)||"{}");for(var k in ov){var n=+k;if(n>=1&&n<=22&&ov[k])DL[n-1]=ov[k];}}catch(e){}\n';
fs.writeFileSync('C:\\PROJECTOS\\Sites\\gomora_house\\__h6',o,'utf8');
console.log('wrote __h6 bytes='+Buffer.byteLength(o,'utf8'));
