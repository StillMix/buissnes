import React from "react";
import { NavLink } from "react-router-dom";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import "./NavLinkMenu.css";
import MainLogo from "../../images/mainLogo.svg";
import MarkedLogo from "../../images/markedLogo.svg";
import ReportLogo from "../../images/reportLogo.svg";
import StaffLogo from "../../images/staffLogo.svg";
import AddUser from '../../images/addUser.svg';
import MainLogoActive from "../../images/mainLogoWhite.svg";
import MarkedLogoActive from "../../images/markedLogoWhite.svg";
import ReportLogoActive from "../../images/reportLogoWhite.svg";
import StaffLogoActive from "../../images/staffLogoWhite.svg";
import LogoWhite from '../../images/logoWhite.svg';
import AddUserWhite from '../../images/addUserWhite.svg';
import DarkLightWhite from '../../images/darkLightWhite.svg';

function NavLinkMenu() {
    return (
        <div className="NavLinkMenu">
            <div className="NavLinkMenu__logoContainer">
                <img className="NavLinkMenu__logo" src={LogoWhite} />
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
                        Помеченные
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
                <p className="NavLinkMenu__settingsContainer_title">user_admin</p>
                <p className="NavLinkMenu_settingsContainer_darkTheme">
                    <span className="NavLinkMenu_settingsContainer_darkTheme_icon">
                        <img src={DarkLightWhite} />
                    </span>
                    Темный режим{" "}
                    <span className="NavLinkMenu_settingsContainer_darkTheme_toggle">
                        <ToggleSwitch></ToggleSwitch>
                    </span>
                </p>
            </div>
        </div>
    );
}

export default NavLinkMenu;
