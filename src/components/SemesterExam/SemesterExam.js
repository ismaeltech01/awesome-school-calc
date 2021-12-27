import '../../css/SemesterExam.css';
import React, { useState } from "react";
import Results from "./Results";
import calculateGradeNeeded from "./logic";

export default function SemesterExam() {
  //input field variables
  const [semesterAvg, setSemesterAvg] = useState('');
  const [percentEffect, setPercentEffect] = useState('');
  const [desiredGrade, setDesiredGrade] = useState('');
  const [ usrSubmit, setUsrSubmit ] = useState(false);

  //Final result variables
  const [gradeNeeded, setGradeNeeded] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setGradeNeeded(calculateGradeNeeded(semesterAvg, percentEffect, desiredGrade));
    setUsrSubmit(true);
  }

  const handleChange = (e) => {
    if (usrSubmit)
      setUsrSubmit(false);
    if (e.target.id === "semester-average")
      setSemesterAvg(e.target.value);
    if (e.target.id === "percent-effect")
      setPercentEffect(e.target.value);
    if (e.target.id === "desired-average")
      setDesiredGrade(e.target.value);
  }

  const handleClick = (e) => {
    if (e.target.id === 'help-button') {
      if (e.target.name === "semester-average-hp")
        alert('Your current semester average before taking into account the semester exam. \n\nExample: Before finals, I have a 75 in Metaphysics.');
      if (e.target.name === "percent-effect-hp")
        alert('The effect that the semester exam will have on your final semester grade. \n\nExample: Your class grade at the end of the semester is 85, which will account for 75% of your final semester average. This means that the semester exam will have a 25% effect on your final semester average.');
      if (e.target.name === "desired-average-hp")
        alert('The semester average that you desire to achieve after taking into consideration ALL of your grades. (includes the semester exam and your normal semester grade) \n\n Example: I got a 99% in Curry studies and a 90% on the final exam, which means that I received a total grade of 97.2');
    }
  }

  return (
    <div className="calculator-body">
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <div className="label-and-help-container">
              <label className="txt-field-label" htmlFor="semester-average">Current Semester Average:</label> 
              <button type="button" id="help-button" name="semester-average-hp" onClick={handleClick} title="Help">?</button>
            </div>
            <input type="number" id="semester-average" min="0" max="110" onChange={handleChange} value={semesterAvg} required></input>
          </li>
          <li>
            <div className="label-and-help-container">
              <label className="txt-field-label" htmlFor="percent-effect">Percentage effect of semester exam on final semester average:</label> 
              <button type="button" id="help-button" name="percent-effect-hp" onClick={handleClick} title="Help">?</button>
            </div>
            <input type="number" id="percent-effect" min="0" max="100" onChange={handleChange} value={percentEffect} required></input>
          </li>
          <li>
            <div className="label-and-help-container">
              <label className="txt-field-label" htmlFor="desired-average">Desired Final semester average:</label> 
              <button type="button" id="help-button" name="desired-average-hp" onClick={handleClick} title="Help">?</button>
            </div>
            <input type="number" id="desired-average" min="0" max="110" onChange={handleChange} value={desiredGrade} required></input>
          </li>
        </ul>
        <button type="submit" id="submit-button">Submit</button>
      </form>
      <Results usrSubmit={usrSubmit} semesterAvg={semesterAvg} percentEffect={percentEffect} desiredGrade={desiredGrade} gradeNeeded={gradeNeeded}/>
    </div>
  );
}