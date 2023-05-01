/* eslint-disable no-unused-expressions */
import '../style.css';
import keyData from '../data/buttons';
import Button from './Button';

const cssClasses = {
  PAGE_WRAPPER: 'page-wrapper',
  TEXTAREA: 'textarea',
  KEYBOARD: 'keyboard',
};
const SPECIAL_KEYS = [
  'Backspace',
  'Delete',
  'Space',
  'Tab',
  'Enter',
  'CapsLock',
  'ShiftLeft',
  'ShiftRight',
  'AltLeft',
  'AltRight',
  'ControlLeft',
  'ControlRight',
  'MetaLeft',
];

const pressed = new Set();

function createElement(tagName, className) {
  const element = document.createElement(tagName);
  element.className = className;
  return element;
}

function createComponent() {
  const component = createElement('div', cssClasses.PAGE_WRAPPER);
  const textArea = createElement('textarea', cssClasses.TEXTAREA);
  const keyboard = createElement('div', cssClasses.KEYBOARD);
  component.appendChild(textArea);
  component.appendChild(keyboard);
  return component;
}

document.body.appendChild(createComponent());

function generateButtons(keyLayout) {
  const buttons = [];
  keyLayout.forEach((key) => {
    buttons.push(new Button(key));
  });
  // console.log(buttons);
  return buttons;
}
function renderButtonToDom() {
  const boardContainer = document.querySelector('.keyboard');
  generateButtons(keyData).forEach((key) => {
    boardContainer.append(key.generateButton());
  });
}

function switchLang() {
  const lang = document.querySelectorAll('.lang');
  lang.forEach((key) => {
    key.classList.contains('hidden')
      ? key.classList.remove('hidden')
      : key.classList.add('hidden');
  });
  const language = (lang[0].classList.contains('hidden')) ? 'en' : 'ru';
  localStorage.setItem('lang', language);
}

function switchCase() {
  const lang = document.querySelectorAll('.lang');
  lang.forEach((key) => {
    if (key.querySelectorAll('span')[0].classList.contains('hidden')) {
      key.querySelectorAll('span')[0].classList.add('hidden');
    }
    if (key.querySelectorAll('span')[1].classList.contains('hidden')) {
      key.querySelectorAll('span')[1].classList.add('hidden');
    }
    if (key.querySelectorAll('span')[2].classList.contains('hidden')) {
      key.querySelectorAll('span')[2].classList.add('hidden');
    }
  });
}

function addActive(e) {
  document.querySelector(`.${e}`).classList.add('active');
}

// function removeActive(e) {
//   document.querySelector(`.${e}`).classList.remove('active');
// }

function addKeyFunctions(e) {
  const textarea = document.querySelector('.textarea');
  const point = textarea.selectionStart;
  const target = document.querySelector(`.${e}`);
  console.log(pressed);
  if (SPECIAL_KEYS.includes(e.code)) {
    switch (e) {
      case 'Space':
        textarea.value += ' ';
        break;
      case 'CapsLock':
        break;
      case 'Enter':
        textarea.value += '\n';
        break;
      case 'Backspace':
        if (point > 0 && point <= textarea.value.length - 1) {
          textarea.value = textarea.value.slice(0, point - 1)
          + textarea.value.slice(point, textarea.value.length);
          textarea.selectionStart = point - 1;
          textarea.selectionEnd = point - 1;
        } else {
          textarea.value = textarea.value.slice(0, -1);
          textarea.selectionStart = point - 1;
          textarea.selectionEnd = point - 1;
        }
        break;
      case 'Delete':
        if (point >= 0 && point <= textarea.value.length - 1) {
          textarea.value = textarea.value.slice(0, point)
          + textarea.value.slice(point + 1, textarea.value.length);
          textarea.selectionStart = point;
          textarea.selectionEnd = point;
        }
        break;
      case 'Tab':
        textarea.value += '\t';
        break;
      default:
        break;
    }
    if (pressed.has('ShiftLeft') && pressed.has('AltLeft')) switchLang();
    if (pressed.has('ShiftLeft')) switchCase();
  } else {
    textarea.value = textarea.value.slice(0, point)
    + target.outerText + textarea.value.slice(point, textarea.value.length);
    textarea.selectionStart = point + target.outerText.length;
    textarea.selectionEnd = point + target.outerText.length;
  }
  addActive(e);
}

