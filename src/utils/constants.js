//переменные для попапа большой картинки
const cardPopup = document.querySelector('.popup_picture');
const popupImg = document.querySelector('.popup__image');
const popupName = document.querySelector('.popup__name');

export { cardPopup, popupImg, popupName }

export const validationConfig = {
    formSelector: '.form_validate',
    formInput: '.popup__input',
    buttonElement: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

export const profileEditPopup = document.querySelector('.popup_edit');
export const profileEditForm = profileEditPopup.querySelector('.form');
export const profileEditButton = document.querySelector('.profile__edit-button');

export const nameInput = profileEditForm.querySelector('.popup__input[name = userName]');
export const jobInput = profileEditForm.querySelector('.popup__input[name = description]');

export const profileAddPopup = document.querySelector('.popup_add');
export const profileAddButton = document.querySelector('.profile__add-button');
export const profileAddForm = profileAddPopup.querySelector('.form');

export const userNameInput = document.querySelector('.profile__name');
export const descriptionInput = document.querySelector('.profile__about');

export const avatar = document.querySelector('.profile__avatar');
export const profileAvatarPopup = document.querySelector('.popup_avatar');
export const profileAvatarForm = profileAvatarPopup.querySelector('.form');

const initialCards = [
    {
      name: 'Алтай',
      link: 'https://images.unsplash.com/photo-1635499829006-f18084159cd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80'
    },
    {
      name: 'Уральские горы',
      link: 'https://images.unsplash.com/photo-1594561844943-bfbf6e877580?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'
    },
    {
      name: 'Пик Звёздный',
      link: 'https://images.unsplash.com/photo-1594271211059-bf9250514ad6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
      name: 'Исландия',
      link: 'https://images.unsplash.com/photo-1510120224890-b822ab372ee6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
      name: 'Кейп Таун',
      link: 'https://images.unsplash.com/photo-1647347553863-c4341c29b650?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
      name: 'Грейт Гейбл',
      link: 'https://images.unsplash.com/photo-1647185256013-7726d49ca3c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
    }
  ];
  export { initialCards };