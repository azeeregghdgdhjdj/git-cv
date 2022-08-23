
// Navigation script end
// Sliding pics start

var slideIndexG = 1;
showSlidesG(slideIndexG);

function plusSlidesG(n) {
  showSlidesG(slideIndexG += n);
}

function currentSlideG(n) {
  showSlidesG(slideIndexG = n);
}

function showSlidesG(n) {
  var i;
  var slides = document.getElementsByClassName("pics");
  
  if(n > slides.length) {
    slideIndexG = 1;
  }
  if(n < 1) {
    slideIndexG = slides.length;
  }
  
  for(i=0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  
  slides[slideIndexG-1].style.display = "block";
}

// Sliding pics end
// Sliding posts start

var slideIndexN = 1;
showSlidesN(slideIndexN);

function plusSlidesN(n) {
  showSlidesN(slideIndexN += n);
}

function currentSlideN(n) {
  showSlidesG(slideIndexG = n);
}

function showSlidesN(n) {
  var i;
  var slides = document.getElementsByClassName("posts");
  
  if(n > slides.length) {
    slideIndexN = 1;
  }
  if(n < 1) {
    slideIndexN = slides.length;
  }
  
  for(i=0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  
  slides[slideIndexN-1].style.display = "block";
}

// Sliding posts end
// Sliding vip docs start

var slideIndexD = 1;
showSlidesD(slideIndexD);

function plusSlidesD(n) {
  showSlidesD(slideIndexD += n);
}

function currentSlideD(n) {
  showSlidesD(slideIndexD = n);
}

function showSlidesD(n) {
  var i;
  var slides = document.getElementsByClassName("vip");
  
  if(n > slides.length) {
    slideIndexD = 1;
  }
  if(n < 1) {
    slideIndexD = slides.length;
  }
  
  for(i=0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  
  slides[slideIndexD-1].style.display = "block";
}

// Sliding vip docs end


