import '../style.css';
import Keyboard from './Keyboard';

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

// const keyboardComponent = createComponent();
document.body.appendChild(createComponent());

const keyb = new Keyboard();
keyb.generateButton('a', 'b');
document.querySelector('.keyboard').appendChild(keyb.generateButton('a', 'b'));
