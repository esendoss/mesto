import { initialCards } from "./initialCards.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { cardPopup } from "../utils/constants.js";
import { openPopup, closePopup } from "../utils/utils.js";

//переменные для попапов
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const profileEditPopup = document.querySelector('.popup_edit');
const profileAddPopup = document.querySelector('.popup_add');
//переменные для кнопки выхода 
const exitEditButton = document.querySelector('.popup__exit_edit');
const exitImgButton = document.querySelector('.popup__exit_pic');
const exitAddButton = document.querySelector('.popup__exit_add');
//переменные данных в редакторе профиля
const profileEditForm = document.querySelector('.edit-form');
const nameInput = document.querySelector('.profile__name');
const jobInput = document.querySelector('.profile__about');
const userName = profileEditForm.querySelector('.popup__input_data_name');
const description = profileEditForm.querySelector('.popup__input_data_job');

const galleryContainer = document.querySelector('.gallery');
const addCardsForm = document.querySelector('.add-form');
//переменные инпутов в редакторе профиля
const cardTitle = document.querySelector('.popup__input_data_title');
const cardUrl = document.querySelector('.popup__input_data_img');

const validationConfig = {
  formSelector: '.form_validate',
  formInput: '.popup__input',
  buttonElement: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

//Валидация форм
//редактор профиля
const formProfileValidate = new FormValidator(validationConfig, profileEditForm);
formProfileValidate.enableValidation();
//добавление карточки
const formCardValidate = new FormValidator(validationConfig, addCardsForm);
formCardValidate.enableValidation();

const createCard = (galleryCard) => {
  const card = new Card(galleryCard, '#gallery-cards');
  const cardElement = card.generateCard();
  return cardElement;
};

initialCards.forEach((galleryCard) => {
  const createCardObj = createCard(galleryCard);
  galleryContainer.append(createCardObj);
});

const renderCard = (card) => {
  const createNewCard = createCard(card)
  galleryContainer.prepend(createNewCard);
};

const addCard = () => {
  closePopup(profileAddPopup);
  const newCard = {};
  newCard.name = cardTitle.value;
  newCard.link = cardUrl.value;
  renderCard(newCard);
};

profileEditButton.addEventListener('click', () => {
  userName.value = nameInput.textContent;
  description.value = jobInput.textContent;
  formProfileValidate.toggleButtonState();
  formProfileValidate.deleteError();
  openPopup(profileEditPopup);
});
exitEditButton.addEventListener('click', () => {
  closePopup(profileEditPopup);
});
profileAddButton.addEventListener('click', () => {
  cardTitle.value = '';
  cardUrl.value = '';
  formCardValidate.toggleButtonState();
  formCardValidate.deleteError();
  openPopup(profileAddPopup);
});
exitAddButton.addEventListener('click', () => {
  closePopup(profileAddPopup);
});
exitImgButton.addEventListener('click', () => {
  closePopup(cardPopup);
});

//Функция сохранения данных профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  closePopup(profileEditPopup);
  nameInput.textContent = userName.value;
  jobInput.textContent = description.value;
};
profileEditForm.addEventListener('submit', handleProfileFormSubmit);

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  addCard();
  closePopup(profileAddPopup);
};
addCardsForm.addEventListener('submit', handleAddCardFormSubmit);