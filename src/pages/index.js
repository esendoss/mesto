import "./index.css"

import {
  validationConfig,
  profileEditForm,
  profileEditButton,
  nameInput,
  jobInput,
  profileAddForm,
  profileAddButton,
  avatar,
  profileAvatarForm
} from "../utils/constants";

import Api from "../components/Api.js";
import UserInfo from "../components/UserInfo.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWarning from "../components/PopupWarning.js";

const popupImage = new PopupWithImage('.popup_picture');
popupImage.setEventListeners();

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-42',
  token: '344a814f-d599-45ca-823f-f73b614ea6ce'
});

//Загрузка карточек

const createCard = function (item) {
  const card = new Card(item, '#gallery-cards', handleCardClick, popupNotification, userInfo, api);
  const cardElement = card.createCard();
  return cardElement;
};
const fillCard = (card) => {
  const newCard = {
    name: card.name,
    link: card.link,
    likes: card.likes,
    id: card._id,
    owner: card.owner._id
  };
  cardsContainer.render(newCard);
}

const cardGallery = '.gallery';
const cardsContainer = new Section({
  items: [],
  renderer: (item) => {
    const newItem = createCard(item);
    cardsContainer.addItem(newItem);
  }
}, cardGallery);

function handleCardClick(link, name) {
  popupImage.open(name, link);
}

//Загрузка информации о пользователе
const userInfo = new UserInfo('.profile__name', '.profile__about', '.profile__avatar');

const getUserInfo = () => {
  Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([data, cards]) => {
      userInfo.setUserInfo(data.name, data.about, data.avatar, data._id);
      cards.reverse().forEach(card => {
        fillCard(card)
      });
    })
    .catch(err => console.log(`Ошибка: ${err}`));
}
getUserInfo();

//Редактирование данных профиля

const popupProfile = new PopupWithForm({
  popupSelector: '.popup_edit',
  submitForm: (data) => {
    popupProfile._submitButton.textContent = 'Сохранение...';
    api.editProfileInfo(data.userName, data.description)
      .then((newData) => {
        userInfo.setUserInfo(newData.userName, newData.description, newData.avatar);
        popupProfile.close();
      })
      .catch(err => console.log(`Ошибка: ${err}`))
      .finally(() => {
        popupProfile._submitButton.textContent = 'Сохранить';
      })
  }
});
popupProfile.setEventListeners();

profileEditButton.addEventListener('click', () => {
  formProfileValidate.resetValidation();
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.description;
  popupProfile.open();
}
);

//Добавление новых карточек

const popupAddForm = new PopupWithForm({
  popupSelector: '.popup_add',
  submitForm: (data) => {
    popupAddForm._submitButton.textContent = 'Сохранение...';
    api.addUserCard(data.title, data.url)
      .then((card) => {
        fillCard(card);
        popupAddForm.close();
      })
      .catch(err => console.log(`Ошибка: ${err}`))
      .finally(() => {
        popupAddForm._submitButton.textContent = 'Создать';
      })
  }
});
popupAddForm.setEventListeners();

profileAddButton.addEventListener('click', () => {
  formCardValidate.resetValidation();
  popupAddForm.open();
});

//Изменить аватарку профиля

const popupUserAvatar = new PopupWithForm({
  popupSelector: '.popup_avatar',
  submitForm: (data) => {
    popupUserAvatar._submitButton.textContent = 'Сохранение...';
    api.editAvatar(data.avatar)
      .then((newData) => {
        userInfo.setUserInfo(newData.userName, newData.description, newData.avatar);
        popupUserAvatar.close();
      })
      .catch(err => console.log(`Ошибка: ${err}`))
      .finally(() => {
        popupUserAvatar._submitButton.textContent = 'Сохранить';
      })
  }
})
popupUserAvatar.setEventListeners();

avatar.addEventListener('click', function () {
  formAvatarValidate.resetValidation();
  popupUserAvatar.open()
})

// Уведомление об удалении карточки

const popupNotification = new PopupWarning({
  popupSelector: '.popup_warning',
  submitForm: (img, id) => {
    api.deleteCard(id)
      .then(() => {
        img.remove()
        popupNotification.close();
      })
      .catch(err => console.log(`Ошибка: ${err}`))
  }
});
popupNotification.setEventListeners();

//Валидация форм
//редактор профиля
const formProfileValidate = new FormValidator(validationConfig, profileEditForm);
formProfileValidate.enableValidation();
//добавление карточки
const formCardValidate = new FormValidator(validationConfig, profileAddForm);
formCardValidate.enableValidation();
//аватар профиля
const formAvatarValidate = new FormValidator(validationConfig, profileAvatarForm);
formAvatarValidate.enableValidation();