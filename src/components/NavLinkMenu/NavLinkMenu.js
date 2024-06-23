import React from "react";
import { NavLink} from "react-router-dom";
import "./NavLinkMenu.css";
import MainLogo from "../../images/mainLogo.svg";
import MarkedLogo from "../../images/ost.svg";
import ReportLogo from "../../images/reportLogo.svg";
import StaffLogo from "../../images/staffLogo.svg";
import AddUser from '../../images/addUser.svg';
import MainLogoActive from "../../images/mainLogoWhite.svg";
import MarkedLogoActive from "../../images/ostWhite.svg";
import ReportLogoActive from "../../images/reportLogoWhite.svg";
import StaffLogoActive from "../../images/staffLogoWhite.svg";
import LogoWhite from '../../images/logoWhite.svg';
import AddUserWhite from '../../images/addUserWhite.svg';
import Out from '../../images/out.svg';

function NavLinkMenu(props) {
    return (
        <div className="NavLinkMenu">
            <div className="NavLinkMenu__logoContainer">
                <img className="NavLinkMenu__logo" alt="Main Logo" src={LogoWhite} />
            </div>
            <div className="NavLinkMenu__linksContainer">
                <p className="NavLinkMenu_linksContainer_title">Меню</p>
                <nav className="NavLinkMenu_links">
                    <NavLink
                        to="/main"
                        className="NavLinkMenu__link"
                    >
                        <img
                            src={MainLogo}
                            className="NavLinkMenu_link_img NavLinkMenu_link_img_inactive"
                            alt="Main Logo"
                        />
                        <img
                            src={MainLogoActive}
                            className="NavLinkMenu_link_img NavLinkMenu_link_img_active"
                            alt="Main Logo Active"
                        />
                        Главная
                    </NavLink>
                    <NavLink
                        to="/staff"
                        className="NavLinkMenu__link"
                    >
                        <img
                            src={StaffLogo}
                            className="NavLinkMenu_link_img NavLinkMenu_link_img_inactive"
                            alt="Main Logo"
                        />
                        <img
                            src={StaffLogoActive}
                            className="NavLinkMenu_link_img NavLinkMenu_link_img_active"
                            alt="Main Logo Active"
                        />
                        Сотрудники
                    </NavLink>
                    <NavLink
                        to="/report"
                        className="NavLinkMenu__link"
                    >
                        <img
                            src={ReportLogo}
                            className="NavLinkMenu_link_img NavLinkMenu_link_img_inactive"
                            alt="Main Logo"
                        />
                        <img
                            src={ReportLogoActive}
                            className="NavLinkMenu_link_img NavLinkMenu_link_img_active"
                            alt="Main Logo Active"
                        />
                        Отчёт
                    </NavLink>
                    <NavLink
                        to="/marked"
                        className="NavLinkMenu__link"
                    >
                        <img
                            src={MarkedLogo}
                            className="NavLinkMenu_link_img NavLinkMenu_link_img_inactive"
                            alt="Main Logo"
                        />
                        <img
                            src={MarkedLogoActive}
                            className="NavLinkMenu_link_img NavLinkMenu_link_img_active"
                            alt="Main Logo Active"
                        />
                        Остатки
                    </NavLink>
                </nav>
            </div>
            <div className="NavLinkMenu__adminPanelContainer">
                <p className="NavLinkMenu__adminPanelContainer_title">Админ панель</p>
                <nav className="NavLinkMenu_links">
                    <NavLink
                        to="/adduser"
                        className="NavLinkMenu__link"
                    >
                        <img
                            src={AddUser}
                            className="NavLinkMenu_link_img NavLinkMenu_link_img_inactive"
                            alt="Main Logo"
                        />
                        <img
                            src={AddUserWhite}
                            className="NavLinkMenu_link_img NavLinkMenu_link_img_active"
                            alt="Main Logo Active"
                        />
                        Добавить сотрудника
                    </NavLink>
                </nav>
            </div>
            <div className="NavLinkMenu__settingsContainer">
                 <button className="NavLinkMenu__settingsContainer_btn" onClick={props.back}><img  alt="Main Logo" src={Out}/>Завершить сеанс</button>
            </div>
        </div>
    );
}

export default NavLinkMenu;
