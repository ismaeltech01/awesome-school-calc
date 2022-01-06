import React, { useState } from "react";
import Results from "./Results";

export default function GPAUnWeightedCalc() {
  //input field variables
  const [currentGPA, setCurrentGPA] = useState('');
  const [currentCredits, setCurrentCredits] = useState('');
  const [desiredGPA, setDesiredGPA] = useState('');

  //Final result variables

  const handleChange = (e) => {
    if (e.target.id === 'current-gpa')
      setCurrentGPA(e.target.value);
    if (e.target.id === 'current-credits')
      setCurrentCredits(e.target.value);
    if (e.target.id === 'desired-gpa')
      setDesiredGPA(e.target.value);
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
            <input type="number" id="current-gpa" min="0" max="4" onChange={handleChange} value={currentGPA} step="0.1" required></input>
          </li>
          <li>
            <div className="label-and-help-container">
              <label className="txt-field-label" htmlFor="current-gpa">Current GPA:</label>
              <button type="button" id="help-button" name="current-gpa-hp" onClick={handleClick} title="Help">?</button>
            </div>
            <input type="number" id="current-gpa" min="0" max="4" onChange={handleChange} value={currentGPA} step="0.1" required></input>
          </li>
          <li>
            <div className="label-and-help-container">
              <label className="txt-field-label" htmlFor="current-credits">Current amount of credits earned:</label>
              <button type="button" id="help-button" name="current-credits-hp" onClick={handleClick} title="Help">?</button>
            </div>
            <input type="number" id="current-credits" min="0" max="4" onChange={handleChange} value={currentCredits} required></input>
          </li>
          <li>
            <div className="label-and-help-container">
              <label className="txt-field-label" htmlFor="desired-gpa">Desired GPA:</label>
              <button type="button" id="help-button" name="desired-gpa-hp" onClick={handleClick} title="Help">?</button>
            </div>
            <input type="number" id="desired-gpa" min="0" max="100" onChange={handleChange} value={desiredGPA} step="0.1" required></input>
          </li>
        </ul>
        <button type="submit" id="submit-button">Submit</button>
      </form>
      <Results/>
    </div>
  );
}