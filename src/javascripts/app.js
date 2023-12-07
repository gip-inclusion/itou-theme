// Require libraries

// Common vars
let windowWidth = window.innerWidth;
const burgerNav = document.querySelector('.s-header');
const burgerToggleList = document.querySelectorAll('[data-bs-toggle=burger]');
const tablesSortableList = document.querySelectorAll('[data-bs-table=sortable]');
const alertDismissibleOnceList = document.querySelectorAll('.alert-dismissible-once');
const textareaExpandableList = document.querySelectorAll('[data-it-expandable=true]');
const inputGroupList = document.querySelectorAll('.input-group');
const clipboardCopyList = document.querySelectorAll('[data-it-clipboard=copy]');
const clipboardButtonCopyList = document.querySelectorAll('[data-it-clipboard-button=copy]');
const inputPasswordList = document.querySelectorAll('[data-it-password=toggle]');
const targetConseiList = document.querySelectorAll('[data-it-target-conseil]');
const sTabs01List = document.querySelectorAll('[data-it-s-tabs-01=true]');
const breakpointXL = getComputedStyle(document.documentElement).getPropertyValue('--bs-breakpoint-xl');
const breakpointMD = getComputedStyle(document.documentElement).getPropertyValue('--bs-breakpoint-md');

// Init
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));


// Load
window.addEventListener('load', (e) => {
  postHeaderNavDisplay();
  autoCollapseAsideFilters();
});

// Resize
window.addEventListener('resize', (e) => {
  postHeaderNavDisplay();
  autoCollapseAsideFilters();

  if (window.matchMedia('(min-width: ' + breakpointXL + ')').matches & burgerNav != null) {
    burgerNav.classList.remove('is-opened');
  }
});

// Scroll
window.addEventListener('scroll', (e) => {
  // console.log('page scrolled');
});

// Burger Menu
for (let i = 0,  ii = burgerToggleList.length; i < ii; i += 1) {
  const thisBurgerToggle = burgerToggleList[i];

  thisBurgerToggle.addEventListener('click', function (e) {
    e.preventDefault();
    burgerNav.classList.toggle('is-opened');
  });

  thisBurgerToggle.addEventListener('keypress', function (e) {
    if (e.which == 13) {
      e.preventDefault();
      burgerNav.classList.toggle('is-opened');
    }
  });
}

// Show data-it-target-conseil
for (let i = 0, ii = targetConseiList.length; i < ii; i += 1) {
  const thisTargetConseil = targetConseiList[i];
  const thisTargetConseilID = thisTargetConseil.getAttribute('data-it-target-conseil');
  const thisTargetID = document.querySelector(thisTargetConseilID);

  thisTargetConseil.addEventListener('focus', function (e) {
    e.preventDefault();
    thisTargetID.classList.remove('is-openable');
  });
  thisTargetConseil.addEventListener('blur', function (e) {
    e.preventDefault();
    thisTargetID.classList.add('is-openable');
  });
}

// Post header swoh/hide on scroll up/down
function postHeaderNavDisplay() {
  const postHeaderNav = document.querySelector('.s-postheader');

  if (postHeaderNav != null) {
    let thisNavTopOffset = postHeaderNav.getBoundingClientRect().top;
    let lastScrollTop = 0;

    if (document.querySelector('.toast-container') != null) {
      document.querySelector('.toast-container').style.paddingTop = '59px';
    }

    window.addEventListener('scroll', () => {
      let windowScrollTop = window.scrollY;

      if (windowScrollTop >= thisNavTopOffset) {
        if (window.matchMedia('(min-width: ' + breakpointXL + ')').matches) {
          document.querySelector('main').style.paddingTop = '59px';
          if (document.querySelector('.toast-container') != null) {
            document.querySelector('.toast-container').style.paddingTop = '0';
          }
        }
        if (lastScrollTop > windowScrollTop) {
          postHeaderNav.classList.remove('it-scrolldown');
          postHeaderNav.classList.add('it-scrollup');
        } else {
          postHeaderNav.classList.remove('it-scrollup');
          postHeaderNav.classList.add('it-scrolldown');
        }
      } else {
        postHeaderNav.classList.remove('it-scrollup', 'it-scrolldown');
        if (window.matchMedia('(min-width: ' + breakpointXL + ')').matches) {
          document.querySelector('main').style.paddingTop = '0';
          if (document.querySelector('.toast-container') != null) {
            document.querySelector('.toast-container').style.paddingTop = '59px';
          }
        }
      }
      lastScrollTop = windowScrollTop;
    });
  }
}

