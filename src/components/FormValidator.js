export default class FormValidator {
    constructor(validationConfig, formElement) {
        this._validationConfig = validationConfig;
        this._formElement = formElement;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._validationConfig.formInput));
        this._buttonElement = this._formElement.querySelector(this._validationConfig.buttonElement);
        this._spanList = formElement.querySelectorAll('.popup__input-error');
    }
    //метод валидации
    enableValidation() {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners();
    };
    //методы показать/cкрыть ошибку
    _showInputError(inputElement) {
        const {inputErrorClass ,errorClass} = this._validationConfig;
        const error = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(inputErrorClass);
        error.textContent = inputElement.validationMessage;
        error.classList.add(errorClass);
    };
    _hideInputError(inputElement) {
        const error = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._validationConfig.inputErrorClass);
        error.classList.remove(this.errorClass);
        error.textContent = '';
    };
    //Проверка на валидность 
    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, this._validationConfig);
        } else if (inputElement.value === "") {
            this._showInputError(inputElement, this._validationConfig);
        } else {
            this._hideInputError(inputElement, this._validationConfig);
        }
    };

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    };
    _toggleButtonState() {
        if (this._hasInvalidInput(this._inputList)) {
            this._buttonElement.classList.add(this._validationConfig.inactiveButtonClass);
            this._buttonElement.disabled = true;
        } else {
            this._buttonElement.classList.remove(this._validationConfig.inactiveButtonClass);
            this._buttonElement.disabled = false;
        }
    };
    deleteError() {
        this._spanList.forEach(error => error.textContent = '');
        this._inputList.forEach(error => error.classList.remove('popup__input_type_error'));
    }

    _setEventListeners() {
        const {formInput, buttonElement, ...restOfConfig} = this._validationConfig;
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault;
        });
               
        this._toggleButtonState();

        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement, restOfConfig)
                this._toggleButtonState();
            });
        });
    };
    
    resetValidation() {
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement)
        });
    }
}

