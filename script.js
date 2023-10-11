'use script';

const imageEl = document.getElementsByClassName("images")

const dotEl = document.getElementsByClassName("dot")



var imageno = 1;

displayimg(imageno);

function nextimg(n){
  displayimg(imageno += n)
}

function currentSlide(n) {
  displayimg((imageno = n));
}

function displayimg(n){
  var i;

  
  if(n > imageEl.length){
    imageno = 1;
  }
  
  if (n < 1) {
      imageno = imageEl.length;
  }

  for(i=0; i < imageEl.length; i++){
    imageEl[i].style.display="none"
  }

  for (i = 0; i < dotEl.length; i++) {
    dotEl[i].className = dotEl[i].className.replace("active","");
  }


  imageEl[imageno - 1].style.display = "block";
  dotEl[imageno - 1].className += "active";

















}