// Show/Hide Alert dismissible only once
for (let i = 0, ii = alertDismissibleOnceList.length; i < ii; i += 1) {
  const thisAlert = alertDismissibleOnceList[i];
  const thisID = thisAlert.getAttribute('id');
  const thisButtonClose = thisAlert.querySelector('.btn-close');

  const seenAlert = localStorage.getItem(thisID);

  if (seenAlert === null) {
    thisAlert.classList.remove('d-none');
  }

  thisButtonClose.addEventListener('click', function () {
    localStorage.setItem(thisID, 'seen');
    thisAlert.classList.add('d-none');
  });
}

// Sorts table by column
for (let i = 0, ii = tablesSortableList.length; i < ii; i += 1) {
  setupSortableTable(tablesSortableList[i]);
}

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

// Auto expendable textarea
for (let i = 0, ii = textareaExpandableList.length; i < ii; i += 1) {
  const thisTexterea = textareaExpandableList[i];

  const expandTextarea = function (e) {
    thisTexterea.style.removeProperty('height');
    thisTexterea.style.height = this.scrollHeight + 2 + 'px';
  };

  thisTexterea.addEventListener('keydown', expandTextarea, false);
  thisTexterea.addEventListener('mousedown', expandTextarea, false);
}

// Add global focus on input-group
for (let i = 0, ii = inputGroupList.length; i < ii; i += 1) {
  const thisInputGroup = inputGroupList[i];
  const thisFormControl = thisInputGroup.querySelector('.form-control, .form-select');

  const toggleFocus = function (e) {
    thisInputGroup.classList.toggle('has-focus');
  }

  thisFormControl.addEventListener('focus', toggleFocus, false);
  thisFormControl.addEventListener('blur', toggleFocus, false);
}

// InputGroup copy to clipboard
for (let i = 0,  ii = clipboardCopyList.length; i < ii; i += 1) {
  const thisClipboardCopy = clipboardCopyList[i];
  const thisInputGroupClipboardCopy = thisClipboardCopy.closest('.input-group');
  const thisFormControlClipboardCopy = thisInputGroupClipboardCopy.querySelector('.form-control').value;
  const thisTooltip = bootstrap.Tooltip.getOrCreateInstance(thisClipboardCopy);

  thisClipboardCopy.addEventListener('click', function () {
    navigator.clipboard
      .writeText(thisFormControlClipboardCopy)
      .then(() => {
        //console.log('Ok: ' + thisFormControlClipboardCopy);
      })
      .catch(() => {
        //console.log('Veillez saisir le texte à copier');
      });
      thisTooltip.show();
  });

  thisClipboardCopy.addEventListener('blur', function () {
    thisTooltip.hide();
  });
}

// Button copy to clipboard
for (let i = 0,  ii = clipboardButtonCopyList.length; i < ii; i += 1) {
  const thisClipboardButtonCopy = clipboardButtonCopyList[i];
  const thisClipboardButtonCopyValue = thisClipboardButtonCopy.dataset.itCopyToClipboard;
  const thisTooltip = bootstrap.Tooltip.getOrCreateInstance(thisClipboardButtonCopy);

  thisClipboardButtonCopy.addEventListener('click', function () {
    navigator.clipboard
      .writeText(thisClipboardButtonCopyValue)
      .then(() => {
        //console.log('Ok: ' + thisFormControlClipboardCopy);
      })
      .catch(() => {
        //console.log('Veillez saisir le texte à copier');
      });
      thisTooltip.show();
  });

  thisClipboardButtonCopy.addEventListener('blur', function () {
    thisTooltip.hide();
  });
}

