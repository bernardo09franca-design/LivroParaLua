const experience=document.querySelector(".experience");
const button=document.getElementById("unwrapButton");
const reveal=document.getElementById("revealMessage");
let busy=false;
button.addEventListener("click",()=>{
 if(busy)return;busy=true;experience.classList.add("is-unwrapping");button.disabled=true;
 if(navigator.vibrate)navigator.vibrate(25);
 setTimeout(()=>{
   experience.classList.add("is-unwrapped");
   document.getElementById("interactionHint").textContent="Agora você pode conhecer o livro";
   document.getElementById("controlsInstruction").textContent="Arraste o livro para girar";
   reveal.setAttribute("aria-hidden","false");reveal.classList.add("is-visible");
 },2300);
});
