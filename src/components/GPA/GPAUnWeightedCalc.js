import React, { useState } from "react";
import gradesNeeded from "./logic";
import Results from "./Results";

export default function GPAWeightedCalc() {
  //input field variables
  const [currentGPA, setCurrentGPA] = useState('');
  const [classesTaken, setClassesTaken] = useState('');
  const [desiredGPA, setDesiredGPA] = useState('');
  const [nextSemClasses, setNextSemClasses] = useState('');

  //Final result variables
  const [usrSubmit, setUsrSubmit] = useState(false);
  const [gradeNeededEachClass, setGradeNeededEachClass] = useState('');

  const handleChange = (e) => {
    if (usrSubmit)
      setUsrSubmit(false);
    if (e.target.id === 'current-gpa')
      setCurrentGPA(e.target.value);
    if (e.target.id === 'classes-taken')
      setClassesTaken(e.target.value);
    if (e.target.id === 'desired-gpa')
      setDesiredGPA(e.target.value);
    if (e.target.id === 'next-semester-classes')
      setNextSemClasses(e.target.value);
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
    
    setGradeNeededEachClass(gradesNeeded(false, currentGPA, classesTaken, desiredGPA, nextSemClasses));
    setUsrSubmit(true);
  }

  return (
    <div className="calculator-body">
      <p className="under-dev-notice">Feature under development, don't trust the functionality of this calc. <em>Warning: This calc will give an estimate that may be off by A LOT of points. Please use the Custom GPA calc if you want an exact calculation.</em></p>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <div className="label-and-help-container">
              <label className="txt-field-label" htmlFor="current-gpa">Current GPA:</label>
              <button type="button" id="help-button" name="current-gpa-hp" onClick={handleClick} title="Help">?</button>
            </div>
            <input type="number" id="current-gpa" min="2" max="4.0" onChange={handleChange} value={currentGPA} step="0.01" required></input>
          </li>
          <li>
            <div className="label-and-help-container">
              <label className="txt-field-label" htmlFor="classes-taken">Current amount of classes taken so far:</label>
              <button type="button" id="help-button" name="classes-taken-hp" onClick={handleClick} title="Help">?</button>
            </div>
            <input type="number" id="classes-taken" min="0" max="200.0" onChange={handleChange} value={classesTaken} step="1.0" required></input>
          </li>
          <li>
            <div className="label-and-help-container">
              <label className="txt-field-label" htmlFor="desired-gpa">Desired GPA:</label>
              <button type="button" id="help-button" name="desired-gpa-hp" onClick={handleClick} title="Help">?</button>
            </div>
            <input type="number" id="desired-gpa" min="2" max="4.0" onChange={handleChange} value={desiredGPA} step="0.01" required></input>
          </li>
          <li>
            <div className="label-and-help-container">
              <label className="txt-field-label" htmlFor="next-semester-classes">Amount of classes you will take next semester:</label>
              <button type="button" id="help-button" name="next-semester-classes-hp" onClick={handleClick} title="Help">?</button>
            </div>
            <input type="number" id="next-semester-classes" min="0" max="20.0" onChange={handleChange} value={nextSemClasses} step="1.0" required></input>
          </li>
        </ul>
        <button type="submit" id="submit-button">Submit</button>
      </form>
      <Results desiredGPA={desiredGPA} gradeNeededEachClass={gradeNeededEachClass} usrSubmit={usrSubmit}/>
    </div>
  );
}