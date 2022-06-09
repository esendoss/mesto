import Popup from "../components/Popup.js"
export default class PopupWarning extends Popup {
   constructor(popupSelector) {
      super(popupSelector);
      this._formElement =
         this._popup.querySelector('.form');
      this._subbmitButton = this._popup.querySelector('.popup__submit')
   }

   setEventListeners() {
      this._formElement.addEventListener('submit', (evt) =>
         this._handlerSubmitForm(evt)
      );
      super.setEventListeners();
   }

   setHandlerSubmit(handler) {
      this._handlerSubmitForm = handler
   }

   isLoading(isLoading) {
      if (isLoading === true) {
         this._subbmitButton.textContent = 'Удаление...';
         this._subbmitButton.disabled = true;
      } else {
         this._subbmitButton.textContent = 'Ok';
         this._subbmitButton.disabled = false;
      }
   }
}