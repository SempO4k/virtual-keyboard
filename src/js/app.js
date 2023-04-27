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
