//переменные для попапов
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const editPopup = document.querySelector('.popup_edit');
const addPopup = document.querySelector('.popup_add');

//переменные для кнопки выхода 
const exitEditButton = document.querySelector('.popup__exit_edit');
const exitAddButton = document.querySelector('.popup__exit_add');

const formElement = document.querySelector('.popup__container');
//переменные данных в редакторе профиля
const nameInput = document.querySelector('.profile__name');
const jobInput = document.querySelector('.profile__about');
//переменные инпутов в редакторе профиля
const name = formElement.querySelector('.popup__input_data_name');        
const description = formElement.querySelector('.popup__input_data_job');

//функции открытия попапов
editButton.addEventListener('click', () => {
  editPopup.classList.toggle('popup_opened');
  name.value = nameInput.textContent;
  description.value = jobInput.textContent;
});
exitEditButton.addEventListener('click', () => {
  editPopup.classList.remove('popup_opened');
});
addButton.addEventListener('click', () => {
  addPopup.classList.toggle('popup_opened');
});
exitAddButton.addEventListener('click', () => {
  addPopup.classList.remove('popup_opened');
});

//Функция сохранения данных профиля
function formSubmitHandler (evt) {
    evt.preventDefault(); 
    nameInput.textContent = name.value;
    jobInput.textContent = description.value;
    editPopup.classList.remove('popup_opened');
};
formElement.addEventListener('submit', formSubmitHandler);
