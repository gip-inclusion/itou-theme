// Require libraries

// Vars
const stickyNav = $('#header');
const rootStyle = getComputedStyle(document.body);
let windowWidth = $(window).width();
let sTabs01NavItemsWidthArrayInit = [];

// Initialisation
$(window).on('load', function() {
  $('[data-toggle="popover"]').popover();
  $('[data-toggle="tooltip"]').tooltip();
  tabsItemsToDropdownInit();
  alertCloseOnce();
});

// Re-initialisation au resize
$(window).on('resize', function() {
  tabsItemsToDropdownResize();
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


function tabsItemsToDropdownInit() {
  if ($('.s-tabs-01__nav').length) {
    let sTabs01NavItem = $('.s-tabs-01__nav .nav-item');
    let sTabs01NavItemDropdown = $('.s-tabs-01__nav .nav-item-dropdown');
    let sTabs01NavItemDropdownWidth = Math.round(sTabs01NavItemDropdown.outerWidth(true));

    sTabs01NavItem.each(function() {
      let sTabs01NavThisItemWidth = Math.round($(this).outerWidth(true));
      sTabs01NavItemsWidthArrayInit.push(sTabs01NavThisItemWidth);
    });
    sTabs01NavItemsWidthArrayInit.push(sTabs01NavItemDropdownWidth);

    tabsItemsToDropdownAdd();
  }
};

function tabsItemsToDropdownResize() {
  if ($('.s-tabs-01__nav').length) {
    let newWindowWidth = $(window).width();

    if (newWindowWidth < windowWidth) {
      tabsItemsToDropdownAdd();
    } else {
      tabsItemsToDropdownRemove();
    }

    windowWidth = newWindowWidth;
  }
};

function tabsItemsToDropdownAdd() {
  let sTabs01Nav = $('.s-tabs-01__nav');
  let sTabs01NavItem = $('.s-tabs-01__nav .nav-item');
  let sTabs01NavItemDropdown = $('.s-tabs-01__nav .nav-item-dropdown');
  let sTabs01NavWidth = Math.round(sTabs01Nav.outerWidth(true));
  let sTabs01NavItemDropdownWidth = Math.round(sTabs01NavItemDropdown.outerWidth(true));

  let sTabs01NavItemsWidthArray = [];

  sTabs01NavItem.each(function() {
    let sTabs01NavThisItemWidth = Math.round($(this).outerWidth(true));
    sTabs01NavItemsWidthArray.push(sTabs01NavThisItemWidth);
  });
  sTabs01NavItemsWidthArray.push(sTabs01NavItemDropdownWidth);

  let sTabs01NavItemsWidthSum = sTabs01NavItemsWidthArray.reduce(function(a, b) {
    return a + b;
  });

  if (sTabs01NavItemsWidthSum >= sTabs01NavWidth) {
    $('.s-tabs-01__nav .nav-item .nav-link').last().clone().removeAttr('class').prependTo('.s-tabs-01__nav .dropdown-menu');
    $('.s-tabs-01__nav .nav-item').last().remove();
    $('.s-tabs-01__nav .nav-item-dropdown').css('visibility', 'visible');
    tabsItemsToDropdownAdd();
    //console.log('Add to dropdown');
  }
};


function tabsItemsToDropdownRemove() {
  let sTabs01Nav = $('.s-tabs-01__nav');
  let sTabs01NavItem = $('.s-tabs-01__nav .nav-item');
  let sTabs01NavItemDropdown = $('.s-tabs-01__nav .nav-item-dropdown');
  let sTabs01NavItemDropdownWidth = Math.round(sTabs01NavItemDropdown.outerWidth(true));
  let sTabs01NavWidthCurrent = Math.round(sTabs01Nav.outerWidth(true));

  let sTabs01NavItemsWidthArrayCurrent = [];
  sTabs01NavItem.each(function() {
    let sTabs01NavThisItemWidth = Math.round($(this).outerWidth(true));
    sTabs01NavItemsWidthArrayCurrent.push(sTabs01NavThisItemWidth);
  });
  sTabs01NavItemsWidthArrayCurrent.push(sTabs01NavItemDropdownWidth);

  let sTabs01NavItemsWidthSumCurrent = sTabs01NavItemsWidthArrayCurrent.reduce(function(a, b) {
    return a + b;
  });

  let sTabs01NavItemsWidthNextIndex = parseInt(sTabs01NavItemsWidthArrayCurrent.length - 1);
  let freeWithForNextTab = Math.round(sTabs01NavWidthCurrent - sTabs01NavItemsWidthSumCurrent);
  let needWithForNextTab = sTabs01NavItemsWidthArrayInit[sTabs01NavItemsWidthNextIndex];

  let sTabs01NavItemDropdownCount = $('.s-tabs-01__nav .nav-item-dropdown > .dropdown-menu a').length;

  if (sTabs01NavItemDropdownCount > 0) {
    if (freeWithForNextTab > needWithForNextTab) {
      let thisItemToRemove = $('.s-tabs-01__nav .dropdown-menu a').first();
      let thisItemToAdd = $('<li class="nav-item" role="presentation"></li>');
      let thisItemToClone = thisItemToRemove.clone().addClass('nav-link');

      thisItemToRemove.remove();
      thisItemToAdd.insertBefore('.s-tabs-01__nav .nav-item-dropdown');
      $('.s-tabs-01__nav .nav-item').last().html(thisItemToClone);
    }
    //console.log('Remove from dropdwon');
    sTabs01NavItemDropdown.css('visibility', 'visible');
  } else {
    sTabs01NavItemDropdown.css('visibility', 'hidden');
  }
};


$('[data-clipboard=copy]').on('click tap', function() {
  $(this).tooltip('show');
  let thisParent = $(this).closest('.input-group');
  let thisValue = $(thisParent).find('.form-control').val();
  navigator.clipboard.writeText(thisValue).then(() => {
    //console.log('Ok: ' + thisValue);
  }).catch(() => {
    //console.log('Veillez saisir le texte à copier');
  });
});

$('[data-clipboard=copy]').on('blur', function() {
  $(this).tooltip('hide');
});



function alertCloseOnce() {
  if ($('.alert-dismissible-once').length) {
    $('.alert-dismissible-once').each(function() {
      let thisAlert = $(this);
      let thisUniqueID = $(thisAlert).attr('id');
      const seenAlert = localStorage.getItem(thisUniqueID);
      if (seenAlert === null) {
        $(thisAlert).removeClass('d-none');
      }
    });
  }
};

$('.alert-dismissible-once .close').on('click tap',function() {
  let thisParent = $(this).closest('.alert-dismissible-once');
  let thisUniqueID = $(thisParent).attr('id');
  localStorage.setItem(thisUniqueID, 'seen');
  $(thisParent).addClass('d-none');
});
