import React, { useState } from "react";
import Results from "./Results";
import calculateGradeNeeded from "./GradeNeeded";

export default function SemesterExam() {
  //input field variables
  const [semesterAverage, setSemesterAverage] = useState('');
  const [percentEffect, setPercentEffect] = useState('');
  const [desiredGrade, setDesiredGrade] = useState('');

  //Final result variables
  const [gradeNeeded, setGradeNeeded] = useState('');

  const handleSubmit = (e) => {
     
  }

  const handleChange = (e) => {
    if (e.target.id === "semester-average")
      setSemesterAverage(e.target.value);
    if (e.target.id === "percent-effect")
      setPercentEffect(e.target.value);
    if (e.target.id === "desired-average")
      setDesiredGrade(e.target.value);
  }

  const handleClick = (e) => {
    if (e.target.id === 'help-button') {
      //To-do
    }
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <ul>
        <li>
          <label htmlFor="semester-average">Semester Average:</label> 
          <button type="button" id="help-button" onClick={handleClick}>?</button>
          <input id="semester-average" onChange={handleChange} value={semesterAverage}></input>
        </li>
        <li>
          <label htmlFor="percent-effect">Percentage effect on final semester grade:</label> 
          <button type="button" id="help-button" onClick={handleClick}>?</button>
          <input id="percent-effect" onChange={handleChange} value={percentEffect}></input>
        </li>
        <li>
          <label htmlFor="desired-average">Desired Final semester grade:</label> 
          <button type="button" id="help-button" onClick={handleClick}>?</button>
          <input id="desired-average" onChange={handleChange} value={desiredGrade}></input>
        </li>
      </ul>
    </form>
    <Results gradeNeeded={gradeNeeded} desiredGrade={desiredGrade}/>
    </>
  );
}