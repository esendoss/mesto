export default class FormValidator {
    constructor(formValidation, formElement) {
        this._formValidation = formValidation;
        this._form = formElement;
        this._inputList = Array.from(formElement.querySelectorAll(this._formValidation.formInput));
        this._buttonElement = formElement.querySelector(this._formValidation.buttonElement);
        this._spanList = formElement.querySelectorAll('.popup__input-error');
    }
    //метод валидации
    enableValidation() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners(this._form);
    };
    //методы показать/cкрыть ошибку
    _showInputError(formElement, inputElement, errorMessage) {
        const error = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._formValidation.inputErrorClass);
        error.textContent = errorMessage;
        error.classList.add(this._formValidation.errorClass);
    };
    _hideInputError(formElement, inputElement) {
        const error = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._formValidation.inputErrorClass);
        error.classList.remove(this._formValidation.errorClass);
        error.textContent = '';
    };
    //Проверка на валидность 
    _checkInputValidity(formElement, inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(formElement, inputElement, inputElement.validationMessage);
        } else if (inputElement.value === "") {
            this._showInputError(formElement, inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(formElement, inputElement);
        }
    };
    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    };
    toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._buttonElement.classList.add(this._formValidation.inactiveButtonClass);
            this._buttonElement.disabled = true;
        } else {
            this._buttonElement.classList.remove(this._formValidation.inactiveButtonClass);
            this._buttonElement.disabled = false;
        }
    };
    deleteError() {
        this._spanList.forEach(error => error.textContent = '');
        this._inputList.forEach(error => error.classList.remove('popup__input_type_error'));
    }
    _setEventListeners(formElement) {
        this.toggleButtonState();
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(formElement, inputElement)
                this.toggleButtonState();
            });
        });
    };
}

