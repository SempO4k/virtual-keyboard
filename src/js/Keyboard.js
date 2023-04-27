class KeyBoard {
  constructor({ ruLang, enLang }) {
    this.ruLang = ruLang;
    this.enLang = enLang;
  }

  // createRow() {
  // }
  generateButton() {
    const button = document.createElement('div');
    const ruButton = document.createElement('span');
    ruButton.className = '';
    const caseDown = document.createElement('span');
    const caseUp = document.createElement('span');
    const shiftCaps = document.createElement('span');
    ruButton.append(caseDown);
    return button;
  }
}