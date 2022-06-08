export default class UserInfo {
    constructor(selectorProfileName, selectorProfileDescription, selectorProfileAvatar) {
        this._name = document.querySelector(selectorProfileName);
        this._description = document.querySelector(selectorProfileDescription);
        this._avatar = document.querySelector(selectorProfileAvatar)
    }
    getUserInfo() {
        return {
            name: this._name.textContent,
            description: this._description.textContent,
            avatar: this._avatar.src
        }
    }
    setUserInfo(name, description, avatar, id) {
        if (name) {
            this._name.textContent = name;
        } 
        if (description) {
            this._description.textContent = description;
        }
        if (avatar) {
            this._avatar.src = avatar;
        } 

        if (id) {
            this.id = id;
         }
    }
}