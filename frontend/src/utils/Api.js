class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    _check(res) {
        if (res.ok) {
            return res.json();
        }
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers,
            method: 'GET'
        })
            .then(res => this._check(res))
    }

    addInitialCards(cardData) {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers,
            method: 'POST',
            body: JSON.stringify({
                name: cardData.name,
                link: cardData.link
            })
        })
            .then(res => this._check(res))

    }
    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers,
            method: 'GET'
        })
            .then(res => this._check(res))
    }

    setUserInfo(userData) {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers,
            method: 'PATCH',
            body: JSON.stringify({
                name: userData.name,
                about: userData.about
            })
        })
            .then(res => this._check(res))
    }

    addCard(cardData) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: cardData.name,
                link: cardData.link
            })
        })
            .then(res => this._check(res));
    }

    setUserAvatar(userData) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            headers: this._headers,
            method: 'PATCH',
            body: JSON.stringify({
                avatar: userData.avatar
            })
        })
            .then(res => this._check(res))
    }

    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers,
        })
            .then(res => this._check(res))
    }

    putLike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: this._headers,
        })
            .then(res => this._check(res))
    }

    deleteLike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: this._headers,
        })
            .then(res => this._check(res))
    }

    changeLikeCardStatus(cardId, isLiked) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
          method: `${!isLiked ? 'DELETE' : 'PUT'}`,
          headers: this._headers
        })
          .then(res => this._check(res));
      }

}

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-46',
    headers: {
        authorization: '4ab555e1-39a0-48e6-8593-6e8a4a84e28f',
        'Content-Type': 'application/json'
    }
});

export default api;