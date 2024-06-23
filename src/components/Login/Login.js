import React, { useState } from "react";

import "./Login.css";
import BusImg from "../../images/bus-log.png";
import DarkLogo from "../../images/logoDark.svg";
import AllowRight from "../../images/arrowright.svg";

function Login(props) {
  const [formValues, setFormValues] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.handleSubmit(formValues);
  }

  return (
    <div className="loginBody">
      <img src={BusImg} className="loginBody__img" alt="Bus" />
      <div className="loginPopup">
        <img src={DarkLogo} className="loginPopup__img" alt="Logo" />
        <div className="loginPopup__container">
          <div className="loginPopup__text">
            <p className="loginPopup_text_title">Добро пожаловать</p>
            <p className="loginPopup_text_subtitle">
              Пожалуйста, войдите в систему, если вы наш :)
            </p>
          </div>
          <form onSubmit={handleSubmit}>
          <div className="loginPopup__inputs">
            <input
              id="profile-email-input"
              value={formValues.EmailInput}
              onChange={handleChange}
              name="EmailInput"
              required
              placeholder="Логин"
              className="loginPopup_inputs_login input"
            />
            <input
              id="profile-password-input"
              type="password"
              value={formValues.PasswordInput}
              onChange={handleChange}
              name="PasswordInput"
              required
              placeholder="Пароль"
              className="loginPopup_inputs_password input"
            />
          </div>
          <button type="submit" className="loginPopup__btn" >
            <span>Войти</span>
            <img src={AllowRight} className="loginPopup_btn_image" alt="Arrow" />
          </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
