import { initialCards } from "./initialCards.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

//переменные для попапов
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const profileEditPopup = document.querySelector('.popup_edit');
const profileAddPopup = document.querySelector('.popup_add');
export const cardPopup = document.querySelector('.popup_picture');
//переменные для кнопки выхода 
const exitEditButton = document.querySelector('.popup__exit_edit');
const exitImgButton = document.querySelector('.popup__exit_pic');
const exitAddButton = document.querySelector('.popup__exit_add');
//переменные данных в редакторе профиля
const profileEditForm = document.querySelector('.edit-form');
const nameInput = document.querySelector('.profile__name');
const jobInput = document.querySelector('.profile__about');
const id = profileEditForm.querySelector('.popup__input_data_name');
const description = profileEditForm.querySelector('.popup__input_data_job');

const galleryContainer = document.querySelector('.gallery');
const addCardsForm = document.querySelector('.add-form');
//переменные инпутов в редакторе профиля
const cardTitle = document.querySelector('.popup__input_data_title');
const cardUrl = document.querySelector('.popup__input_data_img');
//переменные для попапа большой картинки
export const popupImg = document.querySelector('.popup__image');
export const popupName = document.querySelector('.popup__name');
const cardsTamplate = document.getElementById('gallery-cards');

const formValidation = {
  formSelector: '.form_validate',
  formInput: '.popup__input',
  buttonElement: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

//Валидация форм
//редактор профиля
const formProfileValidate = new FormValidator(formValidation, profileEditForm);
formProfileValidate.enableValidation();
//добавление карточки
const formCardValidate = new FormValidator(formValidation, addCardsForm);
formCardValidate.enableValidation();

const renderCard = (card, galleryContainer) => {
  galleryContainer.prepend(card);
};

initialCards.forEach(galleryCard => {
  const createCard = new Card(galleryCard, '#gallery-cards');
  renderCard(createCard.generateCard(), galleryContainer);
});

const addCard = () => {
  closePopup(profileAddPopup);
  const newCard = {};
  newCard.name = cardTitle.value;
  newCard.link = cardUrl.value;
  const card = new Card(newCard, '#gallery-cards');
  renderCard(card.generateCard(), galleryContainer);
};
//функции открытия и закрытия попапов
//закрытие кликом на оверлей
const closePopupOverlay = (evt) => {
  if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  }
};
//закрытие при нажатии на кнопку Esc
const closePopupEsc = (evt) => {
  if (evt.key === 'Escape') {
    const currentOpenedPopup = document.querySelector('.popup_opened');
    closePopup(currentOpenedPopup);
  }
};
export const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
  document.addEventListener('click', closePopupOverlay);
};
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
  document.removeEventListener('click', closePopupOverlay);
};
profileEditButton.addEventListener('click', () => {
  id.value = nameInput.textContent;
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
  nameInput.textContent = id.value;
  jobInput.textContent = description.value;
};
profileEditForm.addEventListener('submit', handleProfileFormSubmit);

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  addCard();
  closePopup(profileAddPopup);
};
addCardsForm.addEventListener('submit', handleAddCardFormSubmit);