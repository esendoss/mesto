let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let exitButton = popup.querySelector('.popup__exit');
let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.profile__name');
let jobInput = document.querySelector('.profile__about');
let name = formElement.querySelector('.popup__input_data_name');        
let description = formElement.querySelector('.popup__input_data_job');

function openPopup() {
    popup.classList.add('popup_opened');
    name.value = nameInput.textContent;
    description.value = jobInput.textContent;
};
function closePopup() {
    popup.classList.remove('popup_opened');
};

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    nameInput.textContent = name.value;
    jobInput.textContent = description.value;
    closePopup();
};
editButton.addEventListener('click', openPopup);
exitButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);

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