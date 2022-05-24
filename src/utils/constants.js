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
export const profileEditButton = document.querySelector('.profile__edit-button');
export const profileEditForm = profileEditPopup.querySelector('.form');

export const nameInput = profileEditForm.querySelector('.popup__input[name = userName]');
export const jobInput = profileEditForm.querySelector('.popup__input[name = description]');

export const profileAddPopup = document.querySelector('.popup_add');
export const profileAddButton = document.querySelector('.profile__add-button');
export const profileAddForm = profileAddPopup.querySelector('.form');

export const userNameInput = document.querySelector('.profile__name');
export const descriptionInput = document.querySelector('.profile__about');
/*

//переменные для кнопки выхода 
const exitEditButton = document.querySelector('.popup__exit_edit');
const exitImgButton = document.querySelector('.popup__exit_pic');
const exitAddButton = document.querySelector('.popup__exit_add');
//переменные данных в редакторе профиля
const profileEditForm = document.querySelector('.edit-form');



const galleryContainer = document.querySelector('.gallery');
const addCardsForm = document.querySelector('.add-form');
//переменные инпутов в редакторе профиля
const cardTitle = document.querySelector('.popup__input_data_title');
const cardUrl = document.querySelector('.popup__input_data_img');

*/