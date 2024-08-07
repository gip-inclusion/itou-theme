// Require libraries

// Common vars
let windowWidth = window.innerWidth;
const burgerToggleList = document.querySelectorAll('[data-bs-toggle=burger]');
const tablesSortableList = document.querySelectorAll('[data-bs-table=sortable]');
const alertDismissibleOnceList = document.querySelectorAll('.alert-dismissible-once');
const textareaExpandableList = document.querySelectorAll('[data-it-expandable=true]');
const inputGroupList = document.querySelectorAll('.input-group');
const clipboardCopyList = document.querySelectorAll('[data-it-clipboard=copy]');
const clipboardButtonCopyList = document.querySelectorAll('[data-it-clipboard-button=copy]');
const inputPasswordList = document.querySelectorAll('[data-it-password=toggle]');
const targetConseiList = document.querySelectorAll('[data-it-target-conseil]');
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
});

// Resize
window.addEventListener('resize', (e) => {
  postHeaderNavDisplay();
});

// Scroll
window.addEventListener('scroll', (e) => {
  // console.log('page scrolled');
});

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

    window.addEventListener('scroll', () => {
      let windowScrollTop = window.scrollY;

      if (windowScrollTop >= thisNavTopOffset) {
        if (window.matchMedia('(min-width: ' + breakpointXL + ')').matches) {
          document.querySelector('main').style.paddingTop = '59px';
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
