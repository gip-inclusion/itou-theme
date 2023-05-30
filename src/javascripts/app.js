// Require libraries

// Vars
const burgerNav = $('.s-header');
const rootStyle = getComputedStyle(document.body);
let windowWidth = $(window).width();
let sTabs01NavItemsWidthArrayInit = [];
let tablesSortable = $('[data-table="sortable"]');
let breakpointXL = getComputedStyle(document.documentElement).getPropertyValue(
  '--breakpoint-xl',
);

// Initialisation
$(window).on('load', function () {
  $('[data-toggle="popover"]').popover();
  $('[data-toggle="tooltip"]').tooltip();
  postHeaderNavDisplay();
  tabsItemsToDropdownInit();
  alertCloseOnce();
});

// Re-initialisation au resize
$(window).on('resize', function () {
  postHeaderNavDisplay();
  tabsItemsToDropdownResize();

  if (window.matchMedia('(min-width: ' + breakpointXL + ')').matches) {
    burgerNav.removeClass('is-opened');
  }
});

$(window).on('scroll', function () {
  // Scroll
});

function postHeaderNavDisplay() {
  let postHeaderNav = $('.s-postheader');

  if (postHeaderNav.length) {
    let thisNavTopOffset = postHeaderNav.offset().top;
    let lastScrollTop = 0;

    if ($('.toast-placement-wrapper').length) {$('.toast-placement-wrapper').css('paddingTop', '59px');}

    $(window).on('scroll', function () {
      let $window = $(window);
      let windowScrollTop = $window.scrollTop();

      if (windowScrollTop >= thisNavTopOffset) {
        if (window.matchMedia('(min-width: ' + breakpointXL + ')').matches) {
          $('main').css('paddingTop', '59px');
          if ($('.toast-placement-wrapper').length) {$('.toast-placement-wrapper').css('paddingTop', '0px');}
        }
        if (lastScrollTop > windowScrollTop) {
          postHeaderNav.removeClass('it-scrolldown').addClass('it-scrollup');
        } else {
          postHeaderNav.removeClass('it-scrollup').addClass('it-scrolldown');
        }
      } else {
        postHeaderNav.removeClass('it-scrollup it-scrolldown');
        if (window.matchMedia('(min-width: ' + breakpointXL + ')').matches) {
          $('main').css('paddingTop', '0px');
          if ($('.toast-placement-wrapper').length) {$('.toast-placement-wrapper').css('paddingTop', '59px');}
        }
      }
      lastScrollTop = windowScrollTop;
    });
  }
}

$('[data-toggle=burger]')
  .on('click tap', function (e) {
    e.preventDefault();
    burgerNav.toggleClass('is-opened');
  })
  .on('keypress', function (e) {
    if (e.which == 13) {
      e.preventDefault();
      burgerNav.toggleClass('is-opened');
    }
  });

$('.input-group .form-control')
  .on('focus', function (e) {
    e.preventDefault();
    $(this).parent('.input-group').toggleClass('has-focus');
  })
  .on('blur', function (e) {
    e.preventDefault();
    $(this).parent('.input-group').toggleClass('has-focus');
  });

$('body')
  .on('keydown input', 'textarea[data-expandable]', function () {
    this.style.removeProperty('height');
    this.style.height = this.scrollHeight + 2 + 'px';
  })
  .on('mousedown focus', 'textarea[data-expandable]', function () {
    this.style.removeProperty('height');
    this.style.height = this.scrollHeight + 2 + 'px';
  });

$('[data-target-conseil]')
  .on('focus', function (e) {
    e.preventDefault();
    let thisTarget = $(this).data('target-conseil');
    $(thisTarget).toggleClass('is-openable');
  })
  .on('blur', function (e) {
    e.preventDefault();
    let thisTarget = $(this).data('target-conseil');
    $(thisTarget).toggleClass('is-openable');
  });

