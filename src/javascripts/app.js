// Require libraries
//$ = require('jquery');
//const popper = require('popper.js');
//const bootstrap = require('bootstrap');

// Vars
const stickyNav = $('#header');

// Initialisation
$(window).on('load', function() {
  $('[data-toggle="popover"]').popover();
  $('[data-toggle="tooltip"]').tooltip();
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
  stickyNav.data('top', stickyNav.offset().top);
  stickyNav.toggleClass('is-opened');
});
