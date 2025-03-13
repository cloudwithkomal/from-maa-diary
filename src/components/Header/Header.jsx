import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.jpg";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={Logo} alt="Logo" className="logo" />
      </Link>
      <h1>From Maa's Diary</h1>
    </header>
  );
}

export default Header;
