export default class Card {
    constructor(data, cardSelector, handleCardClick, popupNotification, userInfo, api) {
        this._name = data.name;
        this._link = data.link;
        this._id = data.id;
        this._owner = data.owner;
        this._likes = data.likes.length;
        this._liked = false;
        this._userInfo = userInfo;
        this._popupNotification = popupNotification;
        this._api = api;
        
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._likedSelector = 'card__like_active'

        data.likes.forEach(like => {
            if (like._id == this._userInfo.id) {
               this._liked = true;
            }
         });
    }
    _getTemplate() {
        const card = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.card')
            .cloneNode(true);
        return card;
    }
    //лайк
    _like() {
        if (this._likeButton.classList.contains(this._likedSelector)) {
            this._api.dislike(this._id)
                .then((newData) => {
                    this._card.querySelector('.card__like-counter').textContent = newData.likes.length;
                    this._likeButton.classList.remove(this._likedSelector);
                })
                .catch(err => console.log(`Ошибка: ${err}`))
        } else {
            this._api.like(this._id)
                .then((newData) => {
                    this._card.querySelector('.card__like-counter').textContent = newData.likes.length;
                    this._likeButton.classList.add(this._likedSelector);
                })
                .catch(err => console.log(`Ошибка: ${err}`))
        }
    };
    //удаление карточки 
    _deleteCard() {
        this._popupNotification.open(this._card, this._id);
    }

    createCard() {
        this._card = this._getTemplate();
        this._cardImg = this._card.querySelector('.card__img');
        this._card.querySelector('.card__place').textContent = this._name;
        this._cardImg.src = this._link;
        this._cardImg.alt = this._name;
        this._card.querySelector('.card__like-counter').textContent = this._likes;
        this._likeButton = this._card.querySelector('.card__like');
        if (this._liked) {
            this._likeButton.classList.add(this._likedSelector);
        }
        if (this._owner == this._userInfo.id) {
            this._card.querySelector('.card__delete').classList.add('card__delete_active')
        }
        this._setEventListeners();

        return this._card;
    }
    _setEventListeners() {
        this._likeButton.addEventListener('click', () => this._like());
        this._card.querySelector('.card__delete').addEventListener('click', () => this._deleteCard());       
        this._card.querySelector('.card__img').addEventListener('click', () => {
            this._handleCardClick(this._name, this._link)
        });
    }
}