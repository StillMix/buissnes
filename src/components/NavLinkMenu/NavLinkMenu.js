import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavLinkMenu.css';


function NavLinkMenu() {
    return (
        <div className="NavLinkMenu">
            <nav className='NavLinkMenu_links'>
                <NavLink to="/main" className="NavLinkMenu__link">Главная</NavLink>
                <NavLink to="/staff" className="NavLinkMenu__link">Сотрудники</NavLink>
                <NavLink to="/report" className="NavLinkMenu__link">Отчёт</NavLink>
                <NavLink to="/marked" className="NavLinkMenu__link">Помеченные</NavLink>
            </nav>
        </div>
    );
}

export default NavLinkMenu;