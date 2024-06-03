import React, { useState, useEffect, useRef } from "react";
import "./Staff.css";
import NavLinkMenu from "../NavLinkMenu/NavLinkMenu";
import { users } from "../initialCard";

function Staff() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const tableContainerRef = useRef(null);

  // Вычисление индексов для текущей страницы
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(users.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const calculateItemsPerPage = () => {
      if (tableContainerRef.current) {
        const tableHeight = tableContainerRef.current.clientHeight; // Высота контейнера таблицы
        const rowHeight = 50; // Высота строки
        const captionHeight = 50; // Высота заголовка таблицы
        const calculatedItemsPerPage = Math.floor((tableHeight - captionHeight) / rowHeight);
        setItemsPerPage(calculatedItemsPerPage);
      }
    };

    calculateItemsPerPage();
    window.addEventListener("resize", calculateItemsPerPage);
    return () => window.removeEventListener("resize", calculateItemsPerPage);
  }, []);

  // Генерация номеров страниц
  const pageNumbers = [];
  for (let i = Math.max(1, currentPage - 2); i <= Math.min(totalPages, currentPage + 2); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="staffBody">
      <NavLinkMenu />
      <div className="staff">
        <div ref={tableContainerRef} className="staff__tableContainer">
          <table className="staff__containersTable">
            <caption className="staff__containersTitle">
              Список сотрудников
            </caption>
            <thead>
              <tr className="staff__containersElements">
                <th className="staff__containersElementsP">ФИО</th>
                <th className="staff__containersElementsP">Номер телефона</th>
                <th className="staff__containersElementsP">Логин</th>
                <th className="staff__containersElementsP">Точка</th>
              </tr>
            </thead>
            <tbody key={currentPage} className="table_1">
              {currentUsers.map((i) => (
                <tr key={i.id} className="staff__containersElements">
                  <td className="staff__containersElementsP">{i.name}</td>
                  <td className="staff__containersElementsP">{i.number}</td>
                  <td className="staff__containersElementsP">{i.login}</td>
                  <td className="staff__containersElementsP">{i.tochka}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
              Предыдущая
            </button>
            {pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => handlePageClick(number)}
                className={currentPage === number ? "active" : ""}
              >
                {number}
              </button>
            ))}
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>
              Следующая
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Staff;
