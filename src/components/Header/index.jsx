import React from "react";
import img_1 from "../../images/halal-logo.png";
import cl from "./header.module.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
  const loading = useSelector((state) => state.tables.loading);
  return (
    <>
      {loading ? (
        <div className={cl.loader}>Loading...</div>
      ) : (
        <div className={cl.nav}>
          <NavLink className={cl.wrapLogo} to="/">
            <img src={img_1} alt="" className={cl.logo} />
          </NavLink>
          <ul className={cl.menu}>
            <li>
              <NavLink className={cl.elementMenu} to="/menu">
                Меню
              </NavLink>
            </li>
            <li>
              <NavLink className={cl.elementMenu} to="/about">
                О ресторане
              </NavLink>
            </li>
            <li>
              <NavLink className={cl.elementMenu} to="/contacts">
                Контакты
              </NavLink>
            </li>
            <li>
              <NavLink className={cl.elementMenu} to="/news">
                Новости
              </NavLink>
            </li>
            <li>
              <i
                className={`bi bi-box-arrow-in-right ${cl.imgRegistration}`}
              ></i>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
