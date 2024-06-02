import React from "react";
import "./Main.css";
import hi from "../../images/hi.svg";
import NavLinkMenu from "../NavLinkMenu/NavLinkMenu";
import { users, tovar } from "../initialCard";
import { NavLink } from "react-router-dom";
function Main() {
  return (
    <div className="mainBody">
      <NavLinkMenu />
      <div className="main">
        <p className="main__title">
          <img src={hi} />
          Добро пожаловать, user_admin!
        </p>
        <div className="main__container">
          <div className="main__containers">
            <div className="main__containersTableContainer">
              <table className="main__containersTable">
                <caption className="main__containersTitle">
                  Список сотрудников
                </caption>
                <thead>
                  <tr className="main__containersElements">
                    <th className="main__containersElementsP">ФИО</th>
                    <th className="main__containersElementsP">
                      Номер телефона
                    </th>
                    <th className="main__containersElementsP">Логин</th>
                    <th className="main__containersElementsP">Точка</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((i) => (
                    <tr key={i.id} className="main__containersElements">
                      <td className="main__containersElementsP">{i.name}</td>
                      <td className="main__containersElementsP">{i.number}</td>
                      <td className="main__containersElementsP">{i.login}</td>
                      <td className="main__containersElementsP">{i.tochka}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div>
              <div className="main__containerbtn">
                <NavLink to="/staff" className="main__containerbtnLink">
                  Посмотреть всех сотрудников
                </NavLink>
              </div>
            </div>
          </div>
          <div className="main__containers">
            <div className="main__containersTableContainer">
              <table className="main__containersTable">
                <caption className="main__containersTitle">
                  Список сотрудников
                </caption>
                <thead>
                  <tr className="main__containersElements">
                    <th className="main__containersElementsP">Дата</th>
                    <th className="main__containersElementsP">
                      Наименование
                    </th>
                    <th className="main__containersElementsP">Точка</th>
                    <th className="main__containersElementsP">Прибыль</th>
                  </tr>
                </thead>
                <tbody>
                  {tovar.map((i) => (
                    <tr key={i.id} className="main__containersElements">
                      <td className="main__containersElementsP">{i.data}</td>
                      <td className="main__containersElementsP">{i.name}</td>
                      <td className="main__containersElementsP">{i.tochka}</td>
                      <td className="main__containersElementsP">{i.prib}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div>
              <div className="main__containerbtn">
                <NavLink to="/report" className="main__containerbtnLink">
                Посмотреть все отчёты
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Main;
