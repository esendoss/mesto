export default class Popup {
    constructor(popupSelector){
        this._popup = document.querySelector(popupSelector);
        this._buttonExit = this._popup.querySelector('.popup__exit');
    }
  
    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keyup',this._handleEscClose);
    }
    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keyup', this._handleEscClose);
    }
  
    setEventListeners() {
        this._buttonExit.addEventListener('click', () => this.close());
        this._popup.addEventListener('click', this._handleOverlayClose);
    }
  
    _handleEscClose = (evt) => {
        if (evt.key === 'Escape') {
            this.close();
        }
    }
    _handleOverlayClose = (evt) => {
        if (evt.target.classList.contains('popup')) {
            this.close();
        }
    }
  }