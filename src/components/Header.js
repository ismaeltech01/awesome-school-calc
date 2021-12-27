import '../css/Header.css';
import React from "react"; 
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <NavLink to="/">
        <h1 class="header-txt">Awesome School Calc  <sup class="header-sup-txt">v0.2.0 Alpha</sup></h1>
      </NavLink>
    </header>
  );
}