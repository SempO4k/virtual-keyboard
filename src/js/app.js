import '../style.css';
import Keyboard from './Keyboard';

function createElement(tagName, className) {
  const element = document.createElement(tagName);
  element.className = className;
  return element;
}

function createComponent() {
  const component = createElement('div', 'keyboard-wrapper');
  const textArea = createElement('textarea', 'textarea');
  const keyboard = createElement('div', 'keyboard');
  component.appendChild(textArea);
  component.appendChild(keyboard);
  return component;
}

// const keyboardComponent = createComponent();
document.body.appendChild(createComponent());

const keyb = new Keyboard();
keyb.generateButton('a', 'b');
document.querySelector('.keyboard').appendChild(keyb.generateButton('a', 'b'));
