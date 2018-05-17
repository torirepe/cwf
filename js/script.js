
var ww;
var options;
var slider;
var log;
var now;

if (spBreak > ww) {
  log = "sp";
} else {
  log = "pc";
}

function setup() {
  ww = $(window).innerWidth();
  options;
  if (spBreak > ww) {
    now = "sp";
    options = {
      auto: false,
      infiniteLoop: false,
      minSlides: 3,
      maxSlides: 3,
      moveSlides: 3,
      slideWidth: '148px',
      controls: true,
      pager: true,
      oneToOneTouch: true,
      hideControlOnEnd: false
    };
  } else {
    now = "pc";
    options = {
      auto: false,
      infiniteLoop: false,
      minSlides: 6,
      maxSlides: 6,
      moveSlides: 6,
      slideWidth: '148px',
      controls: true,
      pager: true,
      touchEnabled: false
    };
  }
};


setup();
slider = $('#itemSlider ul').bxSlider(options);

var timer = false;
$(window).resize(function () {
  if (timer !== false) {
    clearTimeout(timer);
  }
  timer = setTimeout(function () {
    setup();
    if (now == log) {
      slider.reloadSlider(options);
      log = now;
    };
  }, 200);
});