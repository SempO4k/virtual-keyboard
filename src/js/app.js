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

window.addEventListener('load', () => {
  if (keyData) {
    renderButtonToDom();
  }
});

function switchLang() {
  const lang = document.querySelectorAll('.lang');
  lang.forEach((key) => {
    key.classList.contains('hidden')
      ? key.classList.remove('hidden')
      : key.classList.add('hidden');
  });
}

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  const textarea = document.querySelector('.textarea');
  const target = document.querySelector(`.${event.code}`);
  const point = textarea.selectionStart;
  pressed.add(event.code);
  // console.log(event.code);
  target.classList.add('active');

  if (SPECIAL_KEYS.includes(event.code)) {
    switch (event.code) {
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
  } else {
    textarea.value = textarea.value.slice(0, point)
    + target.outerText + textarea.value.slice(point, textarea.value.length);
    textarea.selectionStart = point + target.outerText.length;
    textarea.selectionEnd = point + target.outerText.length;
  }
});

document.addEventListener('keyup', (event) => {
  const target = document.querySelector(`.${event.code}`);
  target.classList.remove('active');
  pressed.delete(event.code);
});
