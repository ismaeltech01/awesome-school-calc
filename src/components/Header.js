import '../css/Header.css';
import React from "react"; 
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <NavLink to="/">
        <h1 className="header-txt">Awesome School Calc  <sup className="header-sup-txt">v0.2.0 Alpha</sup></h1>
      </NavLink>
    </header>
  );
}