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