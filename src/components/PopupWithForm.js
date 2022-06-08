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
    this._inputList.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitForm(this._getInputValues());
    });
  }
  close() {
    this._form.reset();
    super.close();
  }
  renderLoading(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = 'Сохранение...';
    } else {
      this._submitButton.textContent = 'Сохранить';
    }
  }
      
}