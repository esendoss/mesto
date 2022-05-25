import Popup from "../components/Popup.js";

export default class PopupWithForm extends Popup {
  constructor({popupSelector, submitForm}) {
    super(popupSelector);
    this._form = this._popup.querySelector('.form');
    this._submitButton = this._popup.querySelector('.popup__submit');
    this._submitForm = submitForm;
    this._inputList = this._popup.querySelectorAll('.popup__input');
  }
  _getInputValues() {
    const inputValues = {};
    this._inputList.forEach(input => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }
  _submitData(evt) {
    evt.preventDefault();
    this._submitForm(this._getInputValues());
  }
  setEventListeners() {
    super.setEventListeners();
    this._submitButton.addEventListener('submit', this._submitData);
  }
  close() {
    this._inputList.forEach(input => {
      input.value = '';
    });
    super.close();
  }
}