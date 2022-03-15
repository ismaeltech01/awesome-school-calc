import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Container } from "..";
import { ThemeContext } from "../themeContext";

const CalcHeader = ({txt, navTo = undefined}) => {
  const {theme} = useContext(ThemeContext);

  if (navTo != undefined)
  return(
    <Container id="calc-header">
      <NavLink id='calc-back-btn' className={theme} to={navTo}>Back</NavLink>
      <h2 id="calc-h-txt" className={theme}>{txt}</h2>
    </Container>
  );
  else 
  return (
    <Container id="calc-header">
      <h2 id="calc-h-txt" className={theme}>{txt}</h2>
    </Container>
  );
}

export default CalcHeader;