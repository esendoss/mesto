import Popup from "../components/Popup.js";
import { validationConfig } from "../utils/constants.js";
export default class PopupWithForm extends Popup {
  constructor({popupSelector, submitForm}) {
    super(popupSelector);
    this._form = this._popup.querySelector(validationConfig.formSelector);
    this._submitButton = this._popup.querySelector(validationConfig.buttonElement);
    this._submitForm = submitForm;
    this._inputList = this._popup.querySelectorAll(validationConfig.formInput);
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
      this.close();
    });
  }
  close() {
    this._form.reset();
    super.close();
  }
}