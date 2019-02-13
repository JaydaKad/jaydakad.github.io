
let slideIndex = 0;

function changeSlide(n) {
  showDivs(slideIndex + n);
}

function showDivs(tempIndex) {
  let i;
  let x = document.getElementsByClassName("slides");
  if (tempIndex > x.length) {
    slideIndex = 1;
  } else if (tempIndex < 1) {
    slideIndex = x.length - 1;
  } else {
    slideIndex = tempIndex
  }

  for (i = 0; i < x.length; i++) {
    x[i].className = "slides"
  }
  x[slideIndex-1].className = "slides active";   //shows image

}

// Arrow keys to change slides
document.onkeydown = checkKey;

function checkKey(key) {
    if (key.keyCode === 37) {        // left arrow

      changeSlide(-1);
    }
    else if (key.keyCode === 39) {      // right arrow

      changeSlide(+1);
    }
}

// play/pause image carousel
let playing;
let loop;

function startCarousel() {
  playing = true;
  changeSlide(+1);
  loop = setTimeout(startCarousel, 2500); // Change image every 2.5 seconds

}

function stopCarousel() {
  playing = false;
  clearTimeout(loop);
}


function playPause() {
    if(playing) {
    stopCarousel();
  } else {
    startCarousel();
  }
};