// InputGroup toggle input text/password
for (let i = 0, ii = inputPasswordList.length; i < ii; i += 1) {
  const thisInputPassword = inputPasswordList[i];
  const thisInputGroupInputPassword = thisInputPassword.closest('.input-group');
  const thisFormControlInputPassword = thisInputGroupInputPassword.querySelector('.form-control');
  const thisIconeInputPassword = thisInputPassword.querySelector('i');
  const thisSpanInputPassword = thisInputPassword.querySelector('span');

    thisInputPassword.addEventListener('click', function () {
      if (thisIconeInputPassword.classList.contains('ri-eye-line')) {
        thisIconeInputPassword.classList.remove('ri-eye-line');
        thisIconeInputPassword.classList.add('ri-eye-off-line');
        thisFormControlInputPassword.setAttribute('type', 'text');
        thisSpanInputPassword.innerHTML = 'Masquer';
      } else {
        thisIconeInputPassword.classList.remove('ri-eye-off-line');
        thisIconeInputPassword.classList.add('ri-eye-line');
        thisFormControlInputPassword.setAttribute('type', 'password');
        thisSpanInputPassword.innerHTML = 'Afficher';
      }
    });
}

// Show/hide aside-filters on desktop/mobile
function autoCollapseAsideFilters() {
  const asideFilters = document.querySelector('.c-aside-filters');

  if (asideFilters != null) {
    const asideFiltersForm = document.querySelector('#asideFiltersCollapse');
    const asideFiltersFormCollapse = new bootstrap.Collapse(asideFiltersForm, {
      toggle: false,
    });

    if (window.matchMedia('(min-width: ' + breakpointMD + ')').matches) {
      asideFiltersFormCollapse.show();
    } else {
      asideFiltersFormCollapse.hide();
    }
  }
}

// Section Tabs add/remove items from Dropdown
for (let i = 0, ii = sTabs01List.length; i < ii; i += 1) {
  // Init on load
  const thisSTabs01 = sTabs01List[i];
  const thisSTabs01NavItem = thisSTabs01.querySelectorAll('.nav-item');
  const thisSTabs01NavItemDropdown = thisSTabs01.querySelector('.nav-item-dropdown');
  const thisSTabs01NavItemDropdownWidth = Math.round(thisSTabs01NavItemDropdown.offsetWidth + 4);

  let thisSTabs01NavItemsWidthArrayInit = [];
  thisSTabs01NavItem.forEach(function (item, index) {
    let thisSTabs01NavThisItemWidth = Math.round(item.offsetWidth + 4);
    thisSTabs01NavItemsWidthArrayInit.push(thisSTabs01NavThisItemWidth);
  });
  thisSTabs01NavItemsWidthArrayInit.push(thisSTabs01NavItemDropdownWidth);

  tabsItemsToDropdownAdd(thisSTabs01);

  // On resize
  window.addEventListener('resize', () => {
    let newWindowWidth = window.innerWidth;

    if (newWindowWidth < windowWidth) {
      tabsItemsToDropdownAdd(thisSTabs01);
    } else {
      tabsItemsToDropdownRemove(thisSTabs01, thisSTabs01NavItemsWidthArrayInit);
    }

    windowWidth = newWindowWidth;
  });
}

