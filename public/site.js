/* Interactions for baoyi-ouyang.vercel.app. Every block checks that its elements exist, so the same file runs on every page. */
(()=>{
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const calm=matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
let objName='';
const {SKILLS={},STOPS={}}=window.__SITE||{};

/* ---- petals in the three pastels ---- */
const pc=$('#petals'),px=pc.getContext('2d');let W,H,D=Math.min(devicePixelRatio||1,2);
const size=()=>{W=innerWidth;H=innerHeight;pc.width=W*D;pc.height=H*D};size();addEventListener('resize',size);
const cols=['#ffc2d6','#ffe58a','#a9e6c6','#ffffff'];
const mk=(x,y,b)=>({x:x??Math.random()*W,y:y??Math.random()*H,r:6+Math.random()*9,a:Math.random()*6.3,
  vx:b?(Math.random()-.5)*9:(Math.random()-.5)*.3,vy:b?-Math.random()*8-2:.25+Math.random()*.5,va:(Math.random()-.5)*.03,c:cols[Math.random()*4|0],life:b?1:null});
let P=Array.from({length:calm?0:22},()=>mk());
const burst=(x,y,n=24)=>{if(!calm)for(let i=0;i<n;i++)P.push(mk(x,y,true))};
let lastY=scrollY;const tick=()=>{const dv=scrollY-lastY;lastY=scrollY;px.setTransform(D,0,0,D,0,0);px.clearRect(0,0,W,H);P=P.filter(p=>p.life===null||p.life>0);
  for(const p of P){p.x+=p.vx;p.y+=p.vy;p.a+=p.va;
    if(p.life!==null){p.vy+=.22;p.vx*=.985;p.life-=.012}else{p.x+=Math.sin(p.a)*.4;p.y-=dv*.1*(p.r/8);p.a+=dv*.002;if(p.y>H+20){p.y=-20;p.x=Math.random()*W}if(p.y<-30){p.y=H+18;p.x=Math.random()*W}}
    px.save();px.translate(p.x,p.y);px.rotate(p.a);px.globalAlpha=(p.life??1)*.8;px.fillStyle=p.c;px.beginPath();px.ellipse(0,0,p.r,p.r*.55,0,0,6.3);px.fill();px.restore()}
  requestAnimationFrame(tick)};
if(!calm)tick();

/* ---- the one question: pick a skill, the portfolio re-sorts around it ---- */
const grid=$('#grid'),cards=grid?$$('.card',grid):[],home=cards.slice(),chips=$$('.chip'),proof=$('#proof'),countEl=$('#count'),count0=countEl?countEl.textContent:'';let active=null;
const bts=$$('.band .bt');
const apply=k=>{active=k;const tool=k&&k.startsWith('tool:')?k.slice(5):null;
  chips.forEach(c=>c.setAttribute('aria-pressed',c.dataset.k===k));
  bts.forEach(b=>b.classList.toggle('on',!!k&&(b.dataset.k===k||b.dataset.tool===tool)));
  const used=c=>tool?c.dataset.t.split('|').includes(tool):c.dataset.s.split(' ').includes(k);
  const n=k?home.filter(used).length:home.length,hit=c=>!k||n===0||used(c);
  const order=k?[...home.filter(hit),...home.filter(c=>!hit(c))]:home;
  order.forEach(c=>{grid.appendChild(c);c.classList.toggle('dim',!hit(c))});
  countEl.textContent=!k?count0:tool?(n?`${n} of ${home.length} projects made with ${tool}`:count0):`${n} of ${home.length} projects show this`;
  proof.hidden=!k;
  if(tool){const sk=Object.values(SKILLS).filter(s=>s.tools.includes(tool)).map(s=>s.name);
    $('#proofName').textContent=`Made with ${tool}`;
    $('#proofText').textContent=n?`${n===1?'One project':n+' projects'} below used ${tool}. They are listed first.`:`${tool} is part of my ${sk.join(' and ')} toolkit, outside the projects shown here.`;
    $('#proofTools').innerHTML=sk.map(s=>`<li>${s}</li>`).join('')}
  else if(k){const s=SKILLS[k];$('#proofName').textContent=s.name;$('#proofText').textContent=s.text;$('#proofTools').innerHTML=s.tools.map(t=>`<li>${t}</li>`).join('')}};
const pick=(k,e)=>{const next=active===k?null:k;
  if(document.startViewTransition&&!calm)document.startViewTransition(()=>apply(next));else apply(next);
  if(next&&e)burst(e.clientX,e.clientY,14)};
chips.forEach(c=>c.addEventListener('click',e=>{const fromHero=c.classList.contains('h'),k=c.dataset.k;
  if(fromHero){if(active!==k)pick(k,e);$('#work').scrollIntoView({behavior:calm?'auto':'smooth'})}else pick(k,e)}));
if($('#reset'))$('#reset').addEventListener('click',()=>pick(active));

/* ---- the band of tools: drag it, fling it, pick a word ---- */
(()=>{const band=$('#band');if(!band)return;const row1=$('.row',band);let dx=0,v=0,down=false,lx=0,moved=0,raf=0,armed=false;
  const rws=$$('.row',band);let W1=1,W2=1,auto=0,last=0,hover=false,seen=true;
  const measure=()=>{W1=rws[0].scrollWidth/3;W2=rws[1].scrollWidth/4};measure();addEventListener('resize',measure);if(document.fonts)document.fonts.ready.then(measure);
  const lim=x=>Math.max(-W1,Math.min(300,x));
  const wrap=(x,w)=>{x%=w;return x>0?x-w:x};
  // the band drifts on its own, slows under the pointer, and still answers to scroll, drag and wheel
  new IntersectionObserver(e=>{seen=e[0].isIntersecting}).observe(band);
  band.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse')hover=true});band.addEventListener('pointerleave',()=>hover=false);
  const drift=now=>{requestAnimationFrame(drift);const dt=Math.min(.05,(now-last)/1000);last=now;if(!seen)return;
    if(!calm)auto+=(down?0:hover?28:170)*dt;const y=calm?0:scrollY*.35;
    rws[0].style.transform=`translateX(${wrap(dx-auto-y,W1).toFixed(1)}px)`;rws[1].style.transform=`translateX(${wrap(dx+auto*.8+y,W2).toFixed(1)}px)`};
  requestAnimationFrame(drift);
  const set=()=>band.style.setProperty('--dx',dx.toFixed(1));
  const glide=()=>{if(down)return;v*=.9;dx=lim(dx+v*.5);set();if(Math.abs(v)>.3)raf=requestAnimationFrame(glide)};
  band.addEventListener('pointerdown',e=>{down=true;lx=e.clientX;moved=0;v=0;cancelAnimationFrame(raf)});
  addEventListener('pointermove',e=>{if(!down)return;const d=e.clientX-lx;lx=e.clientX;moved+=Math.abs(d);if(moved>6)band.classList.add('dragging');v=d;dx=lim(dx+d);set()});
  // with the pointer resting on the band, the wheel pages through the tools; at either end the page scrolls on
  band.addEventListener('pointermove',e=>{if(e.movementX||e.movementY)armed=true});band.addEventListener('pointerleave',()=>armed=false);
  band.addEventListener('wheel',e=>{if(!armed||calm)return;const d=(Math.abs(e.deltaX)>Math.abs(e.deltaY)?e.deltaX:e.deltaY)*3,n=lim(dx-d);if(n===dx)return;dx=n;set();e.preventDefault()},{passive:false});
  const up=()=>{if(!down)return;down=false;setTimeout(()=>band.classList.remove('dragging'),0);if(!calm)glide()};
  addEventListener('pointerup',up);addEventListener('pointercancel',up);
  band.addEventListener('click',e=>{const b=e.target.closest('.bt');if(!b||moved>6)return;const k=b.dataset.k||'tool:'+b.dataset.tool;
    if(active!==k)pick(k,e);$('#work').scrollIntoView({behavior:calm?'auto':'smooth'})});
})();

/* ---- path: three cities ---- */
const stop=$('#stop'),tabs=$$('.tab');
const show=c=>{const s=STOPS[c];tabs.forEach(t=>t.setAttribute('aria-selected',t.dataset.c===c));
  stop.innerHTML=`<span class="mono">${s.label}</span><ul>${s.items.map(i=>`<li><span>${i[0]}</span><span class="yr">${i[2]}</span><span class="org">${i[1]}</span></li>`).join('')}</ul>`;
  stop.classList.remove('swap');void stop.offsetWidth;stop.classList.add('swap')};
tabs.forEach(t=>t.addEventListener('click',()=>show(t.dataset.c)));if(stop&&tabs.length)show(tabs[tabs.length-1].dataset.c);

/* ---- scroll: ruler, rises, parallax, drifting sky, sliding band ---- */
const ruler=$('.ruler'),where=$('#where'),heroEl=$('#hero'),introEl=$('#intro');
const secs=[['intro','Welcome'],['hero','Hello'],['now','Now'],['work','Work'],['about','About'],['reflections','Reflections'],['hello','Say hello']].map(([id,n])=>[$('#'+id),n]).filter(s=>s[0]&&introEl);
const risers=$$('.head,.now,.card,.posts li,.portrait,.about-text,.end h2,.filter,.page-cover,.prose h2,.prose img,.prose figure,.prose blockquote,.related a,.writing-list li');
if(!calm)risers.forEach(el=>el.classList.add('rise'));
const cl=(v,a=0,b=1)=>Math.min(b,Math.max(a,v));let queued=false;
const update=()=>{queued=false;const vh=innerHeight,y=scrollY,max=document.documentElement.scrollHeight-vh,p=max>0?y/max:0;
  ruler.style.setProperty('--p',p.toFixed(3));
  let name=ruler.dataset.label||'Welcome';for(const [el,n] of secs)if(el.getBoundingClientRect().top<vh*.5)name=n;where.textContent=name;
  if(calm)return;
  document.body.style.setProperty('--s',p.toFixed(3));
  if(introEl)introEl.style.setProperty('--i',cl(y/vh).toFixed(3));
  if(heroEl)heroEl.style.setProperty('--h',cl((y-heroEl.offsetTop)/(vh*.8)).toFixed(3));
  for(const el of risers){const r=el.getBoundingClientRect();if(r.top>vh*1.3||r.bottom<-vh*.3)continue;
    el.style.setProperty('--t',cl((vh*1.02-r.top)/(vh*.42)).toFixed(3));
    if(el.classList.contains('card'))el.style.setProperty('--c',cl((r.top+r.height/2-vh/2)/vh,-1,1).toFixed(3))}};
const onScroll=()=>{if(!queued){queued=true;requestAnimationFrame(update)}};
addEventListener('scroll',onScroll,{passive:true});addEventListener('resize',onScroll);update();

/* ---- one greeting, three languages ---- */
const HI=[['Nice to meet you.','en'],['很高兴认识你。','zh-Hans'],['好高興認識你。','zh-Hant']],hi=$('#hi'),langs=$$('.lang');let li=0;
const greet=n=>{li=n;hi.textContent=HI[n][0];hi.lang=HI[n][1];langs.forEach((b,k)=>b.setAttribute('aria-pressed',k===n));hi.classList.remove('swap');void hi.offsetWidth;hi.classList.add('swap')};
hi.addEventListener('click',()=>greet((li+1)%3));hi.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse')greet((li+1)%3)});
langs.forEach(b=>b.addEventListener('click',()=>greet(+b.dataset.l)));

/* ---- pointer glow, cursor label, card tilt ---- */
const cur=$('.cur');let cx=0,cy=0,tx=0,ty=0;
if(fine&&!calm){
  addEventListener('pointermove',e=>{tx=e.clientX;ty=e.clientY;cur.classList.add('show');
    document.body.style.setProperty('--mx',(tx/W*100).toFixed(1)+'%');document.body.style.setProperty('--my',(ty/H*100).toFixed(1)+'%');
    if(introEl)introEl.style.setProperty('--mx',(tx/W*2-1).toFixed(3));if(introEl)introEl.style.setProperty('--my',(ty/H*2-1).toFixed(3));
    const t=e.target.closest('a,button,[data-cursor]');cur.classList.toggle('big',!!t||!!objName);});
  const follow=()=>{cx+=(tx-cx)*.2;cy+=(ty-cy)*.2;cur.style.transform=`translate(${cx}px,${cy}px)`;requestAnimationFrame(follow)};follow();
}
cards.forEach(c=>{
  c.addEventListener('pointermove',e=>{if(e.pointerType!=='mouse'||calm)return;const r=c.getBoundingClientRect();
    c.style.setProperty('--ry',((e.clientX-r.left)/r.width-.5)*9+'deg');c.style.setProperty('--rx',-((e.clientY-r.top)/r.height-.5)*9+'deg')});
  c.addEventListener('pointerleave',()=>{c.style.setProperty('--rx','0deg');c.style.setProperty('--ry','0deg')})});

if($('#cue'))$('#cue').addEventListener('click',()=>$('#hero').scrollIntoView({behavior:calm?'auto':'smooth'}));


/* ---- the solids, rendered for real: ceramic, clay, glass and brass in a soft studio ---- */
let begin3d=()=>{};
(()=>{const T=window.THREE,host=$('#intro');if(!T||calm||!host)return;let r;
  try{r=new T.WebGLRenderer({antialias:true,alpha:true})}catch(e){return}
  r.setPixelRatio(Math.min(devicePixelRatio||1,2));r.outputEncoding=T.sRGBEncoding;r.toneMapping=T.NoToneMapping;
  const cv=r.domElement;cv.className='gl';cv.setAttribute('aria-hidden','true');host.prepend(cv);host.classList.add('gl-on');
  const sc=new T.Scene(),cam=new T.PerspectiveCamera(35,1,.1,100);cam.position.z=14;
  // studio: a pastel dome with three bright softboxes, baked into reflections
  const env=new T.Scene(),dome=new T.SphereGeometry(30,48,24),cols=[],pa=dome.attributes.position,c=new T.Color();
  const top=new T.Color('#fffaf0'),L=new T.Color('#9fe6c4'),R=new T.Color('#ffa8c6'),bot=new T.Color('#ffd76a');
  for(let i=0;i<pa.count;i++){const y=pa.getY(i)/30,x=pa.getX(i)/30;c.copy(x<0?L:R).lerp(top,Math.max(0,y)).lerp(bot,Math.max(0,-y)*.9);cols.push(c.r,c.g,c.b)}
  dome.setAttribute('color',new T.Float32BufferAttribute(cols,3));
  env.add(new T.Mesh(dome,new T.MeshBasicMaterial({side:T.BackSide,vertexColors:true})));
  const box=(w,h,x,y,z,k)=>{const m=new T.Mesh(new T.PlaneGeometry(w,h),new T.MeshBasicMaterial({color:new T.Color(k,k,k),side:T.DoubleSide}));m.position.set(x,y,z);m.lookAt(0,0,0);env.add(m)};
  box(12,7,-10,14,10,2.6);box(6,12,16,4,8,1.8);box(10,4,0,-12,12,1.2);
  const pm=new T.PMREMGenerator(r);sc.environment=pm.fromScene(env,.03).texture;
  const key=new T.DirectionalLight(0xffffff,.35);key.position.set(-4,7,9);sc.add(key);
  const M=(color,o={})=>new T.MeshPhysicalMaterial(Object.assign({color,roughness:.22,metalness:0,clearcoat:1,clearcoatRoughness:.1,envMapIntensity:.95},o));
  const mat={mint:M(0x5fcf9d),pink:M(0xff7fae),butter:M(0xffcb3d),clay:M(0xff9dbf,{roughness:.8,clearcoat:0}),pearl:M(0xfff4e6,{roughness:.35,clearcoat:.6}),
    brass:M(0xffd08a,{metalness:1,roughness:.22,clearcoat:0}),glass:M(0xff9cc0,{transmission:.55,transparent:true,roughness:.05,envMapIntensity:1.3}),glassM:M(0x79dcb0,{transmission:.5,transparent:true,roughness:.05,envMapIntensity:1.3})};
  Object.assign(mat,{red:M(0xf0364f,{envMapIntensity:.7}),lime:M(0xd4ec3f,{roughness:.9,clearcoat:0}),white:M(0xffffff,{roughness:.5,clearcoat:0}),dark:M(0x2c3d52,{roughness:.08}),stem:M(0x8a6a48,{roughness:.7,clearcoat:0}),
    wrap:M(0xffcb3d,{flatShading:true,roughness:.5,clearcoat:.3}),mirror:M(0xf3a9c9,{metalness:1,roughness:.16,clearcoat:0,flatShading:true,envMapIntensity:1}),frost:M(0xffa9c8,{roughness:.45,clearcoat:.4}),wood:M(0xecc79a,{roughness:.55,clearcoat:.3}),lilac:M(0xc9a8f0)});
  const G=(...ch)=>{const g=new T.Group();ch.forEach(c=>g.add(c));return g};
  const P=(geo,m,p=[0,0,0],s=1,rot=[0,0,0])=>{const o=new T.Mesh(geo,m);o.position.set(p[0],p[1],p[2]);Array.isArray(s)?o.scale.set(s[0],s[1],s[2]):o.scale.setScalar(s);o.rotation.set(rot[0],rot[1],rot[2]);return o};
  const sph=new T.SphereGeometry(1,48,32),cyl=new T.CylinderGeometry(1,1,1,40),H=Math.PI/2;
  const rbox=(w,h,d,q)=>{const x=w/2-q,y=h/2-q,c=q*.7,sh=new T.Shape();sh.moveTo(-x+c,-y);sh.lineTo(x-c,-y);sh.quadraticCurveTo(x,-y,x,-y+c);sh.lineTo(x,y-c);sh.quadraticCurveTo(x,y,x-c,y);sh.lineTo(-x+c,y);sh.quadraticCurveTo(-x,y,-x,y-c);sh.lineTo(-x,-y+c);sh.quadraticCurveTo(-x,-y,-x+c,-y);
    const g=new T.ExtrudeGeometry(sh,{depth:Math.max(.01,d-2*q),bevelEnabled:true,bevelSize:q,bevelThickness:q,bevelSegments:8,curveSegments:10});g.center();return g};
  // bow: two pinched loops, a knot and two tails
  const bow=()=>{const lg=new T.SphereGeometry(1,44,30),p=lg.attributes.position;
    for(let n=0;n<p.count;n++){const f=Math.min(1,Math.max(0,(p.getX(n)+1)/1.7)),k2=.16+.84*Math.pow(f,.75);p.setY(n,p.getY(n)*k2*.74);p.setZ(n,p.getZ(n)*k2*.44)}
    lg.computeVertexNormals();
    return G(P(lg,mat.pink,[.98,0,0]),P(lg,mat.pink,[-.98,0,0],1,[0,Math.PI,0]),P(sph,mat.pink,[0,0,.05],[.27,.32,.3]),
      P(sph,mat.pink,[.42,-.78,0],[.2,.66,.1],[0,0,.48]),P(sph,mat.pink,[-.42,-.78,0],[.2,.66,.1],[0,0,-.48]))};
  // apple: a cardioid turned on a lathe, with stem and leaf
  const apple=()=>{const pts=[];for(let n=0;n<=48;n++){const a=.001+n/48*(Math.PI-.001);pts.push(new T.Vector2((1-Math.cos(a))*Math.sin(a)/1.3,(((1-Math.cos(a))*Math.cos(a))+.9)/1.3*1.12))}
    return G(P(new T.LatheGeometry(pts,64),mat.red),P(cyl,mat.stem,[.04,.95,0],[.04,.42,.04],[0,0,-.22]),P(sph,mat.mint,[.34,1.05,0],[.3,.045,.15],[0,0,.5]))};
  const pearls=()=>G(...[-3,-2,-1,0,1,2,3].map(n=>{const a=n*.34;return P(sph,mat.pearl,[Math.sin(a)*1.7,-Math.cos(a)*1.7+1.25,0],.27)}));
  const camera=()=>G(P(rbox(2.2,1.4,.8,.14),mat.butter),P(rbox(.7,.3,.5,.07),mat.butter,[.15,.8,0]),P(cyl,mat.white,[.15,-.03,.5],[.56,.3,.56],[H,0,0]),P(cyl,mat.dark,[.15,-.03,.62],[.44,.2,.44],[H,0,0]),
    P(sph,mat.dark,[.15,-.03,.7],[.34,.34,.12]),P(cyl,mat.pink,[-.72,.76,0],[.15,.12,.15]),P(sph,mat.white,[-.76,.38,.41],[.13,.1,.05]));
  const tennis=()=>{const a=.69,b=.31,c=2*Math.sqrt(a*b),pts=[];for(let n=0;n<90;n++){const u=n/90*Math.PI*2;pts.push(new T.Vector3(a*Math.cos(u)+b*Math.cos(3*u),a*Math.sin(u)-b*Math.sin(3*u),c*Math.sin(2*u)))}
    return G(P(sph,mat.lime),P(new T.TubeGeometry(new T.CatmullRomCurve3(pts,true),180,.045,8,true),mat.white,[0,0,0],1.004))};
  const cupcake=()=>G(P(new T.CylinderGeometry(.78,.52,.85,18),mat.wrap,[0,-.5,0]),P(sph,mat.frost,[0,.02,0],[.86,.36,.86]),P(sph,mat.frost,[0,.38,0],[.63,.32,.63]),P(sph,mat.frost,[0,.7,0],[.4,.28,.4]),P(sph,mat.red,[0,1.02,0],.17));
  const tv=()=>G(P(rbox(2,1.6,1,.16),mat.mint),P(rbox(1.3,1.08,.12,.05),mat.dark,[-.2,0,.5]),P(cyl,mat.butter,[.72,.3,.52],[.1,.1,.1],[H,0,0]),P(cyl,mat.butter,[.72,-.02,.52],[.1,.1,.1],[H,0,0]),
    P(cyl,mat.brass,[-.3,1.15,0],[.025,.85,.025],[0,0,.42]),P(cyl,mat.brass,[.3,1.15,0],[.025,.85,.025],[0,0,-.42]),P(sph,mat.brass,[-.48,1.55,0],.07),P(sph,mat.brass,[.48,1.55,0],.07),
    P(cyl,mat.butter,[-.6,-.86,0],[.09,.16,.09]),P(cyl,mat.butter,[.6,-.86,0],[.09,.16,.09]));
  const dumbbell=()=>G(P(cyl,mat.brass,[0,0,0],[.09,1.7,.09],[0,0,H]),...[-1,1].flatMap(d=>[P(cyl,mat.mint,[d*.72,0,0],[.5,.28,.5],[0,0,H]),P(cyl,mat.mint,[d*1.0,0,0],[.38,.22,.38],[0,0,H])]));
  const disco=()=>G(P(new T.IcosahedronGeometry(1,3),mat.mirror),P(cyl,mat.brass,[0,1.05,0],[.12,.14,.12]));
  const palette=()=>{const sh=new T.Shape();sh.absellipse(0,0,1.15,.9,0,Math.PI*2,false,0);const hole=new T.Path();hole.absarc(.55,-.3,.17,0,Math.PI*2,true);sh.holes.push(hole);
    const g=new T.ExtrudeGeometry(sh,{depth:.06,bevelEnabled:true,bevelSize:.05,bevelThickness:.05,bevelSegments:5,curveSegments:40});g.center();
    const dab=(m,x,y,s)=>P(sph,m,[x,y,.1],[s,s,s*.45]);
    return G(P(g,mat.wood),dab(mat.pink,-.7,.25,.2),dab(mat.red,-.35,.52,.18),dab(mat.butter,.1,.58,.2),dab(mat.mint,.52,.42,.19),dab(mat.lilac,.78,.1,.17),
      P(cyl,mat.brass,[-.25,-.25,.2],[.035,1.5,.035],[0,0,-1]),P(new T.ConeGeometry(.07,.3,20),mat.pink,[-1.0,-.73,.2],1,[0,0,-1+Math.PI]))};
  // [object, x, y (screen fractions), z, size, base tilt x, base turn y, spins]
  const defs=[[bow(),-.64,.46,0,1.05,.1,-.25],[apple(),.68,-.44,1.2,1.25,.15,.3],[pearls(),.36,.68,-2,.85,.1,.2],[camera(),.68,.42,-.4,.78,.12,-.45],[tennis(),-.5,-.68,-1,.62,0,0,1],
    [cupcake(),-.86,-.22,.6,.9,.2,0],[tv(),.22,-.78,-1.6,.62,.05,.35],[dumbbell(),-.2,.82,-2,.85,.3,.5],[disco(),.9,.04,.4,.62,0,0,1],[palette(),-.92,.16,-1.2,.62,.1,.35]];
  const NAMES=[['Bows','I love bows.'],['Apples','I love apples.'],['Fashion','I love fashion.'],['Photography','I love photography.'],['Tennis','I love tennis.'],['Baking','I love baking.'],['TV dramas','I love TV dramas.'],['Fitness','I love working out.'],['Dancing','I love dancing.'],['Art','I love art.']];
  const grp=new T.Group();sc.add(grp);
  const obs=defs.map(([o,nx,ny,z,s,rx,ry,spin],i)=>{grp.add(o);return{o,nx,ny,z,s,rx,ry,spin,ph:i*1.7,sp:.35+i%3*.12,off:new T.Vector3(),vel:new T.Vector3(),home:new T.Vector3(),hov:0,tw:0,tv:0,name:NAMES[i][0],love:NAMES[i][1]}});
  // touch the things I love: point to name them, click to spin them, drag to throw them
  let hot=null,held=null,px0=0,py0=0,moved=0;const grab=new T.Vector3(),tmp=new T.Vector3(),ray=new T.Raycaster(),ndc=new T.Vector2();
  const aim=(x,y)=>{const q=host.getBoundingClientRect();ndc.set((x-q.left)/q.width*2-1,-((y-q.top)/q.height*2-1));ray.setFromCamera(ndc,cam)};
  const at=(x,y,z)=>{aim(x,y);const d=ray.ray.direction,o=ray.ray.origin,u=(z-o.z)/d.z;return new T.Vector3(o.x+d.x*u,o.y+d.y*u,z)};
  const pickAt=(x,y)=>{aim(x,y);const h=ray.intersectObjects(grp.children,true)[0];if(!h)return null;let n=h.object;while(n.parent!==grp)n=n.parent;return obs.find(b=>b.o===n)||null};
  const setHot=b=>{hot=b;objName=b?b.name:'';host.style.cursor=b?'grab':''};
  host.addEventListener('pointermove',e=>{px0=e.clientX;py0=e.clientY;if(held){moved+=Math.abs(e.movementX)+Math.abs(e.movementY);return}if(e.pointerType==='mouse')setHot(pickAt(px0,py0))});
  host.addEventListener('pointerleave',()=>{if(!held)setHot(null)});
  host.addEventListener('pointerdown',e=>{if(e.target.closest('button,a'))return;const b=pickAt(e.clientX,e.clientY);if(!b)return;px0=e.clientX;py0=e.clientY;moved=0;
    if(e.pointerType==='mouse'){held=b;const w=at(px0,py0,b.home.z);grab.set(w.x-b.home.x-b.off.x,w.y-b.home.y-b.off.y,0);host.setPointerCapture(e.pointerId);host.style.cursor='grabbing';e.preventDefault()}
    else tap(b,e)});
  const tap=(b,e)=>{b.tv+=.42;b.vel.y+=.12;burst(e.clientX,e.clientY,16);toast.textContent=b.love;toast.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>toast.classList.remove('on'),2200)};
  const drop=e=>{if(!held)return;const b=held;held=null;host.style.cursor='';if(moved<6)tap(b,e);setHot(e.pointerType==='mouse'?pickAt(e.clientX,e.clientY):null)};
  host.addEventListener('pointerup',drop);host.addEventListener('pointercancel',drop);
  let hw=7,hh=4.4,k=1,vis=true,t0=null,mx=0,my=0,gx=0,gy=0;
  const fit=()=>{const w=host.clientWidth,h=host.clientHeight;r.setSize(w,h,false);cam.aspect=w/h;cam.updateProjectionMatrix();hh=Math.tan(17.5*Math.PI/180)*14;hw=hh*cam.aspect;k=.72*Math.min(1,.5+cam.aspect*.34)};
  fit();addEventListener('resize',fit);
  new IntersectionObserver(e=>{vis=e[0].isIntersecting}).observe(host);
  addEventListener('pointermove',e=>{mx=e.clientX/innerWidth*2-1;my=e.clientY/innerHeight*2-1});
  const back=x=>{const c1=1.70158,c3=c1+1;return 1+c3*Math.pow(x-1,3)+c1*Math.pow(x-1,2)};
  begin3d=()=>{t0=performance.now()};
  const frame=now=>{requestAnimationFrame(frame);if(!vis)return;const t=now/1000,sy=Math.min(1,scrollY/innerHeight);
    gx+=(mx-gx)*.05;gy+=(my-gy)*.05;grp.rotation.y=gx*.14;grp.rotation.x=gy*.09;
    obs.forEach((b,i)=>{const a=t0===null?0:Math.min(1,Math.max(0,((now-t0)/1000-i*.07)/.9));
      b.hov+=((b===hot||b===held?1:0)-b.hov)*.15;b.o.scale.setScalar(b.s*k*(a<=0?.0001:back(a))*(1+b.hov*.2));
      b.home.set(b.nx*hw*(cam.aspect<1?.74:.92)*(1+sy*1.3),b.ny*hh*.92*(1+sy*.9)+Math.sin(t*b.sp+b.ph)*.14+sy*1.5,b.z+sy*(5+b.z));
      if(b===held){const w=at(px0,py0,b.home.z);tmp.set(w.x-b.home.x-grab.x,w.y-b.home.y-grab.y,0);b.vel.copy(tmp).sub(b.off).multiplyScalar(.6);b.off.lerp(tmp,.4)}
      else{b.vel.addScaledVector(b.off,-.055).multiplyScalar(.88);b.off.add(b.vel)}
      b.o.position.copy(b.home).add(b.off);b.tv*=.95;b.tw+=b.tv;
      b.spin?b.o.rotation.set(.25,t*.5+b.ph+b.tw,.15):b.o.rotation.set(b.rx+Math.sin(t*.3+b.ph)*.2,b.ry+Math.sin(t*.4+b.ph)*.5+b.tw,Math.sin(t*.25+b.ph)*.12+b.vel.x*.8)});
    r.render(sc,cam)};
  requestAnimationFrame(frame);
})();

/* ---- the curtain: count to 100, then open like an iris ---- */
(()=>{const sp=$('#splash'),n=$('#spn');const done=()=>{document.documentElement.classList.remove('lock');document.body.classList.add('go');begin3d()};
  if(!sp)return done();
  // play the curtain once per visit, and never when arriving at a section link
  let seen=false;try{seen=sessionStorage.getItem('curtain')==='1';sessionStorage.setItem('curtain','1')}catch(e){}
  if(calm||seen||location.hash||scrollY>40){sp.classList.add('gone');return done()}
  document.documentElement.classList.add('lock');scrollTo(0,0);const s=performance.now(),dur=1700;
  const step=now=>{const p=Math.min(1,(now-s)/dur),e=1-Math.pow(1-p,3),v=Math.round(e*100);n.textContent=v;sp.style.setProperty('--sp',v);
    if(p<1)return requestAnimationFrame(step);
    setTimeout(()=>{sp.classList.add('open');done();setTimeout(()=>sp.classList.add('gone'),1200)},220)};
  requestAnimationFrame(step)})();

/* ---- copy email ---- */
const toast=$('#toast');let tt;
$('#copy').addEventListener('click',async e=>{const b=e.currentTarget,r=b.getBoundingClientRect();
  try{await navigator.clipboard.writeText($('#addr').textContent);b.textContent='Copied';toast.textContent='Email copied. Talk soon!';burst(r.left+r.width/2,r.top,30)}
  catch{const s=getSelection(),g=document.createRange();g.selectNodeContents($('#addr'));s.removeAllRanges();s.addRange(g);toast.textContent='Email selected. Press copy.'}
  toast.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>toast.classList.remove('on'),2800)});
})();
