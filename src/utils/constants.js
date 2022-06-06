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
