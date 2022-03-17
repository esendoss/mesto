let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let exitButton = popup.querySelector('.popup__exit');
function openPopup() {
    popup.classList.add('popup_opened');
};
function closePopup() {
    popup.classList.remove('popup_opened');
};
editButton.addEventListener('click', openPopup);
exitButton.addEventListener('click', closePopup);


let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.profile__name');
let jobInput = document.querySelector('.profile__about');

function formSubmitHandler (evt) {
    evt.preventDefault(); 

    let name = formElement.querySelector('.popup__input_data_name');        
    let description = formElement.querySelector('.popup__input_data_job');

    nameInput.textContent = name.value;
    jobInput.textContent = description.value;
};
formElement.addEventListener('submit', formSubmitHandler);