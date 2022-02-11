import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import { Container } from ".";
import { ThemeContext } from "./themeContext";

export default function InitialQuestion() {
  const {theme} = useContext(ThemeContext);
  
  return (
    <div id="init-q-body" className={theme}>
      <div id="init-q-els" className={theme}>
        <h2 id="init-q-head" className={theme}>Select Calculator Type:</h2>
        <Container id="calc-types">
          <NavLink id="calc-option" className={theme} to="/semester-exam">Semester Exam</NavLink>
          <NavLink id="calc-option" className={theme} to="/test-grade">Test Grade</NavLink>
          <NavLink id='calc-option' className={theme} to='/gpa'>GPA Calc</NavLink>
        </Container>
      </div>
    </div>
  );
}