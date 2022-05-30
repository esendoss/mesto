(()=>{"use strict";document.querySelector(".popup_picture"),document.querySelector(".popup__image"),document.querySelector(".popup__name");var e={formSelector:".form_validate",formInput:".popup__input",buttonElement:".popup__submit",inactiveButtonClass:"popup__submit_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},t=document.querySelector(".popup_edit").querySelector(".form"),n=document.querySelector(".profile__edit-button"),r=t.querySelector(".popup__input[name = userName]"),o=t.querySelector(".popup__input[name = description]"),i=document.querySelector(".popup_add"),u=document.querySelector(".profile__add-button"),a=i.querySelector(".form");function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}document.querySelector(".profile__name"),document.querySelector(".profile__about");var l=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(t),this._description=document.querySelector(n)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,description:this._description.textContent}}},{key:"setUserInfo",value:function(e,t){this._name.textContent=e,this._description.textContent=t}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._cardSelector=n,this._handleCardClick=r}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0)}},{key:"_like",value:function(e){e.target.classList.toggle("card__like_active")}},{key:"_deleteCard",value:function(){this._card.remove(),this._card=null}},{key:"createCard",value:function(){return this._card=this._getTemplate(),this._cardImg=this._card.querySelector(".card__img"),this._card.querySelector(".card__place").textContent=this._name,this._cardImg.src=this._link,this._cardImg.alt=this._name,this._setEventListeners(),this._card}},{key:"_setEventListeners",value:function(){var e=this;this._card.querySelector(".card__like").addEventListener("click",(function(t){e._like(t)})),this._card.querySelector(".card__delete").addEventListener("click",(function(t){e._deleteCard(t)})),this._card.querySelector(".card__img").addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=d((function e(t,n){var r=this,o=t.items,i=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),y(this,"render",(function(){r._items.forEach((function(e){r._renderer(e)}))})),y(this,"addItem",(function(e){r._container.prepend(e)})),this._items=o,this._renderer=i,this._container=document.querySelector(n)})),h=["formInput","buttonElement"];function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._validationConfig=t,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._validationConfig.formInput)),this._buttonElement=this._formElement.querySelector(this._validationConfig.buttonElement),this._spanList=n.querySelectorAll(".popup__input-error")}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}},{key:"_showInputError",value:function(e){var t=this._validationConfig,n=t.inputErrorClass,r=t.errorClass,o=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(n),o.textContent=e.validationMessage,o.classList.add(r)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._validationConfig.inputErrorClass),t.classList.remove(this.errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?""===e.value?this._showInputError(e,this._validationConfig):this._hideInputError(e,this._validationConfig):this._showInputError(e,this._validationConfig)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?(this._buttonElement.classList.add(this._validationConfig.inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._validationConfig.inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"deleteError",value:function(){this._spanList.forEach((function(e){return e.textContent=""})),this._inputList.forEach((function(e){return e.classList.remove("popup__input_type_error")}))}},{key:"_setEventListeners",value:function(){var e=this,t=this._validationConfig,n=(t.formInput,t.buttonElement,function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(t,h));this._formElement.addEventListener("submit",(function(e){e.preventDefault})),this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t,n),e._toggleButtonState()}))}))}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),w(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),w(this,"_handleOverlayClose",(function(e){e.target.classList.contains("popup")&&n.close()})),this._popup=document.querySelector(t),this._buttonExit=this._popup.querySelector(".popup__exit")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._buttonExit.addEventListener("click",(function(){return e.close()})),this._popup.addEventListener("click",this._handleOverlayClose)}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=O(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},S.apply(this,arguments)}function O(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}function x(e,t){return x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},x(e,t)}function C(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var L=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(a,t);var n,r,o,i,u=(o=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(o);if(i){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function a(t){var n,r=t.popupSelector,o=t.submitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=u.call(this,r))._form=n._popup.querySelector(e.formSelector),n._submitButton=n._popup.querySelector(e.buttonElement),n._submitForm=o,n._inputList=n._popup.querySelectorAll(e.formInput),n}return n=a,(r=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;S(j(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._getInputValues()),e.close()}))}},{key:"close",value:function(){this._form.reset(),S(j(a.prototype),"close",this).call(this)}}])&&k(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),a}(g);function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=B(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},I.apply(this,arguments)}function B(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=H(e)););return e}function D(e,t){return D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},D(e,t)}function M(e,t){if(t&&("object"===q(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function H(e){return H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},H(e)}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&D(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=H(r);if(o){var n=H(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return M(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__image"),t._popupCaption=t._popup.querySelector(".popup__name"),t}return t=u,(n=[{key:"open",value:function(e,t){I(H(u.prototype),"open",this).call(this),this._popupImage.src=e,this._popupImage.alt=t,this._popupCaption.textContent=t}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(g),V=new l(".profile__name",".profile__about"),T=new R(".popup_picture");function G(e,t){T.open(t,e)}T.setEventListeners();var A=new L({popupSelector:".popup_edit",submitForm:function(e){V.setUserInfo(e.userName,e.description),A.close()}});A.setEventListeners(),n.addEventListener("click",(function(){Y.resetValidation();var e=V.getUserInfo();r.value=e.name,o.value=e.description,A.open()}));var W=new L({popupSelector:".popup_add",submitForm:function(e){var t={name:e.title,link:e.url},n=U(t);N.addItem(n),W.close()}});W.setEventListeners(),u.addEventListener("click",(function(){F.resetValidation(),W.open()}));var Y=new b(e,t);Y.enableValidation();var F=new b(e,a);F.enableValidation();var U=function(e){return new p(e,"#gallery-cards",G).createCard()},N=new _({items:[{name:"Алтай",link:"https://images.unsplash.com/photo-1635499829006-f18084159cd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"},{name:"Уральские горы",link:"https://images.unsplash.com/photo-1594561844943-bfbf6e877580?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"},{name:"Пик Звёздный",link:"https://images.unsplash.com/photo-1594271211059-bf9250514ad6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"},{name:"Исландия",link:"https://images.unsplash.com/photo-1510120224890-b822ab372ee6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"},{name:"Кейп Таун",link:"https://images.unsplash.com/photo-1647347553863-c4341c29b650?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"},{name:"Грейт Гейбл",link:"https://images.unsplash.com/photo-1647185256013-7726d49ca3c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"}],renderer:function(e){var t=U(e);N.addItem(t)}},".gallery");N.render()})();