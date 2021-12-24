import React from "react"; 
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <NavLink to="/">
        <h1>Awesome School Calc  <sup>v0.1.0 Pre-Alpha</sup></h1>
      </NavLink>
    </header>
  );
}