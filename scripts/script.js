//переменные для попапов
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const editPopup = document.querySelector('.popup_edit');
const addPopup = document.querySelector('.popup_add');
//переменные для кнопки выхода 
const exitEditButton = document.querySelector('.popup__exit_edit');
const exitImgButton = document.querySelector('.popup__exit_pic');
const exitAddButton = document.querySelector('.popup__exit_add');
//переменные данных в редакторе профиля
const nameInput = document.querySelector('.profile__name');
const jobInput = document.querySelector('.profile__about');
//контейнер
const formElement = document.querySelector('.popup__container');
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
//массив с данными для карточек 
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
const galleryContainer = document.querySelector('.gallery');
const addCardsForm = document.querySelector('.add-form');
//переменные инпутов в редакторе профиля
const cardTitle = document.querySelector('.popup__input_data_title');
const cardUrl = document.querySelector('.popup__input_data_img');
const like = document.querySelector('.card__like');
//переменные для попапа большой картинки
const cardPopup = document.querySelector('.popup_picture');
const popupImg = document.querySelector('.popup__image');
const popupName = document.querySelector('.popup__name');
//функция открытия картинки
function imageOpenPopup(card) {
  cardPopup.classList.toggle('popup_opened');
  popupImg.src =card.link;
  popupName.textContent = card.name;
};
//функция закрытия картинки
function imageClosePopup(card) {
  cardPopup.classList.remove('popup_opened');
};
const createCard = (card) => {
  const cardsTamplate = document.getElementById('gallery-cards');
  const cardElement = cardsTamplate.content.querySelector('.card').cloneNode(true);
  const cardImg = cardElement.querySelector('.card__img');
  const cardPlace = cardElement.querySelector('.card__place'); 
  cardImg.src = card.link;
  cardPlace.textContent = card.name;
  cardImg.alt = card.name;
  //удаление карточки
  cardElement.querySelector('.card__delete').addEventListener('click', () => { 
    cardElement.remove();
  })
  //лайк
  cardElement.querySelector('.card__like').addEventListener('click', (evt) => {
    evt.target.classList.toggle('card__like');
    evt.target.classList.toggle('card__like_active');
  });
  cardImg.addEventListener('click', () => imageOpenPopup(card));
  exitImgButton.addEventListener('click', ()=> imageClosePopup(card));
  return cardElement;
};
const renderCard = (card) => {
  galleryContainer.prepend(createCard(card));
};
const addCard = (event) => {
  event.preventDefault();
  const card = {};
  card.name = cardTitle.value;
  card.src = cardUrl.value;
  renderCard(card);
  cardTitle.value = '';
  cardUrl.value = '';
};
const elements = initialCards.map(function(card) {
  return createCard(card);
});
galleryContainer.append(...elements);
addCardsForm.addEventListener('submit', addCard);



