import '../css/InitialQuestion.css';
import React from "react";
import { NavLink } from "react-router-dom";

export default function InitialQuestion() {
  return (
    <div className="initial-question-body">
      <h2 className="initial-question-heading">Select Calculator Type:</h2>
      <div id="calc-types">
        <NavLink id="calc-option" to="/semester-exam">Semester Exam</NavLink>
        <NavLink id="calc-option" to="/test-grade">Test Grade</NavLink>
        <NavLink id='calc-option' to='/gpa'>GPA Calc</NavLink>
      </div>
    </div>
  );
}