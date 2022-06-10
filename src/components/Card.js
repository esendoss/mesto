export default class Card {
    constructor({ like, dislike, handlerDeleteClick }, data, cardSelector, handleCardClick, userInfo) {
        this._name = data.name;
        this._link = data.link;
        this._cardId = data.id;
        this._userInfo = userInfo;
        this._isMyCard = userInfo.id === data.owner
        this._owner = data.owner;
        this._likes = data.likes;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._like = like;
        this._dislike = dislike;
        this._handlerDeleteButton = handlerDeleteClick;
    }

    getCardId() {
        return this._cardId
    }

    _getTemplate() {
        const card = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.card')
            .cloneNode(true);
        return card;
    }

    _isLiked() {
        if (this._likes.some((like) => {
            return this._userInfo.id === like._id;
        })) {
            this._likeButton.classList.add('card__like_active')
        }
    }
    setLikeCounter(data) {
        this._likes = data.likes;
        this._likesCounter.textContent = this._likes.length;
        this._likeButton.classList.toggle('card__like_active')
    };
    deleteCard() {
        this._card.remove();
        this._card = null;
    }
    createCard() {
        this._card = this._getTemplate();
        this._cardImg = this._card.querySelector('.card__img');
        this._card.querySelector('.card__place').textContent = this._name;
        this._cardImg.src = this._link;
        this._cardImg.alt = this._name;
        this._likeButton = this._card.querySelector('.card__like');
        this._likesCounter = this._card.querySelector('.card__like-counter');

        this._isLiked();
        this._likesCounter.textContent = this._likes.length;

        this._deleteButton = this._card.querySelector('.card__delete');
        
        if (this._owner === this._userInfo.id) {
            this._deleteButton.classList.add('card__delete_active')
        }
        this._setEventListeners();

        return this._card;
    }

    _setEventListeners() {
        this._card.querySelector('.card__like').addEventListener('click', () => {
            if (this._likeButton.classList.contains('card__like_active')) {
                this._dislike(this._cardId)
            } else {
                this._like(this._cardId)
            }
        })

        if (this._isMyCard) {
            this._card.querySelector(".card__delete").addEventListener("click", (evt) => this._handlerDeleteButton(evt));
        }

        this._card.querySelector('.card__img').addEventListener('click', () => {
            this._handleCardClick(this._name, this._link)
        });
    }
}