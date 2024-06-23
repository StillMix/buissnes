import React from "react";
import "./Main.css";
import hi from "../../images/hi.svg";
import NavLinkMenu from "../NavLinkMenu/NavLinkMenu";
import {  tovar } from "../initialCard";
import { NavLink } from "react-router-dom";
import UserSlider from "../UserSlider/UserSlider";
function Main(props) {
  const currentIndex = 0;
  const itemsPerPage = 12; // Количество элементов на странице
  

  const visibleUsers = props.card.slice(currentIndex, currentIndex + itemsPerPage);
  const visibleTovar = tovar.slice(currentIndex, currentIndex + itemsPerPage);
  return (
    <div className="mainBody">
      <NavLinkMenu back={props.back}/>
      <div className="main">
        <p className="main__title">
          <img src={hi} alt="sss"/>
          Добро пожаловать, user_admin!
        </p>
        <div className="main__container">
        <div className="main__containers sotr">
            <p className="main__container__title">Список граждан</p>
            <div className="main__containersTableContainer">
              <div className="main__tableTitle">
                <p className="main__tabletitle_text">ФИО</p>
                <p className="main__tabletitle_text">Номер телефона</p>
                <p className="main__tabletitle_text">Логин</p>
                <p className="main__tabletitle_text">Точка</p>
              </div>
              <UserSlider users={visibleUsers} ok="user"/>
            </div>
            <NavLink to="/staff" className="main__containerbtnLink">
                Посмотреть всех сотрудников
                </NavLink>
          </div>
          <div className="main__containers add">
            <p className="main__container__title">Отчёты</p>
            <div className="main__containersTableContainer">
              <div className="main__tableTitle">
                <p className="main__tabletitle_text">Дата</p>
                <p className="main__tabletitle_text">Наименование</p>
                <p className="main__tabletitle_text">Точка</p>
                <p className="main__tabletitle_text">Прибыль</p>
              </div>
              <UserSlider users={visibleTovar} ok="tov"/>
            </div>

          

            <div>
              <div className="main__containerbtn">
                <NavLink to="/report" className="main__containerbtnLink">
                Посмотреть все отчёты
                </NavLink >
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Main;