function tabsItemsToDropdownInit() {
  if ($('.s-tabs-01__nav').length) {
    let sTabs01NavItem = $('.s-tabs-01__nav .nav-item');
    let sTabs01NavItemDropdown = $('.s-tabs-01__nav .nav-item-dropdown');
    let sTabs01NavItemDropdownWidth = Math.round(
      sTabs01NavItemDropdown.outerWidth(true),
    );

    sTabs01NavItem.each(function () {
      let sTabs01NavThisItemWidth = Math.round($(this).outerWidth(true));
      sTabs01NavItemsWidthArrayInit.push(sTabs01NavThisItemWidth);
    });
    sTabs01NavItemsWidthArrayInit.push(sTabs01NavItemDropdownWidth);

    tabsItemsToDropdownAdd();
  }
}

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
}

function tabsItemsToDropdownAdd() {
  let sTabs01Nav = $('.s-tabs-01__nav');
  let sTabs01NavItem = $('.s-tabs-01__nav .nav-item');
  let sTabs01NavItemDropdown = $('.s-tabs-01__nav .nav-item-dropdown');
  let sTabs01NavWidth = Math.round(sTabs01Nav.outerWidth(true));
  let sTabs01NavItemDropdownWidth = Math.round(
    sTabs01NavItemDropdown.outerWidth(true),
  );

  let sTabs01NavItemsWidthArray = [];

  sTabs01NavItem.each(function () {
    let sTabs01NavThisItemWidth = Math.round($(this).outerWidth(true));
    sTabs01NavItemsWidthArray.push(sTabs01NavThisItemWidth);
  });
  sTabs01NavItemsWidthArray.push(sTabs01NavItemDropdownWidth);

  let sTabs01NavItemsWidthSum = sTabs01NavItemsWidthArray.reduce(function (
    a,
    b,
  ) {
    return a + b;
  });

  if (sTabs01NavItemsWidthSum >= sTabs01NavWidth) {
    $('.s-tabs-01__nav .nav-item .nav-link')
      .last()
      .clone()
      .removeAttr('class')
      .prependTo('.s-tabs-01__nav .dropdown-menu');
    $('.s-tabs-01__nav .nav-item').last().remove();
    $('.s-tabs-01__nav .nav-item-dropdown').css('visibility', 'visible');
    tabsItemsToDropdownAdd();
    //console.log('Add to dropdown');
  }
}

function tabsItemsToDropdownRemove() {
  let sTabs01Nav = $('.s-tabs-01__nav');
  let sTabs01NavItem = $('.s-tabs-01__nav .nav-item');
  let sTabs01NavItemDropdown = $('.s-tabs-01__nav .nav-item-dropdown');
  let sTabs01NavItemDropdownWidth = Math.round(
    sTabs01NavItemDropdown.outerWidth(true),
  );
  let sTabs01NavWidthCurrent = Math.round(sTabs01Nav.outerWidth(true));

  let sTabs01NavItemsWidthArrayCurrent = [];
  sTabs01NavItem.each(function () {
    let sTabs01NavThisItemWidth = Math.round($(this).outerWidth(true));
    sTabs01NavItemsWidthArrayCurrent.push(sTabs01NavThisItemWidth);
  });
  sTabs01NavItemsWidthArrayCurrent.push(sTabs01NavItemDropdownWidth);

  let sTabs01NavItemsWidthSumCurrent = sTabs01NavItemsWidthArrayCurrent.reduce(
    function (a, b) {
      return a + b;
    },
  );

  let sTabs01NavItemsWidthNextIndex = parseInt(
    sTabs01NavItemsWidthArrayCurrent.length - 1,
  );
  let freeWithForNextTab = Math.round(
    sTabs01NavWidthCurrent - sTabs01NavItemsWidthSumCurrent,
  );
  let needWithForNextTab =
    sTabs01NavItemsWidthArrayInit[sTabs01NavItemsWidthNextIndex];

  let sTabs01NavItemDropdownCount = $(
    '.s-tabs-01__nav .nav-item-dropdown > .dropdown-menu a',
  ).length;

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
}

