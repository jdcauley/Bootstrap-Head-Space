$(function bootstrapHeadSpace() {
  'use strict';
  var target = '.navbar-fixed-top';
  var css = '.down{top: -50px;} .up{top: 0;} .transition{ -webkit-transition: top 0.9s ease; -moz-transition: top 0.9s ease; -o-transition: top 0.9s ease; transition: top 0.9s ease;}',
      head = document.head || document.getElementsByTagName('head')[0],
      style = document.createElement('style');
  style.type = 'text/css';
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  head.appendChild(style);

  $(target).addClass('transition');
  var position = $(window).scrollTop();

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if(scroll <= position || scroll < 200) {
      console.log('up');
      $(target).addClass('up').removeClass('down');
    } else {
      console.log('down');
      $(target).addClass('down').removeClass('up');
    }
    position = scroll;
  });
});
