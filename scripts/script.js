//переменная попапа редактирования профиля
const editPopup = document.querySelector('.popup_edit');
//переменная для кнопки редактирования профиля
const editButton = document.querySelector('.profile__edit-button');
//переменная для кнопки выхода из редактирования профиля
const exitButton = document.querySelector('.popup__exit');

const formElement = document.querySelector('.popup__container');
//переменные данных в редакторе профиля
const nameInput = document.querySelector('.profile__name');
const jobInput = document.querySelector('.profile__about');
//переменные инпутов в редакторе профиля
const name = formElement.querySelector('.popup__input_data_name');        
const description = formElement.querySelector('.popup__input_data_job');

/* создадим переменные для кнопки добавления и для инпутов 
в попапе добавления изображения */
const addPopup = document.querySelector('.popup_add');
const addButton = document.querySelector('.profile__add-button');
const titleInput = document.querySelector ('.gallery__place');
const imgInput = document.querySelector ('.gallery__img');
const title = formElement.querySelector('.popup__input_data_title');
const img = formElement.querySelector('.popup__input_data_img');


//функция открытия попапа кнопки правки
function openEditPopup() {
  editPopup.classList.add('popup_opened');
    name.value = nameInput.textContent;
    description.value = jobInput.textContent;
};
//Закрытие попапа кнопки правки
function closeEditPopup() {
  editPopup.classList.remove('popup_opened');
};
//Функция сохранения данных профиля
function formSubmitHandler (evt) {
    evt.preventDefault(); 
    nameInput.textContent = name.value;
    jobInput.textContent = description.value;
    closeEditPopup();
};
//слушатели для открытия и закрытия попапа редактора профиля
editButton.addEventListener('click', openEditPopup);
exitButton.addEventListener('click', closeEditPopup);
//слушатель для кнопки сохранения
formElement.addEventListener('submit', closeEditPopup);

function openAddPopup() {
  addPopup.classList.add('popup_opened-add');
};
function closeAddPopup() {
  addPopup.classList.remove('popup_opened-add');
};
// Открытие/закрытие попапа кнопки добавления 
addButton.addEventListener('click', openAddPopup);
addButton.addEventListener('click', closeAddPopup); 

/* Добавит 6 карточек */
const initialCards = [
    {
      name: 'Алтай',
      link: 'https://unsplash.com/photos/k1QPhErFvMw'
    },
    {
      name: 'Уральские горы',
      link: 'https://unsplash.com/photos/vm4Onc3qVAY'
    },
    {
      name: 'Пик Звёздный',
      link: 'https://unsplash.com/photos/GBa0kiHMhEM'
    },
    {
      name: 'Исландия',
      link: 'https://unsplash.com/photos/e9QfTnB647Y'
    },
    {
      name: 'Кейп Таун',
      link: 'https://unsplash.com/photos/joG5Wt96qBM'
    },
    {
      name: 'Грейт Гейбл',
      link: 'https://unsplash.com/photos/XyjIUYxJrGo'
    }
  ];