$('[data-clipboard=copy]').on('click tap', function () {
  $(this).tooltip('show');
  let thisParent = $(this).closest('.input-group');
  let thisValue = $(thisParent).find('.form-control').val();
  navigator.clipboard
    .writeText(thisValue)
    .then(() => {
      //console.log('Ok: ' + thisValue);
    })
    .catch(() => {
      //console.log('Veillez saisir le texte à copier');
    });
});

$('[data-clipboard=copy]').on('blur', function () {
  $(this).tooltip('hide');
});

$('[data-password=toggle]').on('click tap', function () {
  let thisIcone = $(this).children('i');
  let thisSpan = $(this).children('span');
  let thisParent = $(this).closest('.input-group');
  let thisInput = $(thisParent).find('.form-control');
  if (thisIcone.hasClass('ri-eye-line')) {
    thisIcone.removeClass('ri-eye-line').addClass('ri-eye-off-line');
    thisSpan.html('Masquer');
    thisInput.attr('type', 'text');
  } else {
    thisIcone.removeClass('ri-eye-off-line').addClass('ri-eye-line');
    thisSpan.html('Afficher');
    thisInput.attr('type', 'password');
  }
});

function alertCloseOnce() {
  if ($('.alert-dismissible-once').length) {
    $('.alert-dismissible-once').each(function () {
      let thisAlert = $(this);
      let thisUniqueID = $(thisAlert).attr('id');
      const seenAlert = localStorage.getItem(thisUniqueID);
      if (seenAlert === null) {
        $(thisAlert).removeClass('d-none');
      }
    });
  }
}

$('.alert-dismissible-once .close').on('click tap', function () {
  let thisParent = $(this).closest('.alert-dismissible-once');
  let thisUniqueID = $(thisParent).attr('id');
  localStorage.setItem(thisUniqueID, 'seen');
  $(thisParent).addClass('d-none');
});

// Sorts table by column
function sortTable(header, table) {
  const SORTABLE_STATES = {
    none: 0,
    ascending: -1,
    descending: 1,
    ORDER: ['none', 'ascending', 'descending'],
  };

  let col = [].slice.call(table.tHead.rows[0].cells).indexOf(header);

  let newOrder =
    SORTABLE_STATES.ORDER.indexOf(header.getAttribute('aria-sort')) + 1;
  newOrder = newOrder > SORTABLE_STATES.ORDER.length - 1 ? 0 : newOrder;
  newOrder = SORTABLE_STATES.ORDER[newOrder];

  let headerSorts = table.querySelectorAll('[aria-sort]');

  for (let i = 0, ii = headerSorts.length; i < ii; i += 1) {
    headerSorts[i].setAttribute('aria-sort', 'none');
  }

  header.setAttribute('aria-sort', newOrder);

  let direction = SORTABLE_STATES[newOrder];
  let body = table.tBodies[0];

  let newRows = [].slice.call(body.rows, 0);

  if (direction === 0) {
    newRows.sort(function (a, b) {
      return a.getAttribute('data-index') - b.getAttribute('data-index');
    });
  } else {
    newRows.sort(function (rowA, rowB) {
      let contentA = rowA.cells[col].textContent.trim();
      let contentB = rowB.cells[col].textContent.trim();

      return contentA < contentB ? direction : -direction;
    });
  }
  for (i = 0, ii = body.rows.length; i < ii; i += 1) {
    body.appendChild(newRows[i]);
  }
}

function setupClickableHeader(table, header) {
  header.addEventListener('click', function () {
    sortTable(header, table);
  });
}

function setupSortableTable(table) {
  let rows = table.tBodies[0].rows;
  for (let row = 0, totalRows = rows.length; row < totalRows; row += 1) {
    rows[row].setAttribute('data-index', row);
  }

  let clickableHeaders = table.querySelectorAll('th[aria-sort]');
  for (let i = 0, ii = clickableHeaders.length; i < ii; i += 1) {
    setupClickableHeader(table, clickableHeaders[i]);
  }
}

for (let i = 0, ii = tablesSortable.length; i < ii; i += 1) {
  setupSortableTable(tablesSortable[i]);
}
