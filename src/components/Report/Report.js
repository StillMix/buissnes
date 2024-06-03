import React, { useState, useEffect, useRef } from "react";
import "./Report.css";
import NavLinkMenu from "../NavLinkMenu/NavLinkMenu";
import { tovar } from "../initialCard";

function Report() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const tableContainerRef = useRef(null);

  // Вычисление индексов для текущей страницы
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = tovar.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(tovar.length / itemsPerPage);

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
    <div className="reportBody">
      <NavLinkMenu />
      <div className="report">
        <div ref={tableContainerRef} className="report__tableContainer">
          <table className="report__containersTable">
            <caption className="report__containersTitle">
              Список сотрудников
            </caption>
            <thead>
              <tr className="report__containersElements">
                <th className="report__containersElementsP">Дата</th>
                <th className="report__containersElementsP">Наименование</th>
                <th className="report__containersElementsP">Точка</th>
                <th className="report__containersElementsP">Прибыль</th>
              </tr>
            </thead>
            <tbody key={currentPage} className="table_1">
              {currentUsers.map((i) => (
                <tr key={i.id} className="report__containersElements">
                  <td className="report__containersElementsP">{i.data}</td>
                  <td className="report__containersElementsP">{i.name}</td>
                  <td className="report__containersElementsP">{i.tochka}</td>
                  <td className="report__containersElementsP">{i.prib}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
            {`<`}
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
              {`>`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Report;
