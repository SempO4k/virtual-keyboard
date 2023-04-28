export default class Keyboard {
  constructor(ruLang, enLang) {
    this.ruLang = ruLang;
    this.enLang = enLang;
  }

  generateButton() {
    const button = document.createElement('div');
    const ruButton = document.createElement('span');
    ruButton.className = '';
    const caseDown = document.createElement('span');
    const caseUp = document.createElement('span');
    const shiftCaps = document.createElement('span');
    button.append(ruButton);
    ruButton.append(caseDown);
    ruButton.textContent = this.ruLang;
    ruButton.append(caseUp);
    ruButton.textContent = this.ruLang;
    ruButton.append(shiftCaps);
    return button;
  }
}