function tabsItemsToDropdownAdd(thisTabs) {
  const sTabs01NavWidthCurrent = Math.round(thisTabs.offsetWidth);
  const sTabs01NavItem = thisTabs.querySelectorAll('.nav-item');
  const sTabs01NavItemLast = sTabs01NavItem[sTabs01NavItem.length - 1];
  const sTabs01NavItemDropdown = thisTabs.querySelector('.nav-item-dropdown');
  const sTabs01NavItemDropdownWidth = Math.round(sTabs01NavItemDropdown.offsetWidth + 4);
  const sTabs01NavItemDropdownMenu = thisTabs.querySelector('.dropdown-menu');

  let sTabs01NavItemsWidthArrayCurrent = [];
  sTabs01NavItem.forEach(function (item, index) {
    let sTabs01NavThisItemWidth = Math.round(item.offsetWidth + 4);
    sTabs01NavItemsWidthArrayCurrent.push(sTabs01NavThisItemWidth);
  });
  sTabs01NavItemsWidthArrayCurrent.push(sTabs01NavItemDropdownWidth);

  let sTabs01NavItemsWidthSum = sTabs01NavItemsWidthArrayCurrent.reduce(function (a, b) { return a + b; } );

  if (sTabs01NavItemsWidthSum >= sTabs01NavWidthCurrent) {
    let sTabs01NavItemLasttoClone = sTabs01NavItemLast.querySelector('.nav-link').cloneNode(true);
    sTabs01NavItemLasttoClone.removeAttribute('class');
    sTabs01NavItemDropdownMenu.prepend(sTabs01NavItemLasttoClone);

    thisTabs.removeChild(sTabs01NavItemLast);
    sTabs01NavItemDropdown.style.visibility = 'visible';

    tabsItemsToDropdownAdd(thisTabs);
  }
}

function tabsItemsToDropdownRemove(thisTabs, thisTabsNavItemsWidthArrayInit) {
  let sTabs01NavWidthCurrent = Math.round(thisTabs.offsetWidth);
  let sTabs01NavItem = thisTabs.querySelectorAll('.nav-item');
  const sTabs01NavItemDropdown = thisTabs.querySelector('.nav-item-dropdown');
  const sTabs01NavItemDropdownWidth = Math.round(sTabs01NavItemDropdown.offsetWidth + 4);
  const sTabs01NavItemDropdownMenu = thisTabs.querySelector('.dropdown-menu');

  let sTabs01NavItemsWidthArrayCurrent = [];
  sTabs01NavItem.forEach(function (item, index) {
    let sTabs01NavThisItemWidth = Math.round(item.offsetWidth + 4);
    sTabs01NavItemsWidthArrayCurrent.push(sTabs01NavThisItemWidth);
  });
  sTabs01NavItemsWidthArrayCurrent.push(sTabs01NavItemDropdownWidth);

  let sTabs01NavItemsWidthSum = sTabs01NavItemsWidthArrayCurrent.reduce(function (a, b) {return a + b;} );

  let sTabs01NavItemsWidthNextIndex = parseInt(sTabs01NavItemsWidthArrayCurrent.length - 1);
  let freeWithForNextTab = Math.round(sTabs01NavWidthCurrent - sTabs01NavItemsWidthSum);
  let needWithForNextTab = thisTabsNavItemsWidthArrayInit[sTabs01NavItemsWidthNextIndex];

  if (sTabs01NavItemDropdownMenu.querySelector('a') !== null) {
    if (freeWithForNextTab > needWithForNextTab) {
      let thisItemToRemove = sTabs01NavItemDropdownMenu.firstElementChild;
      let thisItemToClone = thisItemToRemove.cloneNode(true);
      thisItemToClone.classList.add('nav-link');

      sTabs01NavItemDropdown.insertAdjacentHTML('beforebegin', '<li class="nav-item" role="presentation"></li>');
      sTabs01NavItem = thisTabs.querySelectorAll('.nav-item');
      let sTabs01NavItemLast = sTabs01NavItem[sTabs01NavItem.length - 1];
      sTabs01NavItemLast.appendChild(thisItemToClone);
      thisItemToRemove.remove();
    }
    sTabs01NavItemDropdown.style.visibility = 'visible';
  } else {
    sTabs01NavItemDropdown.style.visibility = 'hidden';
  }
}