function keyDownHandler() {
  document.addEventListener('keydown', (event) => {
    event.preventDefault();
    pressed.add(event.code);
    addKeyFunctions(event.code);
  });
}

function keyUpHandler() {
  document.addEventListener('keyup', (event) => {
    event.preventDefault();
    const target = document.querySelector(`.${event.code}`);
    target.classList.remove('active');
    pressed.delete(event.code);
  });
}

function mouseDownHandler() {
  document.querySelector('.keyboard').addEventListener('mousedown', (event) => {
    event.preventDefault();
    if (event.target.tagName === 'SPAN') {
      const elem = event.target.closest('div').classList[1];
      addKeyFunctions(elem);
    }
  });
}

function mouseUpHandler() {
  document.querySelector('.keyboard').addEventListener('mouseup', (event) => {
    event.target.classList.remove('active');
  });
}

// document.addEventListener('keydown', (event) => {
// event.preventDefault();
// const textarea = document.querySelector('.textarea');
// const target = document.querySelector(`.${event.code}`);
// const point = textarea.selectionStart;
// pressed.add(event.code);
// // console.log(event.code);
// target.classList.add('active');
// if (SPECIAL_KEYS.includes(event.code)) {
//   switch (event.code) {
//     case 'Space':
//       textarea.value += ' ';
//       break;
//     case 'CapsLock':
//       break;
//     case 'Enter':
//       textarea.value += '\n';
//       break;
//     case 'Backspace':
//       if (point > 0 && point <= textarea.value.length - 1) {
//         textarea.value = textarea.value.slice(0, point - 1)
//         + textarea.value.slice(point, textarea.value.length);
//         textarea.selectionStart = point - 1;
//         textarea.selectionEnd = point - 1;
//       } else {
//         textarea.value = textarea.value.slice(0, -1);
//         textarea.selectionStart = point - 1;
//         textarea.selectionEnd = point - 1;
//       }
//       break;
//     case 'Delete':
//       if (point >= 0 && point <= textarea.value.length - 1) {
//         textarea.value = textarea.value.slice(0, point)
//         + textarea.value.slice(point + 1, textarea.value.length);
//         textarea.selectionStart = point;
//         textarea.selectionEnd = point;
//       }
//       break;
//     case 'Tab':
//       textarea.value += '\t';
//       break;
//     default:
//       break;
//   }
//   if (pressed.has('ShiftLeft') && pressed.has('AltLeft')) switchLang();
//   if (pressed.has('ShiftLeft')) switchCase();
// } else {
//   textarea.value = textarea.value.slice(0, point)
//   + target.outerText + textarea.value.slice(point, textarea.value.length);
//   textarea.selectionStart = point + target.outerText.length;
//   textarea.selectionEnd = point + target.outerText.length;
// }
// });

// document.addEventListener('keyup', (event) => {
//   const target = document.querySelector(`.${event.code}`);
//   target.classList.remove('active');
//   pressed.delete(event.code);
// });

// document.querySelector('.keyboard').addEventListener('mousedown', (event) => {
//   event.preventDefault();
//   if (event.target.tagName === 'SPAN') {
//     console.log(event.target.closest('div'));
//     const elem = event.target.closest('div').classList[1];
//     console.log(elem);
//   }
//   event.target.classList.add('active');
//   console.log(event.target.tagName);
//   const textarea = document.querySelector('.textarea');
//   const point = textarea.selectionStart;
//   console.log(point);
// });

// document.querySelector('.keyboard').addEventListener('mouseup', (event) => {
//   event.target.classList.remove('active');
// });

window.addEventListener('load', () => {
  if (keyData) {
    renderButtonToDom();
    keyDownHandler();
    keyUpHandler();
    mouseDownHandler();
    mouseUpHandler();
  }
});
