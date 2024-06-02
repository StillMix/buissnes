import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import BusImg from "../../images/bus-log.png";
import DarkLogo from "../../images/logoDark.svg";
import AllowRight from "../../images/arrowright.svg";

function Login() {
  const navigate = useNavigate();

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
          <button className="loginPopup__btn" onClick={() => navigate('/main')}>
            <span>Войти</span>
            <img src={AllowRight} className="loginPopup_btn_image" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
