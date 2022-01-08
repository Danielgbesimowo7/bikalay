/* Slider for New arrival */

let slider=document.getElementsByClassName("slider")[0];
let right=document.getElementById("right")
let left=document.getElementById("left")

right.addEventListener("click",()=>{
   slider.scrollLeft+=slider.clientWidth;
})

left.addEventListener("click", () => {
   slider.scrollLeft-=slider.clientWidth;
})



/*  Menu Toggler In Mobile */
let menu=document.querySelector(".menu-toggler")
const transitions=["rotate45","width","rotate-45"];

const lines=document.querySelectorAll(".toggler-line");

let sidebar=document.querySelector(".sidebar");



let animate=()=>{
   menu.classList.toggle("rot");
   for(k=0;k<3;k++){
      lines[k].classList.toggle(transitions[k]);
   }
   
   sidebar.classList.toggle("sidebar_slides_in")
   
}
menu.addEventListener('click',animate)



/* Header nav Transition */
let nav = document.querySelector(".nav");

window.addEventListener('scroll',()=>{
   if((document.body.scrollTop||document.documentElement.scrollTop)>100){
      /*if(window.offsetWidth<=650){*/
         nav.style.color="#fff"
         nav.style.backgroundImage="linear-gradient(60deg,var(--light-orange),#EA4A0D)";
         lines.forEach(line=>{
            line.style.backgroundColor="#fff"
         })
      /*}*/
   }
   
   
   
   else{
      nav.style.color="#fff"
      nav.style.backgroundImage="linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0))"
      
      lines.forEach(line => {
         line.style.backgroundColor = "#fff"
      })
   }
   
})