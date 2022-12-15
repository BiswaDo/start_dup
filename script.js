
const pop_up = document.getElementsByClassName("start-pop-box")[0];
const strt_btn = document.getElementsByClassName("start-icon")[0];

const side_pop = document.getElementsByClassName("side-pop")[0];
const side_bar = document.getElementsByClassName("bx-1")[0];

strt_btn.addEventListener("click", function(){
  if(pop_up.style.transform  =='translateY(0px)' && pop_up.style.opacity == '1' && pop_up.style.visibility == 'visible'){
    pop_up.style.transform = 'translateY(60px)';
    pop_up.style.opacity ='0';
    pop_up.style.visibility = 'hidden';
  }else{
    pop_up.style.transform = 'translateY(0px)';
    pop_up.style.opacity ='1';
    pop_up.style.visibility = 'visible';
  }
});





side_bar.addEventListener("mouseover", mouseOver);
side_pop.addEventListener("mouseout", mouseOut);
document.addEventListener('click', mouseOut);
function mouseOver() {
  side_pop.style.transform = 'translateX(-40px)';
  side_pop.style.opacity = '1';

}

function mouseOut() {
  side_pop.style.opacity = '0';
  side_pop.style.transform = 'translateX(-145px)';
}
