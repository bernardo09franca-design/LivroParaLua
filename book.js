const scene=document.getElementById("bookScene");
const rotator=document.getElementById("bookRotator");
let ry=-10,rx=-3,tryY=ry,tryX=rx,drag=false,px=0,py=0,frame=null;
const clamp=(v,min,max)=>Math.min(Math.max(v,min),max);
function animate(){
  ry+=(tryY-ry)*.18; rx+=(tryX-rx)*.18;
  rotator.style.transform=`rotateX(${rx}deg) rotateY(${ry}deg)`;
  if(Math.abs(tryY-ry)>.01||Math.abs(tryX-rx)>.01) frame=requestAnimationFrame(animate); else frame=null;
}
function update(){if(!frame)frame=requestAnimationFrame(animate)}
scene.addEventListener("pointerdown",e=>{e.preventDefault();drag=true;px=e.clientX;py=e.clientY;scene.setPointerCapture(e.pointerId)});
scene.addEventListener("pointermove",e=>{if(!drag)return;const dx=e.clientX-px,dy=e.clientY-py;px=e.clientX;py=e.clientY;tryY=clamp(tryY+dx*.32,-42,42);tryX=clamp(tryX-dy*.12,-12,10);update()});
["pointerup","pointercancel"].forEach(x=>scene.addEventListener(x,()=>drag=false));
scene.addEventListener("dblclick",()=>{tryY=-10;tryX=-3;update()});
update();
