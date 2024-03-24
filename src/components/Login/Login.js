import React from "react";
import { Routes } from "react-router-dom"; // импортируем Routes
import "./Login.css";
import BusImg from "../../images/bus-log.svg";
import DarkLogo from "../../images/logoDark.svg";
import DarkLight from "../../images/dark-light.svg";
import AllowRight from "../../images/arrowright.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

import "./Login.css";
function Login() {
  return (
    <div className="loginBody">
      <img src={BusImg} className="loginBody__img" />
      <div className="loginPopup">
        <img src={DarkLogo} className="loginPopup__img" />
        <div className="loginPopup__container">
          <div className="loginPopup__text">
            <p className="loginPopup_text_title">Добро пожаловать</p>
            <p className="loginPopup_text_subtitle">
              Пожалуйста, войдите в систему, если вы наш :)
            </p>
          </div>
          <div className="loginPopup__inputs">
            <input
              placeholder="Логин"
              className="loginPopup_inputs_login input"
            />
            <input
              placeholder="Пароль"
              className="loginPopup_inputs_password input"
            />
          </div>
        </div>
        <div className="loginPopup__containerBtn">
          <p className="loginPopup__darkTheme">
            <span className="loginPopup_darkTheme_icon">
              <img src={DarkLight} />
            </span>
            Темный режим{" "}
            <span className="loginPopup_darkTheme_toggle">
              <ToggleSwitch></ToggleSwitch>
            </span>
          </p>
          <button className="loginPopup__btn">
            Войти{" "}
            <span className="loginPopup_btn_img">
              <img src={AllowRight} className="loginPopup_btn_image" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
