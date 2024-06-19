import React, { useState } from "react";
import "./Marked.css";
import { tovarsclad } from "../initialCard";
import NavLinkMenu from '../NavLinkMenu/NavLinkMenu';
import UserSlider from "../UserSlider/UserSlider";
function Marked() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 12; // Количество элементов на странице

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(0, tovarsclad.length - itemsPerPage)
        : prevIndex - itemsPerPage
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= tovarsclad.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const visibleUsers = tovarsclad.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="markedBody">
      <NavLinkMenu />
      <div className="marked">
      <p className="marked__container__title">Остатки</p>
            <div className="marked__containersTableContainer">
              <div className="marked__tableTitle">
                <p className="marked__tabletitle_text">Наименование</p>
                <p className="marked__tabletitle_text">Точка</p>
                <p className="marked__tabletitle_text">Остаток</p>
                <p className="marked__tabletitle_text">Коммисия</p>
                <p className="marked__tabletitle_text">Налог</p>
              </div>
              <UserSlider users={visibleUsers} ok="marked"/>
            </div>
            <div className="slider-controls">
            <button className="slider-controls__brnprevnext" disabled={Math.ceil(currentIndex / itemsPerPage) === 0} onClick={handlePrev}>&lt;</button>
              {Math.ceil(currentIndex / itemsPerPage) !== 0 ? (
                <span className="slider-controls__btn">{Math.ceil(currentIndex / itemsPerPage)}</span>
              ) : null}
              <span className="slider-controls__btn_active">{Math.ceil(currentIndex / itemsPerPage) + 1}</span>
              {Math.ceil(currentIndex / itemsPerPage) + 2 <= Math.ceil(tovarsclad.length / itemsPerPage) ? (
                <span className="slider-controls__btn">{Math.ceil(currentIndex / itemsPerPage) + 2}</span>
              ) : null}
              <button className="slider-controls__brnprevnext" onClick={handleNext}>&gt;</button>
            </div>
      </div>
    </div>
  );
}

export default Marked;
