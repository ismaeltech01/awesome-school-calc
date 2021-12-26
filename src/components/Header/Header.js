import React from "react"; 
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <NavLink to="/">
        <h1>Awesome School Calc  <sup>v0.2.0 Alpha</sup></h1>
      </NavLink>
    </header>
  );
}