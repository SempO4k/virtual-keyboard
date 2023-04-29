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
renderButtonToDom();
