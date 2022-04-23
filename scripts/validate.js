const formValidation = {
  form: '.form',
  formInput: '.popup__input',
  buttonElement: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}; 
const showInputError = (formElement, inputElement, errorMessage, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
};

const hideInputError = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = '';
}

const checkInputValidity = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, config);
  } else if (inputElement.value === "") {
    showInputError(formElement, inputElement, inputElement.validationMessage, config);
  } else {
    hideInputError(formElement, inputElement, config);
  }
};

function invalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}
const setEventListeners = (formElement, config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.formInput));
  const buttonElement = formElement.querySelector(config.buttonElement);
  toggleButtonState(inputList, buttonElement, config);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(inputList, inputElement, config);
    });
  });
};

function enableValidation (config) {
  const formList = Array.from(document.querySelectorAll(config.form));
  formList.forEach((formElement) => {
  formElement.addEventListener('submit', (evt) => {
    
  });
    setEventListeners(formElement, config);
}); 
}

function toggleButtonState (inputList, buttonElement, config) {
  if (invalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass); 
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.disabled = false;
  }
}

const disabledButton = (buttonElement, config) => {
  buttonElement.classList.add(config.inactiveButtonClass);
  buttonElement.disabled = true;
}

function reset() {
  const errorInputList = Array.from(document.querySelectorAll('.popup__input'));
  const errorList = Array.from(document.querySelectorAll('.popup__error_visible'));
  errorList.forEach((errorElement) => {
    errorElement.classList.remove('popup__error_visible');
    errorElement.textContent = "";
  });
  errorInputList.forEach((inputElement) => {
    inputElement.classList.remove('popup__input_type_error');
    inputElement.value = "";
  });
}

enableValidation(formValidation);