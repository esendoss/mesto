const formValidation = {
  formSelector: '.form',
  formInput: '.popup__input',
  buttonElement: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}; 

// показать/cкрыть ошибку
const showInputError = (formElement, inputElement, errorMessage, config) => {
  const error = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  error.textContent = errorMessage;
  error.classList.add(config.errorClass);
};
const hideInputError = (formElement, inputElement, config) => {
  const error = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  error.classList.remove(config.errorClass);
  error.textContent = '';

};

const checkInputValidity = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, config);
  } else if (inputElement.value === "") {
    showInputError(formElement, inputElement, inputElement.validationMessage, config);
  } else {
    hideInputError(formElement, inputElement, config);
  }
};
function hasInvalidInput(inputList){
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  }); 
};
const setEventListeners = (formElement, config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.formInput));
  const buttonElement = formElement.querySelector(config.buttonElement);
  toggleButtonState(inputList, buttonElement, config);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(inputList, buttonElement, config);

    });
  });
};
function enableValidation (config){
  const formList = Array.from(document.querySelectorAll(config.formSelector));
formList.forEach((formElement) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });
    setEventListeners(formElement, config);
});
};
function toggleButtonState (inputList, buttonElement, config) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.disabled = false;
  } 
};
const disableSubmitButton = (buttonElement, config) => {
  buttonElement.classList.add(config.inactiveButtonClass);
  buttonElement.disabled = true;
};

function reset() {
  const errorInputList = Array.from(document.querySelectorAll('.popup__input'));
  const errorlist = Array.from(document.querySelectorAll('.popup__error_visible'));
  errorlist.forEach((error) => {
    error.classList.remove('popup__error_visible');
    error.textContent = "";
  });
  errorInputList.forEach((inputElement) => {
    inputElement.classList.remove('popup__input_type_error');
    inputElement.value = "";
  });
};

enableValidation(formValidation);