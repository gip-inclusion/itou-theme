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
});
$('.input-group .form-control').on('blur', function(e) {
  e.preventDefault();
  $(this).parent('.input-group').toggleClass('has-focus');
});
