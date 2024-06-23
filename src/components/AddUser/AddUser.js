import React from "react";
import "./AddUser.css";

import NavLinkMenu from "../NavLinkMenu/NavLinkMenu";

function AddUser(props) {

  const [login, setLogin] = React.useState("");
  const [fio, setFio] = React.useState("");
  const [dr, setDr] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [tochka, setTochka] = React.useState("");
  const [mesto, setMesto] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const card = {
      name: fio,
      dr: dr,
      number: number,
      tochka: tochka,
      mesto: mesto,
      login: login,
      email: email,
      password: password
    };
    props.handleSubmit(card);
    setLogin("");
    setFio("");
    setDr("");
    setNumber("");
    setTochka("");
    setMesto("");
    setEmail("");
    setPassword("");
  }


  function inputMesto(e) {
    setMesto(e.target.value);
  }
  function inputTochka(e) {
    setTochka(e.target.value);
  }
  function inputNumber(e) {
    setNumber(e.target.value);
  }
  function inputDr(e) {
    setDr(e.target.value);
  }
  function inputName(e) {
    setFio(e.target.value);
  }
  function inputLogin(e) {
    setLogin(e.target.value);
  }
  function inputEmail(e) {
    setEmail(e.target.value);
  }
  function inputPassword(e) {
    setPassword(e.target.value);
  }
  return (
    <div className="addUserBody">
      <NavLinkMenu back={props.back}/>
      <div className="addUser">
        <p className="adduser__container__title">Отчёты</p>
        <div>
          <form className="adduser__form" onSubmit={handleSubmit}>
            <p className="adduser__containers__title">Новый пользователь</p>
            <div className="adduser__info">
            <label>
              <p className="adduser__containerInput_title">ФИО</p>
              <input
                value={fio}
                onChange={inputName}
                className="adduser__containerInput_input"
                placeholder="ФИО"
              />
            </label>
            <label>
              <p className="adduser__containerInput_title">Дата рождения</p>
              <input
                value={dr}
                onChange={inputDr}
                className="adduser__containerInput_input"
                placeholder="Дата рождения"
              />
            </label>
            <label>
              <p className="adduser__containerInput_title">Номер телефона</p>
              <input
                value={number}
                onChange={inputNumber}
                className="adduser__containerInput_input"
                placeholder="+7"
              />
            </label>
            <label>
              <p className="adduser__containerInput_title">Точка</p>
              <input
                value={tochka}
                onChange={inputTochka}
                className="adduser__containerInput_input"
                placeholder="Точка"
              />
            </label>
            <label>
              <p className="adduser__containerInput_title">Место жительства</p>
              <input
               value={mesto}
                onChange={inputMesto}
                className="adduser__containerInput_input"
                placeholder="Место жительства"
              />
            </label>
            <label>
              <p className="adduser__containerInput_title">Email</p>
              <input
                value={email}
                onChange={inputEmail}
                className="adduser__containerInput_input"
                placeholder="Email"
              />
            </label>
            </div>
           
            <div className="adduser__reg">
            <label>
              <p className="adduser__containerInput_title ">Логин пользователя</p>
              <input
                value={login}
                onChange={inputLogin}
                className="adduser__containerInput_input"
                placeholder="Логин пользователя"
              />
            </label>
            <label>
              <p className="adduser__containerInput_title">Пароль пользователя</p>
              <input
                value={password}
                onChange={inputPassword}
                className="adduser__containerInput_input"
                placeholder="Пароль пользователя"
              />
            </label>
            </div>

            <button className="adduser__btn" type="submit">
            Подтвердить и создать
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
