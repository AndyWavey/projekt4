/* 4 i window.pageYOffset bestemmer hastigheden*/
function parallax() {
  let prlx_lyr_1  = document.getElementById('bg2-godkendt');
  prlx_lyr_1.style.top = -(window.pageYOffset/3)+'px';
}

window.addEventListener ("scroll", parallax, false) ;
