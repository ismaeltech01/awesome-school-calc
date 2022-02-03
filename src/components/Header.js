import React from "react"; 
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <NavLink to="/">
        <h1 className="header-txt">Awesome School Calc  <sup className="header-sup-txt">v1.0.0</sup></h1>
      </NavLink>
    </header>
  );
}