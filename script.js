// SLIDER
const slides=document.querySelectorAll('.slide');
const dotsBox=document.querySelector('.dots');
let current=0;

slides.forEach((_,i)=>{
  const dot=document.createElement('span');
  dot.onclick=()=>showSlide(i);
  dotsBox.appendChild(dot);
});
const dots=document.querySelectorAll('.dots span');

function showSlide(i){
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');
  current=i;
  slides[current].classList.add('active');
  dots[current].classList.add('active');
}
setInterval(()=>showSlide((current+1)%slides.length),5000);
showSlide(0);

// REVEAL + TOP
const reveals=document.querySelectorAll('.reveal');
const topBtn=document.getElementById('topBtn');

window.addEventListener('scroll',()=>{
  reveals.forEach(r=>{
    if(r.getBoundingClientRect().top<window.innerHeight-100){
      r.classList.add('active');
    }
  });
  topBtn.style.display=window.scrollY>400?'block':'none';
});
topBtn.onclick=()=>window.scrollTo({top:0,behavior:'smooth'});
