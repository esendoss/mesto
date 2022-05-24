import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({popupSelector, submitForm}) {
    super(popupSelector);
    this._form = this._popup.querySelector('.form');
    this._submitForm = submitForm;
    this._submitButton = this._popup.querySelector('.popup__submit');
    this._inputList = this._popup.querySelectorAll('.popup__input');
  }
  _getInputValues() {
    const inputValues = {};
    this._inputList.forEach(input => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', event => {
      event.preventDefault();
      this._submitForm(this._getInputValues());
      this.close();
    });
  }
  close() {
    super.close();
    this._form.reset();
  }
}