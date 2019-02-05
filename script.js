//Image carousel:
// Moving through slides using arrow buttons.
let slideIndex = 1;
showDivs(slideIndex);

function changeSlide(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("slides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";   //hides image
  }
  x[slideIndex-1].style.display = "block";   //shows image
}

// Moving through slides using arrow keys.
document.onkeydown = checkKey;

function checkKey(key) {
    if (key.keyCode === 37) {
        // left arrow
      changeSlide(-1);
    }
    else if (key.keyCode === 39) {
       // right arrow
      changeSlide(+1);
    }
}

// Toggle slideshow

var playing = true;
var pauseButton = document.getElementById('pause');

slideIndex = 0;
let SS

function carousel() {
  playing = true;
  var i;
  var x = document.getElementsByClassName("slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  SS = setTimeout(carousel, 2000); // Change image every 2 seconds
}

function myStopFunction() {
  playing = false;
  clearTimeout(SS);
}

pauseButton.onclick = function() {
    if(playing) {
    myStopFunction();
  } else {
    carousel();
  }
};
