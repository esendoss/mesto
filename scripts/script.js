//переменные для попапов
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const profileEditPopup = document.querySelector('.popup_edit');
const profileAddPopup = document.querySelector('.popup_add');
const cardPopup = document.querySelector('.popup_picture');
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
const popupImg = document.querySelector('.popup__image');
const popupName = document.querySelector('.popup__name');
const cardsTamplate = document.getElementById('gallery-cards');

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
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
  document.addEventListener('click', closePopupOverlay);
};
const closePopup = (popup) => {
  popup.classList.remove('popup_opened')
};
profileEditButton.addEventListener('click', () => {
  id.value = nameInput.textContent;
  description.value = jobInput.textContent;
  openPopup(profileEditPopup);
  reset();
});
exitEditButton.addEventListener('click', () => {
  closePopup(profileEditPopup);
});
profileAddButton.addEventListener('click', () => {
  openPopup(profileAddPopup);
  reset();
});
exitAddButton.addEventListener('click', () => {
  closePopup(profileAddPopup);
});
//Функция сохранения данных профиля
function formSubmitHandler(evt) {
  evt.preventDefault();
  closePopup(profileEditPopup);
  nameInput.textContent = id.value;
  jobInput.textContent = description.value;
};
profileEditForm.addEventListener('submit', formSubmitHandler);
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
//создание карточки
const createCard = (card) => {
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
    evt.target.classList.toggle('card__like_active');
  });
  //открытие большой картинки
  cardImg.addEventListener('click', () => {
    popupImg.src = card.link;
    popupName.textContent = card.name;
    popupImg.alt = card.name;
    openPopup(cardPopup);
  });
  return cardElement;
};
exitImgButton.addEventListener('click', () => {
  closePopup(cardPopup);
});
const renderCard = (card) => {
  galleryContainer.prepend(createCard(card));
};
const addCard = (event) => {
  event.preventDefault();
  closePopup(profileAddPopup);
  const card = {};
  card.name = cardTitle.value;
  card.link = cardUrl.value;
  renderCard(card);
  cardTitle.value = '';
  cardUrl.value = '';
};
const elements = initialCards.map(function (card) {
  return createCard(card);
});
galleryContainer.append(...elements);
addCardsForm.addEventListener('submit', addCard);