import React, { useState } from "react";
import Results from "./Results";
import calculateGradeNeeded, {areAllVarsEmpty} from "./logic";

export default function SemesterExam() {
  //input field variables
  const [semesterAvg, setSemesterAvg] = useState('');
  const [percentEffect, setPercentEffect] = useState('');
  const [desiredGrade, setDesiredGrade] = useState('');

  //Final result variables
  const [gradeNeeded, setGradeNeeded] = useState('');

  const handleSubmit = (e) => {
    setGradeNeeded(calculateGradeNeeded(semesterAvg, percentEffect, desiredGrade));
  }

  const handleChange = (e) => {
    if (e.target.id === "semester-average")
      setSemesterAvg(e.target.value);
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
          <label htmlFor="semester-average">Current Semester Average:</label> 
          <button type="button" id="help-button" onClick={handleClick}>?</button>
          <input id="semester-average" onChange={handleChange} value={semesterAvg}></input>
        </li>
        <li>
          <label htmlFor="percent-effect">Percentage effect of semester exam on final semester average:</label> 
          <button type="button" id="help-button" onClick={handleClick}>?</button>
          <input id="percent-effect" onChange={handleChange} value={percentEffect}></input>
        </li>
        <li>
          <label htmlFor="desired-average">Desired Final semester average:</label> 
          <button type="button" id="help-button" onClick={handleClick}>?</button>
          <input id="desired-average" onChange={handleChange} value={desiredGrade}></input>
        </li>
      </ul>
      <button type="button" id="submit-button" onClick={handleSubmit}>Submit</button>
    </form>
    <Results semesterAvg={semesterAvg} percentEffect={percentEffect} desiredGrade={desiredGrade} gradeNeeded={gradeNeeded}/>
    </>
  );
}