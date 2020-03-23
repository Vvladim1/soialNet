import React from "react";
import s from '../header/header.module.css';
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55hUJBQypwhxOO6dsifvOqoAWzJk2KHqO1ECcEnFRXAgkRTXpwA&s"
        width="5%"
        alt='sea'
      />
      <div className={s.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
