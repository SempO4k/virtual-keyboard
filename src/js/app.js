import '../style.css';
import keyData from '../data/buttons';
import Button from './Button';

const cssClasses = {
  PAGE_WRAPPER: 'page-wrapper',
  TEXTAREA: 'textarea',
  KEYBOARD: 'keyboard',
};

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

// document.querySelector('.keyboard').addEventListener('click', (event) => {
//   console.log(event.target);
//   const textarea = document.querySelector('.textarea');
//   const point = textarea.selectionStart;
//   console.log(point);
// });

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  const textarea = document.querySelector('.textarea');
  const target = document.querySelector(`.${event.code}`);
  const point = textarea.selectionStart;
  // const textarea = document.querySelector('textarea');
  // textarea.focus();
  // console.log(point);
  // console.log(event.code);
  target.classList.add('active');
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
      textarea.value += '    ';
      break;
    default:
      if (point >= 0 && point <= textarea.value.length) {
        textarea.value = textarea.value.slice(0, point)
        + target.outerText + textarea.value.slice(point, textarea.value.length);
        textarea.selectionStart = point + target.outerText.length;
        textarea.selectionEnd = point + target.outerText.length;
      }
      break;
  }
});

document.addEventListener('keyup', (event) => {
  const target = document.querySelector(`.${event.code}`);
  target.classList.remove('active');
  // console.log(target);
  // console.log(event.code);
});
