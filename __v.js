
"use strict";
/* ============ DATA (22 episódios) — EDITE OS LINKS EM DL[] ============ */
var CAPA="./assets/img/capa.jpg";
var LSKEY="gv-dl-v1";
var DESC=[
"Por trás das lágrimas perfeitas no funeral e da imagem impecável de Joyce como esposa e influenciadora, existe um passado marcado pela raiva e um casamento construído sobre segredos.",
"Matipa começa a seduzir Jonasi e a entrar cada vez mais no império dos Gomora, enquanto a imagem perfeita de Joyce e sua família começa a desmoronar.",
"Joyce organiza uma luxuosa festa de aniversário de casamento para tentar salvar sua imagem pública, obrigando a família destruída a sorrir enquanto esconde a traição que está acontecendo por trás das aparências.",
"Jonasi retorna para casa, deixando os filhos confusos. Matipa tenta reconquistá-lo, enquanto Joyce fica dividida entre preservar a paz da família e proteger a si mesma.",
"Matipa esperava receber uma compensação generosa, mas seus planos não saem como esperado. Ela então deixa J&J em busca de oportunidades mais lucrativas e de maior poder.",
"A possibilidade de uma gravidez deixa Joyce extremamente nervosa. Durante um almoço familiar, algumas conversas levantam novas suspeitas sobre os segredos escondidos dentro da família.",
"O nascimento dos gémeos provoca uma forte crise emocional em Joyce. Jonasi tenta justificar suas atitudes, mas Mpumi e Menzi chegam ao limite e deixam claro que já não aceitam seus jogos violentos.",
"Com um grande escândalo prestes a explodir, Joyce faz uma proposta desesperada e surpreendente, transformando sua dor conjugal em uma estratégia para recuperar poder.",
"Joyce continua fingindo felicidade diante das câmeras, mas a nova estrutura matrimonial provoca uma forte reação social e empurra os membros da família Gomora para um isolamento cada vez maior.",
"Um antigo amor de Jonasi finalmente aparece, revelando décadas de sacrifícios, segredos e mentiras que ele trabalhou durante anos para esconder.",
"No aniversário de Jonasi, ele espera receber carinho e atenção das mulheres de sua vida, mas encontra ressentimento e frustração. A família está cada vez mais dividida e ele começa a sentir o peso da própria solidão.",
"O batizado dos gémeos transforma-se em caos quando antigos ressentimentos e sentimentos de abandono vêm à tona, expondo ainda mais os segredos e conflitos da família Gomora.",
"Essie procura Joyce e pede que ela tente enxergar a situação também pelo seu ponto de vista. Cansada de viver cercada de segredos, Joyce começa a considerar abandonar a vida pública e enfrentar Jonasi.",
"Jonasi continua repetindo seu comportamento e começa a perseguir outra mulher, atraindo-a com promessas de poder, riqueza e luxo. Ao mesmo tempo, Xolani confronta Lindani publicamente, aumentando os conflitos familiares.",
"Lindani chega a uma situação desesperadora e precisa pedir ajuda a Mpume e Joyce. Enquanto isso, as novas traições de Jonasi continuam causando danos à família.",
"A casa dos Gomora mergulha no caos e a mãe de Lindani intervém para assumir o controle da situação. Resultados médicos inesperados deixam Joyce furiosa.",
"Jonasi é internado no hospital e Joyce assume o papel de esposa dedicada. Porém, mesmo enfrentando problemas de saúde, Jonasi continua obcecado por poder e controle.",
"Matipa e Joyce, ambas destruídas pelos abusos de Jonasi, encontram uma inesperada solidariedade. Com a ajuda de Magesh, Joyce começa finalmente a escolher a liberdade.",
"Depois de afastar Magesh e romper com praticamente toda a sua família, Jonasi fica completamente sozinho e recebe uma notícia devastadora sobre sua saúde.",
"Três anos se passam. A família Gomora está prosperando, mas Jonasi reaparece completamente transformado, como uma sombra do homem poderoso que já foi, obrigando a família a enfrentar as consequências do passado.",
"Frágil e debilitado, Jonasi passa seus dias sozinho enquanto sua saúde piora. Ao mesmo tempo, sua família luta contra sentimentos conflitantes de amor, mágoa e ódio pelo homem que destruiu tantas relações.",
"Após a morte de Jonasi, a rivalidade entre suas mulheres continua. Joyce e Essie entram em conflito sobre como homenagear e preservar a memória do marido, enquanto o legado e os segredos de Jonasi continuam causando problemas."
];
var DL=[
"https://mega.nz/file/Ol5mwYpI#NyNL6xPmgwteAh_qDATF-MooTChovbgL7bAhrAns3I8",
"https://mega.nz/file/CsRWAAzR#ejJodUE1-VmrXkgX0JZHj6v7YN76JMCyvzcHvmt7ABo",
"https://mega.nz/file/CsRWAAzR#ejJodUE1-VmrXkgX0JZHj6v7YN76JMCyvzcHvmt7ABo",
"https://mega.nz/file/CsRWAAzR#ejJodUE1-VmrXkgX0JZHj6v7YN76JMCyvzcHvmt7ABo",
"https://mega.nz/file/jwxDQAIb#I_Z5pb7tHwOXpEEhb_o2QDlSQYzGwYlUial0zVIO020",
"https://mega.nz/file/i1Qk1I7b#WndIhmdH9MrYZDM_UXbt5XZFPQNNKLWJiZn2tFbJJN0",
"https://mega.nz/file/a9RwTQAK#aI0YbW7eWx4G0qQgn_kIqSHKwDXZdDO3IfHtlZL9wWE",
"URL do episódio 8",
"URL do episódio 9",
"URL do episódio 10",
"URL do episódio 11",
"URL do episódio 12",
"URL do episódio 13",
"URL do episódio 14",
"URL do episódio 15",
"URL do episódio 16",
"URL do episódio 17",
"URL do episódio 18",
"URL do episódio 19",
"URL do episódio 20",
"URL do episódio 21",
"URL do episódio 22"
];
try{var ov=JSON.parse(localStorage.getItem(LSKEY)||"{}");for(var k in ov){var n=+k;if(n>=1&&n<=22&&ov[k])DL[n-1]=ov[k];}}catch(e){}
/* ============ ORBIT STATE ============ */
var N=22,stage=document.getElementById('stage'),W=0,H=0,CX=0,CY=0,AVW=0;
var SHOTS=[],C=[],BOA=[],IT=[],RS=[],VS=[],ROT=[];
for(var i=0;i<N;i++)SHOTS.push({index:i});
function buildOrbit(){
C=[];BOA=[];IT=[];RS=[];VS=[];ROT=[];
for(var i=0;i<N;i++){
var t=(i+0.5)/N;
var lat=(0.5-t)*120; /* +60° (topo, EP1) → −60° (base, EP22) */
var lon=((i*137.508)%360+360)%360;
var la=lat*Math.PI/180,lo=lon*Math.PI/180;
var v=[Math.cos(la)*Math.cos(lo),Math.sin(la),Math.cos(la)*Math.sin(lo)];
var av=AVW/(2*Math.tan(0.5*35*Math.PI/180));
C.push([av*v[0],av*v[1],av*v[2]]);
var deg=Math.atan2(v[0],v[2])*180/Math.PI;
BOA.push(-deg);
IT.push(0.25+0.75*(0.5+0.5*Math.cos(la)));
RS.push(AVW*(0.17+0.05*IT[i]));
VS.push(0);
ROT.push([Math.sin(la),Math.cos(la)]);
}
}
var lon2=0,lat2=0,tLon=0,tLat=0,pScale=1,tScale=1;
var dragging=false,dragMoved=false,sx=0,sy=0,slon=0,slat=0,pinch=0,pinchScale=1;
var REVEAL=false,DEEP=0,SCROLL=0,HEROGONE=false;
function measure(){
W=window.innerWidth;H=document.getElementById('stage').clientHeight||window.innerHeight;CX=W/2;CY=H/2;
var f=W<640?0.72:(W<1024?0.85:1);
AVW=Math.min(W,H)*0.52*f;
}
/* ============ CARDS ============ */
function mkCard(i){
var d=document.createElement('div');d.className='card';d.dataset.i=i;
var tit='Episódio '+(i+1),ep='EP '+String(i+1).padStart(2,'0');
d.innerHTML='<figure><img class="in" alt="'+tit+' — O Polígamo"/><div class="shade"></div><figcaption><span class="epnum">'+ep+'</span><span class="ept">EPISÓDIO '+(i+1)+'</span></figcaption></figure><div class="ring"></div><div class="hide"></div><div class="ringgal">'+ep+'</div><div class="tit">'+tit.toUpperCase()+'</div>';
stage.appendChild(d);
d.addEventListener('click',function(){if(!dragMoved)openLit(i,d);});
return d;
}
var cards=[];
function cutoff(){return W<640?0.13:0.16;}
function setSrcEvery(url){
var imgs=stage.querySelectorAll('img.in'),g=document.querySelectorAll('#cards img'),li=document.getElementById('limg');
for(var k=0;k<imgs.length;k++)imgs[k].src=url;
for(var k2=0;k2<g.length;k2++)g[k2].src=url;
li.src=url;
}
function layoutCards(){
var cut=cutoff();
for(var i=0;i<N;i++){
var d=cards[i],r=RS[i];
d.style.setProperty('--cw',(r*2)+'px');
d.firstChild.style.width=(r*2)+'px';
var ring=d.querySelector('.ring');ring.style.width=(r*2+18*2)+'px';ring.style.height=(r*2+18*2)+'px';
ring.style.transform='translate('+(-18)+'px,'+(-18)+'px)';
var rh='';for(var s=0;s<4;s++){var off=s*8+2*(s*8+4)/r;rh+='<span style="left:'+off+'px;width:4px;height:'+(r*2+18*2)+'px"></span>';}
ring.innerHTML=rh;
var hide=d.querySelector('.hide');hide.style.width=(r*2)+'px';hide.style.height=(r*2)+'px';
var hgap=(r*0.09)+4,hs=Math.max(1,(r-hgap*2)/3);
var hh='<span style="left:'+hgap+'px;width:'+hs+'px;height:'+(r*2)+'px"></span><span style="left:'+(r*2-hgap-hs)+'px;width:'+hs+'px;height:'+(r*2)+'px"></span><img style="left:'+(hgap+hs)+'px;width:'+(r*2-2*(hgap+hs))+'px;height:'+(r*2)+'px" alt=""/>';
hide.innerHTML=hh;
var rg=d.querySelector('.ringgal');rg.style.transform='translate('+(-r-12)+'px,'+(r-8)+'px)';
var co=cut*r*2,off2=Math.max(2,r*0.06)+co,th=Math.max(1,r*0.035)+co;
var tt=d.querySelector('.tit');tt.style.transform='translate('+(-r-off2)+'px,'+(-r+th)+'px)';
}
}
function setBlip(i,x){var r=RS[i];if(r<2)return;var d=cards[i],hide=d.querySelector('.hide'),himg=hide.querySelector('img');if(!himg||!himg.src)himg.src=CAPA;himg.style.transform='translateX('+(-x)+'px)';}
function frame(now){
requestAnimationFrame(frame);
if(!REVEAL||document.body.classList.contains('lit')||document.body.classList.contains('menu'))return;
lon2+=(tLon-lon2)*0.08;lat2+=(tLat-lat2)*0.08;pScale+=(tScale-pScale)*0.08;
var cL=Math.cos(lon2*Math.PI/180),sL=Math.sin(lon2*Math.PI/180),cB=Math.cos(lat2*Math.PI/180),sB=Math.sin(lat2*Math.PI/180);
var cut=cutoff();
for(var i=0;i<N;i++){
var w=[C[i][0]*cL+C[i][2]*sL,(C[i][1]*cB-(C[i][0]*sL-C[i][2]*cL)*sB),(C[i][0]*sL-C[i][2]*cL)*cB+C[i][1]*sB];
var z=w[2],s=pScale*(0.4+0.6*(z/AVW+1)/2),r=RS[i]*s;
var px=CX+w[0]*s-r,py=CY+w[1]*s*0.55-r;
var rl=BOA[i]+lon2,tuck=(-rl%360+360)%360;if(tuck>180)tuck-=360;
var mixA=0.62,tilt=tuck*(1-mixA),cam=ROT[i][0]*(-lat2)*mixA+ROT[i][1]*0;
cards[i].style.transform='translate3d('+px+'px,'+py+'px,0) scale('+s+') rotate('+tilt+'deg)';
var bright=0.42+0.58*Math.max(0,(z/AVW+1)/2);
cards[i].style.filter='brightness('+bright.toFixed(3)+')'+(z<-AVW*0.35?' blur(0.6px)':'');
cards[i].style.opacity=z<-AVW*0.85?'0.25':'1';
setBlip(i,(cut*r*2+Math.max(2,r*0.06))*s);
}
}
/* ============ GRID + LIGHTBOX + DOWNLOAD ============ */
function pad2(n){return String(n).padStart(2,'0');}
function isUrl(u){return /^https?:\/\//i.test(u||'');}
function buildGrid(){
var box=document.getElementById('cards');
for(var i=0;i<N;i++){
(function(i){
var f=document.createElement('figure');
f.innerHTML='<img alt="Episódio '+(i+1)+' — O Polígamo"/><div class="sh"></div><figcaption><span class="epnum">EP '+pad2(i+1)+'</span><span class="ept">EPISÓDIO '+(i+1)+'</span></figcaption>';
f.addEventListener('click',function(){openLit(i,null);});
box.appendChild(f);
})(i);
}
}
var litI=-1,litFrom=null;
function openLit(i,from){
litI=i;litFrom=from||null;
var r=from?from.getBoundingClientRect():null,lb=document.getElementById('lbox'),n=lb.getBoundingClientRect();
if(r)lb.style.transform='translate('+(r.left+(r.width-n.width)/2-n.left)+'px,'+(r.top+(r.height-n.height)/2-n.top)+'px) scale('+(r.width/n.width)+')';
else lb.style.transform='scale(.92)';
lb.style.transition='none';lb.getBoundingClientRect();
lb.style.transition='transform .45s cubic-bezier(.2,.7,.2,1)';lb.style.transform='';
document.getElementById('lk').textContent='EPISÓDIO '+pad2(i+1);
document.getElementById('lt').textContent='Episódio '+(i+1);
document.getElementById('ld').textContent=DESC[i];
var a=document.getElementById('dl'),u=DL[i];
if(isUrl(u)){a.href=u;a.classList.remove('off');a.innerHTML='⭳ BAIXAR EPISÓDIO';}
else{a.href='#';a.classList.add('off');a.innerHTML='LINK EM BREVE';}
a.onclick=function(e){if(!isUrl(DL[litI]))e.preventDefault();};
document.body.classList.add('lit');document.body.classList.add('locked');
document.getElementById('lback').focus();
}
function closeLit(){
document.body.classList.remove('lit');
if(!document.body.classList.contains('grid'))document.body.classList.remove('locked');
}
document.getElementById('lx').addEventListener('click',closeLit);
document.getElementById('lback').addEventListener('click',closeLit);
document.getElementById('lit').addEventListener('click',function(e){if(e.target===this)closeLit();});
document.getElementById('leditb').addEventListener('click',function(){
var cur=DL[litI]||'';
var v=prompt('Link de download do Episódio '+(litI+1)+':',isUrl(cur)?cur:'https://');
if(v===null)return;v=v.trim();
try{var ov=JSON.parse(localStorage.getItem(LSKEY)||'{}');ov[String(litI+1)]=v;localStorage.setItem(LSKEY,JSON.stringify(ov));}catch(e){}
DL[litI]=v;openLitRefresh();
});
function openLitRefresh(){
var a=document.getElementById('dl'),u=DL[litI];
if(isUrl(u)){a.href=u;a.classList.remove('off');a.innerHTML='⭳ BAIXAR EPISÓDIO';}
else{a.href='#';a.classList.add('off');a.innerHTML='LINK EM BREVE';}
}
/* ============ MENU / GRID VIEW ============ */
var menub=document.getElementById('menub');
menub.addEventListener('click',function(){
var m=document.body.classList.toggle('menu');
menub.classList.toggle('x',m);menub.querySelector('span').textContent=m?'Fechar':'Menu';
});
document.querySelectorAll('#menu a').forEach(function(a){
a.addEventListener('click',function(e){
e.preventDefault();
document.body.classList.remove('menu');menub.classList.remove('x');menub.querySelector('span').textContent='Menu';
var k=a.dataset.m;
if(k==='epi')openGrid();else if(k==='gal')closeGrid();
});
});
function openGrid(){closeLit();document.body.classList.add('grid');document.body.classList.add('locked');}
function closeGrid(){document.body.classList.remove('grid');if(!document.body.classList.contains('lit'))document.body.classList.remove('locked');}
document.getElementById('gridb').addEventListener('click',function(){
document.body.classList.contains('grid')?closeGrid():openGrid();
});
document.getElementById('word').addEventListener('click',function(e){e.preventDefault();closeGrid();window.scrollTo(0,0);});
/* ============ INPUT ============ */
stage.addEventListener('pointerdown',function(e){dragging=true;dragMoved=false;sx=e.clientX;sy=e.clientY;slon=tLon;slat=tLat;stage.setPointerCapture(e.pointerId);});
stage.addEventListener('pointermove',function(e){
if(!dragging)return;
var dx=e.clientX-sx,dy=e.clientY-sy;
if(Math.abs(dx)+Math.abs(dy)>6)dragMoved=true;
tLon=slon+dx*0.25;tLat=Math.max(-60,Math.min(60,slat-dy*0.25));
});
addEventListener('pointerup',function(){dragging=false;});
stage.addEventListener('wheel',function(e){e.preventDefault();if(!HEROGONE)return;tScale=Math.max(0.55,Math.min(2.2,tScale*(e.deltaY>0?0.94:1.06)));},{passive:false});
stage.addEventListener('touchstart',function(e){if(e.touches.length===2)pinch=Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY),pinchScale=tScale;},{passive:true});
stage.addEventListener('touchmove',function(e){if(e.touches.length===2){var d=Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY);tScale=Math.max(0.55,Math.min(2.2,pinchScale*d/Math.max(1,pinch)));}},{passive:true});
addEventListener('keydown',function(e){
if(e.key==='Escape'){
if(document.body.classList.contains('lit'))closeLit();
else if(document.body.classList.contains('grid'))closeGrid();
else if(document.body.classList.contains('menu'))menub.click();
}
if(document.body.classList.contains('lit')&&(e.key==='ArrowRight'||e.key==='ArrowLeft')){
var n=(litI+(e.key==='ArrowRight'?1:N-1))%N;closeLit();openLit(n,null);
}
});
/* ============ SCROLL: HERO → SPHERE ============ */
var scrollAdj=window.addEventListener('wheel',function(e){
if(!REVEAL||document.body.classList.contains('lit')||document.body.classList.contains('grid')||document.body.classList.contains('menu'))return;
if(!HEROGONE){
e.preventDefault();
SCROLL+=e.deltaY;
if(SCROLL>60){
HEROGONE=true;document.body.classList.remove('hero');document.body.classList.add('heroGone');
document.body.classList.remove('locked');
}
}else{
if(e.deltaY<0&&tScale<=0.56){HEROGONE=false;SCROLL=0;document.body.classList.add('hero');document.body.classList.remove('heroGone');document.body.classList.add('locked');}
}
},{passive:false});
addEventListener('touchmove',function(e){
if(!REVEAL||HEROGONE||document.body.classList.contains('lit')||document.body.classList.contains('grid')||document.body.classList.contains('menu'))return;
HEROGONE=true;document.body.classList.remove('hero');document.body.classList.add('heroGone');
document.body.classList.remove('locked');
},{passive:true});
(function(){
var p=0,t=0;
requestAnimationFrame(function loop(){
p+=(SCROLL-p)*0.12;
DEEP=Math.max(0,Math.min(1,p/(H*2.2)));
tScale=1+DEEP*0.25;
tLon+=0.06;
requestAnimationFrame(loop);
});
})();
var mq=matchMedia('(prefers-reduced-motion: reduce)');
/* ============ SPLASH → FILM → REVEAL ============ */
var boot=document.getElementById('boot'),bar=document.getElementById('bar'),blab=document.getElementById('blab');
var intro=document.getElementById('intro'),film=document.getElementById('film'),skip=document.getElementById('skip');
var born=Date.now(),got=0,TOTAL=2,revealed=false;
function report(){got++;bar.style.width=Math.min(100,got/TOTAL*100)+'%';tryFinish();}
film.addEventListener('loadeddata',report);
film.addEventListener('canplaythrough',report);
film.addEventListener('error',report);
var probe=new Image();probe.onload=report;probe.onerror=report;probe.src=CAPA;
setTimeout(function(){tryFinish();},1150);
function tryFinish(){
if(revealed)return;
var ready=got>=TOTAL,min=Date.now()-born>1150;
if(!(ready&&min))return;
boot.style.transition='opacity .5s';boot.style.opacity='0';
setTimeout(function(){boot.remove();startFilm();},520);
}
setTimeout(function(){if(!revealed){if(boot.parentNode)boot.remove();startFilm();}},9000);
function startFilm(){
if(revealed)return;
intro.style.display='flex';skip.hidden=false;
var played=false;
try{var pr=film.play();if(pr&&pr.catch)pr.catch(function(){});}catch(e){}
setTimeout(function(){if(!played&&!revealed)reveal();},2600);
var tm=null;
film.addEventListener('timeupdate',function(){
if(revealed||!isFinite(film.duration)||!film.duration)return;
if(film.currentTime>=film.duration*0.5-0.3){reveal();}
});
setTimeout(function(){if(!revealed)reveal();},14000);
skip.addEventListener('click',reveal);
}
function reveal(){
if(revealed)return;revealed=true;
try{film.pause();}catch(e){}
intro.classList.add('out');skip.hidden=true;
REVEAL=true;
document.body.classList.add('hero');
setTimeout(function(){intro.remove();skip.remove();},1000);
requestAnimationFrame(frame);
}
addEventListener('resize',function(){measure();buildOrbit();layoutCards();});
/* ============ INIT ============ */
measure();buildOrbit();
for(var i=0;i<N;i++)cards.push(mkCard(i));
layoutCards();buildGrid();setSrcEvery(CAPA);
