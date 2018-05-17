$(window).load(function(){
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
      options = {
        auto: false,
        infiniteLoop: true,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        slideWidth: '100px',
        controls: true,
        pager: false,
        oneToOneTouch: true,
        hideControlOnEnd: false,
        onSliderLoad: function(n) {
          n++;
          $('#casestudySlider').children('li[data-num="' + n + '"]').addClass('active');
        },
        onSlideBefore: function($slideElement, oldIndex, newIndex) {
          newIndex++;
          $('#casestudySlider').children('li').removeClass("active");
          $('#casestudySlider').children('li[data-num="' + newIndex + '"]').addClass('active');
        }
      };
    } else {
      options = {
        auto: false,
        infiniteLoop: true,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        slideWidth: '100px',
        controls: true,
        pager: false,
        oneToOneTouch: true,
        hideControlOnEnd: false,
        onSliderLoad: function(n) {
          n++;
          $('#casestudySlider').children('li[data-num="' + n + '"]').addClass('active');
        },
        onSlideBefore: function($slideElement, oldIndex, newIndex) {
          newIndex++;
          $('#casestudySlider').children('li').removeClass("active");
          $('#casestudySlider').children('li[data-num="' + newIndex + '"]').addClass('active');
        }
      };
    }
  };


  setup();
  slider = $('#casestudySlider').bxSlider(options);

  var timer = false;
  $(window).resize(function () {
    if (timer !== false) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      setup();
      slider.reloadSlider(options);
    }, 200);
  });
};