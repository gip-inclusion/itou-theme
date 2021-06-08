// Require Dependencies
$ = require('jquery');
const popper = require('popper.js');
const bootstrap = require('bootstrap');

// Vars
const stickyNav = $('#header');
stickyNav.data('top', stickyNav.offset().top);

// Initialisation
$(window).on('load', function() {
  //console.log('load');
});

// Re-initialisation au resize
$(window).on('resize orientationchange', function() {
  //console.log('resize');
});

$(window).on('scroll', function() {
  //console.log('scroll');
});

$('[data-toggle=burger]').on('click tap', function(e) {
  e.preventDefault();
  stickyNav.toggleClass('is-opened');
});
