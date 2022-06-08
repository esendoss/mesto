export default class Api {
  constructor(options) {
    this._url = options.url;
    this._token = options.token;
  }

  _checkError(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo() {
    return fetch(this._url + '/users/me', {
      method: 'GET',
      headers: {
        authorization: this._token
      }
    })
      .then(this._checkError)
  }

  getInitialCards() {
    return fetch(this._url + '/cards', {
      method: 'GET',
      headers: {
        authorization: this._token
      }
    })
      .then(this._checkError)
  }

  editProfileInfo(name, description) {
    return fetch(this._url + '/users/me', {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({
        name: name,
        about: description
      })
    })
      .then(this._checkError)
  }
  addUserCard(name, link) {
    return fetch(this._url + '/cards', {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
    .then(this._checkError)
  }
  deleteCard(id) {
    return fetch(this._url + `/cards/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token
      },
    })
    .then(this._checkError)
  }
  Like() {
    return fetch(this._url + `/cards/${id}/likes`, {
      method: 'PUT',
      headers: {
        authorization: this._token
      }
    })
    .then(this._checkError)
  }
  dislike() {
    return fetch(this._url + `/cards/${id}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: this._token
      }
    })
    .then(this._checkError)
  }
  editAvatar(link) {
    return fetch(this._url + '/users/me/avatar', {
       method: 'PATCH',
       headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
       body: JSON.stringify({
          avatar: link
       })
    })
    .then(this._checkError)
 }
  
}