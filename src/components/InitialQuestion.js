import React from "react";
import { NavLink } from "react-router-dom";

export default function InitialQuestion() {
  return (
    <div className="init-q-body">
      <div className="init-q-els">
        <h2 className="init-q-head">Select Calculator Type:</h2>
        <div id="calc-types-container">
          <NavLink id="calc-option" to="/semester-exam">Semester Exam</NavLink>
          <NavLink id="calc-option" to="/test-grade">Test Grade</NavLink>
          <NavLink id='calc-option' to='/gpa'>GPA Calc</NavLink>
        </div>
      </div>
    </div>
  );
}