export default class Card {
    constructor(data, cardSelector, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
    }
    _getTemplate() {
        return document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.card')
            .cloneNode(true)
    }
    //лайк
    _like(evt) {
        evt.target.classList.toggle('card__like_active');
    };
    //удаление карточки 
    _deleteCard() {
        this._card.remove();
        this._card = null;
    }

    generateCard() {
        this._card = this._getTemplate();
        this._setEventListeners();

        this._cardImg = this._card.querySelector('.card__img');
        this._card.querySelector('.card__place').textContent = this._name;
        this._cardImg.src = this._link;
        this._cardImg.alt = this._name;

        return this._card;
    }
    //Слушатели
    _setEventListeners = () => {
        this._card.querySelector('.card__like').addEventListener('click', (evt) => {
            this._like(evt);
        });
        this._card.querySelector('.card__delete').addEventListener('click', (evt) => {
            this._deleteCard(evt);
        });
        
        this._card.querySelector('.card__img').addEventListener('click', () => {
            this._handleCardClick(this._name, this._link)
        });
        
    }
}