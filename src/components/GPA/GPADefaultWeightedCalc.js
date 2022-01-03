import React from "react";
import { useState } from "react/cjs/react.development";
import Results from "./Results";

export default function GPADefaultWeightedCalc() {
  //input field variables
  const [currentGPA, setCurrentGPA] = useState('');
  const [currentCredits, setCurrentCredits] = useState('');
  const [desiredGPA, setDesiredGPA] = useState('');
  const [nextSemesterCredits, setNextSemesterCredits] = useState('');

  //Final result variables
  const [usrSubmit, setUsrSubmit] = useState('');

  const handleChange = (e) => {
    if (usrSubmit)
      setUsrSubmit(false);
    if (e.target.id === 'current-gpa')
      setCurrentGPA(e.target.value);
    if (e.target.id === 'current-credits')
      setCurrentCredits(e.target.value);
    if (e.target.id === 'desired-gpa')
      setDesiredGPA(e.target.value);
    if (e.target.id === 'next-semester-credits')
      setNextSemesterCredits(e.target.value);
  }
  
  const handleClick = (e) => {
    if (e.target.id === 'help-button') {
      if (e.target.name === "current-gpa-hp") {
        let msg = `Help currently unavailable.`;
        alert(msg);
      }
      if (e.target.name === "current-credits-hp") {
        let msg = `Help currently unavailable.`;
        alert(msg);
      }
      if (e.target.name === "desired-gpa-hp") {
        let msg = `Help currently unavailable.`;
        alert(msg);
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsrSubmit(true);
  }

  return (
    <div className="calculator-body">
      <p className="under-dev-notice">Feature under development, don't trust the functionality of this calc.</p>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <div className="label-and-help-container">
              <label className="txt-field-label" htmlFor="current-gpa">Current GPA:</label>
              <button type="button" id="help-button" name="current-gpa-hp" onClick={handleClick} title="Help">?</button>
            </div>
            <input type="number" id="current-gpa" min="0" max="5.0" onChange={handleChange} value={currentGPA} step="0.1" required></input>
          </li>
          <li>
            <div className="label-and-help-container">
              <label className="txt-field-label" htmlFor="current-gpa">Current GPA:</label>
              <button type="button" id="help-button" name="current-gpa-hp" onClick={handleClick} title="Help">?</button>
            </div>
            <input type="number" id="current-gpa" min="0" max="5.0" onChange={handleChange} value={currentGPA} step="0.1" required></input>
          </li>
          <li>
            <div className="label-and-help-container">
              <label className="txt-field-label" htmlFor="current-credits">Current amount of credits earned:</label>
              <button type="button" id="help-button" name="current-credits-hp" onClick={handleClick} title="Help">?</button>
            </div>
            <input type="number" id="current-credits" min="0" max="200.0" onChange={handleChange} value={currentCredits} step="
            0.5" required></input>
          </li>
          <li>
            <div className="label-and-help-container">
              <label className="txt-field-label" htmlFor="desired-gpa">Desired GPA:</label>
              <button type="button" id="help-button" name="desired-gpa-hp" onClick={handleClick} title="Help">?</button>
            </div>
            <input type="number" id="desired-gpa" min="0" max="5.0" onChange={handleChange} value={desiredGPA} step="0.1" required></input>
          </li>
          <li>
            <div className="label-and-help-container">
              <label className="txt-field-label" htmlFor="next-semester-credits">Credits you will take next semester:</label>
              <button type="button" id="help-button" name="next-semester-credits-hp" onClick={handleClick} title="Help">?</button>
            </div>
            <input type="number" id="next-semester-credits" min="0" max="20.0" onChange={handleChange} value={nextSemesterCredits} step="0.5" required></input>
          </li>
        </ul>
        <button type="submit" id="submit-button">Submit</button>
      </form>
      <Results/>
    </div>
  );
}