class Api {
  constructor(config) {
    this._url = config.url;
  }
  _check(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject("Произошла ошибка");
    }
  }
  getCards() {
    return fetch(`${this._url}/users`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      return this._check(res);
    });
  }

  addCard(name, dr, number, tochka, mesto, login, email, password) {
    return fetch(`${this._url}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        fio:name, 
        dr:dr, 
        number:number, 
        tochka:tochka, 
        mesto:mesto, 
        login:login,
        email:email,
        password: password
      }),
    }).then((res) => {
      return this._check(res);
    });
  }

  backUser() {
    return fetch(
      `https://steady-cranachan-12aa26.netlify.app/.netlify/functions/api/users/backuser`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    ).then((res) => {
      return this._check(res);
    });
  }
}

const api = new Api({
  url: "https://steady-cranachan-12aa26.netlify.app/.netlify/functions/api",
});

export default api;
