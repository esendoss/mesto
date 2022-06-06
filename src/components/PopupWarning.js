import PopupWithForm from "../components/PopupWithForm.js";

export default class PopupWarning extends PopupWithForm{
   constructor({popupSelector, submitForm}) {
      super({popupSelector, submitForm});
   }
   _submitDelete = (evt) => {
      evt.preventDefault();
      this._submitForm(this._targetCard, this._idCard);      
   }   
   open(targetCard, id) {
      this._targetCard = targetCard;
      this._idCard = id;
      super.open();
   }
}