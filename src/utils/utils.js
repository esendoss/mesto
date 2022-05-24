/*
const openPopup = (popup) => {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupEsc);
    document.addEventListener('click', closePopupOverlay);
};
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
const closePopup = (popup) => {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupEsc);
    document.removeEventListener('click', closePopupOverlay);
};

export { openPopup, closePopupOverlay, closePopupEsc, closePopup };
*/