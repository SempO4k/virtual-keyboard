export default class Button {
  constructor({ keyId, keySymbol, langRu }) {
    this.keyId = keyId;
    this.keySymbol = keySymbol;
    this.ruLang = langRu;
  }

  generateButton() {
    const buttonCase = document.createElement('div');
    buttonCase.className = `key ${this.keyId}`;

    for (let i = 0; i < 2; i += 1) {
      const lang = document.createElement('span');
      lang.className = (i === 1) ? 'en' : 'ru hidden';
      buttonCase.append(lang);
      const caseDown = document.createElement('span');
      const caseUp = document.createElement('span');
      const shiftCaps = document.createElement('span');
      caseDown.className = 'caseDown';
      caseUp.className = 'caseUp hidden';
      shiftCaps.className = 'shiftCaps hidden';
      lang.append(caseDown);
      lang.append(caseUp);
      lang.append(shiftCaps);
      caseDown.textContent = (i === 1) ? this.keySymbol : this.ruLang;
      caseUp.textContent = (i === 1) ? (this.keySymbol).toUpperCase() : (this.ruLang).toUpperCase();
      shiftCaps.textContent = (i === 1) ? this.keySymbol : this.ruLang;
      caseDown.className = 'caseDown';
      caseUp.className = 'caseUp hidden';
      shiftCaps.className = 'shiftCaps hidden';
    }
    return buttonCase;
  }
}
