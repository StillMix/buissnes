import React, { useState } from "react";
import "./Staff.css";
import NavLinkMenu from "../NavLinkMenu/NavLinkMenu";
import UserSlider from "../UserSlider/UserSlider";
function Staff(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 12; // Количество элементов на странице

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(0, props.card.length - itemsPerPage)
        : prevIndex - itemsPerPage
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= props.card.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const visibleUsers = props.card.slice(currentIndex, currentIndex + itemsPerPage);


  return (
    <div className="staffBody">
      <NavLinkMenu back={props.back}/>
      <div className="staff">
            <p className="staff__container__title">Список граждан</p>
            <div className="staff__containersTableContainer">
              <div className="staff__tableTitle">
                <p className="staff__tabletitle_text">ФИО</p>
                <p className="staff__tabletitle_text">ДР</p>
                <p className="staff__tabletitle_text">Номер телефона</p>
                <p className="staff__tabletitle_text">Точка</p>
                <p className="staff__tabletitle_text">Место</p>
                <p className="staff__tabletitle_text">Логин</p>
              </div>
              <UserSlider users={visibleUsers} ok="users"/>
            </div>
            <div className="slider-controls">
            <button className="slider-controls__brnprevnext" disabled={Math.ceil(currentIndex / itemsPerPage) === 0} onClick={handlePrev}>&lt;</button>
              {Math.ceil(currentIndex / itemsPerPage) !== 0 ? (
                <span className="slider-controls__btn">{Math.ceil(currentIndex / itemsPerPage)}</span>
              ) : null}
              <span className="slider-controls__btn_active">{Math.ceil(currentIndex / itemsPerPage) + 1}</span>
              {Math.ceil(currentIndex / itemsPerPage) + 2 <= Math.ceil(props.card.length / itemsPerPage) ? (
                <span className="slider-controls__btn">{Math.ceil(currentIndex / itemsPerPage) + 2}</span>
              ) : null}
              <button className="slider-controls__brnprevnext" onClick={handleNext}>&gt;</button>
            </div>
          </div>
      </div>
  );
}

export default Staff;
