export default class Card {
    constructor(data, cardSelector, handleCardClick, handleLikeClick, popupNotification, userId ) {
        this._name = data.name;
        this._link = data.link;
        this._id = data.id;
        this._owner = data.owner;
        this._likes = data.likes;
        this._userId = userId;
        this._popupNotification = popupNotification;
        this._liked = false;

        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._handleLikeClick = handleLikeClick;
    }

    _getTemplate() {
        const card = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.card')
            .cloneNode(true);
        return card;
    }
    //удаление карточки 
    _deleteCard() {
        this._popupNotification.open(this._card, this._id);
    }
    deleteCardFinally() {
        this._card.remove();
        this._card = null;
    }
    createCard() {
        this._card = this._getTemplate();
        this._cardImg = this._card.querySelector('.card__img');
        this._card.querySelector('.card__place').textContent = this._name;
        this._cardImg.src = this._link;
        this._cardImg.alt = this._name;
        this._likesCounter = this._card.querySelector('.card__like-counter');
        this._likesCounter.textContent = this._likes.length;

        this._likeButton = this._card.querySelector('.card__like');
        this._like();
        this._setEventListeners();

        return this._card;
    }
    getCardId() {
        return this._id;
    }
    whoLiked() {
        return this._likes.some((like) => like._id === this._userId)
    }
    _like() {
        if (this.whoLiked()) {
            this._likeButton.classList.add('card__like_active');
            this.isLiked = true
        } else {
            this._likeButton.classList.remove('card__like_active');
            this.isLiked = false
        }
    }
    countLikes(counter) {
        this._likesCounter.textContent = counter;
    }
    likeToggle() {
        this._likeButton.classList.togggle('card__like_active');
        this.isLiked = !this.isLiked
    }

        
    _setEventListeners() {
        this._likeButton.addEventListener('click', () => this._like());
        this._card.querySelector('.card__delete').addEventListener('click', () => this._deleteCard());
        this._card.querySelector('.card__img').addEventListener('click', () => {
            this._handleCardClick(this._name, this._link)
        });
    }
}