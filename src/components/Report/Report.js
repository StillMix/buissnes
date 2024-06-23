import React, { useState } from "react";
import "./Report.css";
import NavLinkMenu from "../NavLinkMenu/NavLinkMenu";
import { tovar } from "../initialCard";
import UserSlider from "../UserSlider/UserSlider";
function Report(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 12; // Количество элементов на странице

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(0, tovar.length - itemsPerPage)
        : prevIndex - itemsPerPage
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= tovar.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const visibleUsers = tovar.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="reportBody">
      <NavLinkMenu back={props.back}/>
      <div className="report">
            <p className="report__container__title">Отчёты</p>
            <div className="report__containersTableContainer">
              <div className="report__tableTitle">
                <p className="report__tabletitle_text">Дата продажи</p>
                <p className="report__tabletitle_text">Наименование</p>
                <p className="report__tabletitle_text">Количество</p>
                <p className="report__tabletitle_text">Приход</p>
              </div>
              <UserSlider users={visibleUsers} ok="tovar"/>
            </div>
            <div className="slider-controls">
            <button className="slider-controls__brnprevnext" disabled={Math.ceil(currentIndex / itemsPerPage) === 0} onClick={handlePrev}>&lt;</button>
              {Math.ceil(currentIndex / itemsPerPage) !== 0 ? (
                <span className="slider-controls__btn">{Math.ceil(currentIndex / itemsPerPage)}</span>
              ) : null}
              <span className="slider-controls__btn_active">{Math.ceil(currentIndex / itemsPerPage) + 1}</span>
              {Math.ceil(currentIndex / itemsPerPage) + 2 <= Math.ceil(tovar.length / itemsPerPage) ? (
                <span className="slider-controls__btn">{Math.ceil(currentIndex / itemsPerPage) + 2}</span>
              ) : null}
              <button className="slider-controls__brnprevnext" onClick={handleNext}>&gt;</button>
            </div>
          </div>
      </div>
  );
}

export default Report;
