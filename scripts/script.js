//переменные для попапов
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const editPopup = document.querySelector('.popup_edit');
const addPopup = document.querySelector('.popup_add');

const imgPopup = document.querySelector('.popup_picture');

//переменные для кнопки выхода 
const exitEditButton = document.querySelector('.popup__exit_edit');
const exitAddButton = document.querySelector('.popup__exit_add');
const exitImgButton = document.querySelector('.popup__exit_pic');

const formElement = document.querySelector('.popup__container');
const formCard = document.getElementById('add-card');
//переменные данных в редакторе профиля
const nameInput = document.querySelector('.profile__name');
const jobInput = document.querySelector('.profile__about');
//переменные инпутов в редакторе профиля
const name = formElement.querySelector('.popup__input_data_name');        
const description = formElement.querySelector('.popup__input_data_job');
//переменные для попапа картинки
const popupImg = document.querySelector('.popup__image');
const popupName = document.querySelector('.popup__name');

const gallery = document.querySelector('.gallery');

const popupCard = document.querySelector('.popup_add')
const cardTitle = document.querySelector('.popup__input_data_title');
const cardUrl = document.querySelector('.popup__input_data_img') ;
const cardSubmit = document.querySelector('.popup__submit_add');



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
//функция открытия картинки
function imageOpenPopup(card) {
  imgPopup.classList.add('popup_opened');
  popupImg.src =card.link;
  popupName.textContent = card.name;
};
//функция закрытия картинки
function imageClosePopup(card) {
  imgPopup.classList.remove('popup_opened');
};

function openCard() {
  popupCard.classList.add('popup_opened');
};
function closeCard() {
  popupCard.classList.remove('popup_opened');
};

const addCard = (card) => {
  console.log(card);
  //получаем содержимое tamplate
  const cardsTamplate = document.getElementById('gallery-cards');
  // клонируем содержимое template
  const cardElement = cardsTamplate.content.querySelector('.card').cloneNode(true);

  cardElement.querySelector('.card__img').src = card.link;
  cardElement.querySelector('.card__caption').textContent = card.name;
  cardElement.querySelector('.card__img').alt = card.name;

  //gallery.append(cardElement);

  //удаление карточки
  exitImgButton.addEventListener('click', () => {
    cardElement.remove();
  });
  return cardElement;
};

const renderCard = (card) => {
  gallery.prepend(addCard(card));
};

const elements = initialCards.map(function(card) {
  return addCard(card); 
});
//initialCards.forEach(card => renderCard(addCard(card)));

const createCard = (event) => {
  event.preventDefault();
  const card = {};
  card.name = cardTitle.value;
  card.src = cardUrl.value;
  renderCard(card);
  cardTitle.value = '';
  cardUrl.value = '';
  openCard();
;}

gallery.append(...elements);
cardSubmit.addEventListener('submit', createCard)



/*
  //лайк
  cardElement.querySelector('.gallery__like').addEventListener('click', (evt) => {
    evt.target.classList.toggle('gallery__like');
    evt.target.classList.toggle('gallery__like_active');
  });
  //открыли картинку
  cardImg.addEventListener('click', () => {
    imageOpenPopup(card);
  });
  //закрыли картинку
  cardImg.addEventListener('click', () => {
    imageClosePopup(card);
  })
  */