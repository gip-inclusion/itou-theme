// Require libraries

// Vars
const stickyNav = $('#header');
const rootStyle = getComputedStyle(document.body);

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
}).on('keypress', function(e) {
  if ( e.which == 13 ) {
    e.preventDefault();
    stickyNav.data('top', stickyNav.offset().top);
    stickyNav.toggleClass('is-opened');
 }
});

$('.input-group .form-control').on('focus', function(e) {
  e.preventDefault();
  $(this).parent('.input-group').toggleClass('has-focus');
}).on('blur', function(e) {
  e.preventDefault();
  $(this).parent('.input-group').toggleClass('has-focus');
});

$('body').on('keydown input', 'textarea[data-expandable]', function() {
  this.style.removeProperty('height');
  this.style.height = (this.scrollHeight+2) + 'px';
}).on('mousedown focus', 'textarea[data-expandable]', function() {
  this.style.removeProperty('height');
  this.style.height = (this.scrollHeight+2) + 'px';
});

$('[data-target-conseil]').on('focus', function(e) {
  e.preventDefault();
  let thisTarget = $(this).data('target-conseil');
  $(thisTarget).toggleClass('is-openable');
}).on('blur', function(e) {
  e.preventDefault();
  let thisTarget = $(this).data('target-conseil');
  $(thisTarget).toggleClass('is-openable');
});
