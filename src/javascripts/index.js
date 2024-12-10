// Import our custom CSS
import '../stylesheets/app.scss?inline';

// Common vars
const alertDismissibleOnceList = document.querySelectorAll('.alert-dismissible-once');
const textareaExpandableList = document.querySelectorAll('[data-it-expandable=true]');
const inputGroupList = document.querySelectorAll('.input-group');
const inputPasswordList = document.querySelectorAll('[data-it-password=toggle]');
const targetConseiList = document.querySelectorAll('[data-it-target-conseil]');
const actionPrintList = document.querySelectorAll('[data-it-action=print]');
const breakpointXL = getComputedStyle(document.documentElement).getPropertyValue('--bs-breakpoint-xl');

// Init
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
[...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
[...popoverTriggerList].map((popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl));

// Load
window.addEventListener('load', () => {
  // console.log('window loaded');
  postHeaderNavDisplay();
  inputGroupCopyToClipboard();
  buttonCopyToClipboard();
});

// Resize
window.addEventListener('resize', () => {
  // console.log('window resized');
  postHeaderNavDisplay();
});

// Scroll
// window.addEventListener('scroll', () => {
  // console.log('window scrolled');
// });

// Htmx Load
document.addEventListener('htmx:load', () => {
  // console.log('document htmx loaded');
  inputGroupCopyToClipboard();
  buttonCopyToClipboard();
});


// Post header show/hide on scroll up/down
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

// InputGroup copy to clipboard
function inputGroupCopyToClipboard() {
  const clipboardCopyList = document.querySelectorAll('[data-it-clipboard=copy]');
  for (let i = 0, ii = clipboardCopyList.length; i < ii; i += 1) {
    const thisClipboardCopy = clipboardCopyList[i];
    const thisInputGroupClipboardCopy = thisClipboardCopy.closest('.input-group');
    const thisFormControlClipboardCopy = thisInputGroupClipboardCopy.querySelector('.form-control').value;
    const thisTooltip = bootstrap.Tooltip.getOrCreateInstance(thisClipboardCopy);

    thisClipboardCopy.addEventListener('click', function () {
      navigator.clipboard
        .writeText(thisFormControlClipboardCopy)
        .then(() => {
          // console.log('Ok: ' + thisFormControlClipboardCopy);
        })
        .catch(() => {
          // console.log('Veillez saisir le texte à copier');
        });
      thisTooltip.show();
    });

    thisClipboardCopy.addEventListener('blur', function () {
      thisTooltip.hide();
    });
  }
}

// Button copy to clipboard
function buttonCopyToClipboard() {
  const clipboardButtonCopyList = document.querySelectorAll('[data-it-clipboard-button=copy]');
  for (let i = 0, ii = clipboardButtonCopyList.length; i < ii; i += 1) {
    const thisClipboardButtonCopy = clipboardButtonCopyList[i];
    const thisClipboardButtonCopyValue = thisClipboardButtonCopy.dataset.itCopyToClipboard;
    const thisTooltip = bootstrap.Tooltip.getOrCreateInstance(thisClipboardButtonCopy);

    thisClipboardButtonCopy.addEventListener('click', function () {
      navigator.clipboard
        .writeText(thisClipboardButtonCopyValue)
        .then(() => {
          // console.log('Ok: ' + thisClipboardButtonCopyValue);
        })
        .catch(() => {
          // console.log('Veillez saisir le texte à copier');
        });
      thisTooltip.show();
    });

    thisClipboardButtonCopy.addEventListener('blur', function () {
      thisTooltip.hide();
    });
  }
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

// Data action to print page
for (let i = 0, ii = actionPrintList.length; i < ii; i += 1) {
  const thisActionPrint = actionPrintList[i];
  thisActionPrint.addEventListener('click', function print() {
    window.print();
  });
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

// Auto expendable textarea
for (let i = 0, ii = textareaExpandableList.length; i < ii; i += 1) {
  const thisTexterea = textareaExpandableList[i];

  const expandTextarea = function () {
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

  const toggleFocus = function () {
    thisInputGroup.classList.toggle('has-focus');
  };

  thisFormControl.addEventListener('focus', toggleFocus, false);
  thisFormControl.addEventListener('blur', toggleFocus, false);
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
