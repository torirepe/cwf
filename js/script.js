$(document).ready(function(){
  if ($('#index').length) {
    casestudySlider();
    heroVideo();
  };
});

function heroVideo() {
  var video = document.getElementById('heroVideo');
  video.oncanplaythrough = function(){
    $("#heroCopy").addClass("active");
  };
}

function casestudySlider() {
  var ww;
  var options;
  var slider;
  var log;
  var now;
  var tbBreak = '1024';
  var spBreak = '640';

  function setup() {
    ww = $(window).innerWidth();
    if (tbBreak <= ww) {
      now = "pc";
      options = {
        auto: false,
        infiniteLoop: true,
        minSlides: 4,
        maxSlides: 4,
        moveSlides: 2,
        slideWidth: '100px',
        controls: true,
        pager: false,
        oneToOneTouch: true,
        hideControlOnEnd: false,
        onSliderLoad: function(n) {
          n++;
          $('#casestudySlider').children('li[data-num="' + n + '"]').addClass('active');
          $('#casestudySlider').children('li[data-num="' + (n + 1) + '"]').addClass('active');
        },
        onSlideBefore: function($slideElement, oldIndex, newIndex) {
          newIndex++;
          $('#casestudySlider').children('li').removeClass("active");
          $('#casestudySlider').children('li[data-num="' + (newIndex * 2) + '"]').addClass('active');
          $('#casestudySlider').children('li[data-num="' + (newIndex * 2 - 1) + '"]').addClass('active');
        }
      };
    } else if (tbBreak > ww && spBreak < ww ) {
      now = "tb";
      options = {
        auto: false,
        infiniteLoop: false,
        minSlides: 6,
        maxSlides: 6,
        moveSlides: 6,
        slideWidth: '100px',
        controls: true,
        pager: true,
        touchEnabled: false
      };
    } else if (tbBreak >= ww) {
      now = "sp";
      options = {
        auto: false,
        infiniteLoop: false,
        minSlides: 6,
        maxSlides: 6,
        moveSlides: 6,
        slideWidth: '100px',
        controls: true,
        pager: true,
        touchEnabled: false
      };
    }
  };


  setup();
  slider = $('#casestudySlider').bxSlider(options);
  log = now;

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
};