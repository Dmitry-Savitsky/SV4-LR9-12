import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h1 className="title">Notaries</h1>
      </Link>
      <ul>
        <li>
          <Link to="/notaries"> Нотариусы </Link>
        </li>
        <li>
          <Link to="/clinets"> Клиенты </Link>
        </li>
        <li>
          <Link to="/servicesAccounting"> Учет услуг </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
