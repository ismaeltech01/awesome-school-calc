import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Container } from "..";
import { ThemeContext } from "../themeContext";

const CalcHeader = ({txt, navTo}) => {
  const {theme} = useContext(ThemeContext);

  return(
    <Container name="calc-header">
      <NavLink id='calc-back-btn' className={theme} to={navTo}>Back</NavLink>
      <h2 id="calc-h-txt" className={theme}>{txt}</h2>
    </Container>
  );
}

export default CalcHeader;