export default class UserInfo {
    constructor(selectorProfileName, selectorProfileDescription, selectorProfileAvatar) {
        this._name = document.querySelector(selectorProfileName);
        this._description = document.querySelector(selectorProfileDescription);
        this._avatar = document.querySelector(selectorProfileAvatar)
    }
    getUserInfo() {
        return {
            name: this._name.textContent,
            description: this._description.textContent
        }
    }
    setUserInfo(name, description, avatar, id) {
        this._name.textContent = name;
        this._description.textContent = description;
        this._avatar.src = avatar;
        if (id) {
            this.id = id;
         }
    }
}