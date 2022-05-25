import "./index.css"
import { initialCards } from "../components/initialCards.js";
import {
  validationConfig,
  profileEditForm,
  profileEditButton,
  nameInput,
  jobInput,
  profileAddForm,
  profileAddButton
} from "../utils/constants";

import UserInfo from "../components/UserInfo.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";

const userInfo = new UserInfo('.profile__name', '.profile__about');
const popupImage = new PopupWithImage('.popup_picture');
popupImage.setEventListeners();

function handleCardClick(link, name) {
  popupImage.open(name, link);
}
//Редактор профиля
const popupProfile = new PopupWithForm({
  popupSelector: '.popup_edit',
  submitForm: (data) => {
    userInfo.setUserInfo(data.name, data.description);
    popupProfile.close();
  }
});
popupProfile.setEventListeners();

function openPopupProfile() {
  formProfileValidate.resetValidation();
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.userName;
  jobInput.value = userData.description;
  popupProfile.open();
};
profileEditButton.addEventListener('click', openPopupProfile);

//Добавление новой карточки
const popupAddForm = new PopupWithForm({
  popupSelector: '.popup_add',
  submitForm: (data) => {
    const newItem = {
      name: data.title,
      link: data.caption
    }
    const newCard = generateCard(newItem);
    section.addItem(newCard);
    popupAddForm.close();
  }
});
popupAddForm.setEventListeners();

function openPopupCard() {
  formCardValidate.resetValidation();
  popupAddForm.open();
};
profileAddButton.addEventListener('click', openPopupCard);

//Валидация форм
//редактор профиля
const formProfileValidate = new FormValidator(validationConfig, profileEditForm);
formProfileValidate.enableValidation();
//добавление карточки
const formCardValidate = new FormValidator(validationConfig, profileAddForm);
formCardValidate.enableValidation();

const createCard = (item) => {
  const card = new Card(item, '#gallery-cards', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
};

const cardGallery = '.gallery';

const section = new Section({
  items: initialCards,
  renderer: (item) => {
    const newItem = createCard(item);
    section.addItem(newItem);
  }
}, cardGallery);


section.render();