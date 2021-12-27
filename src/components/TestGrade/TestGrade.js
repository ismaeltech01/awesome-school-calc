import React, {useState} from "react";
import Results from "../TestGrade/Results";
import calculateTestScoreNeeded from "./logic";

export default function TestGrade() {
  //input field variables
  const [classAvg, setClassAvg] = useState('');
  const [testWeight, setTestWeight] = useState('');
  const [desiredClassAvg, setDesiredClassAvg] = useState('');

  //final result variables
  const [usrSubmit, setUsrSubmit] = useState(false);
  const [gradeNeeded, setGradeNeeded] = useState('');

  const handleChange = (e) => {
    if (usrSubmit)
      setUsrSubmit(false);
    if (e.target.id === 'current-average')
      setClassAvg(e.target.value);
    if (e.target.id === 'test-weight')
      setTestWeight(e.target.value);
    if (e.target.id === 'desired-average')
      setDesiredClassAvg(e.target.value);
  }

  const handleClick = (e) => {
    if (e.target.id === 'help-btn') {
      if (e.target.name === 'current-average-hp')
        alert('Your current class average before the test is taken. \n\nExample: I had a 95 in Math class the day before the test.');
      if (e.target.name === 'test-weight-hp')
        alert('The overall effect of the test (as a percentage) on your grade. \n\nExample: My next Science test will account for 15% of my final grade for the quarter.');
      if (e.target.name === 'desired-average-hp')
        alert('The class average that you would like to have after the score of the test is accounted for. \n\nExample: I wish I am still passing my Biology class after the test.');
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();

    setGradeNeeded(calculateTestScoreNeeded(classAvg, testWeight, desiredClassAvg));
    setUsrSubmit(true);
  }

  return (
    <div className="calculator-body">
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label htmlFor="current-average">Current Class Average:</label> 
            <button type="button" id="help-btn" name="current-average-hp" onClick={handleClick} title="Help">?</button>
            <input type="number" id="current-average" min="0" max="110" onChange={handleChange} value={classAvg} required></input>
          </li>
          <li>
            <label htmlFor="test-weight">Overall weight of test on grade:</label> 
            <button type="button" id="help-btn" name="test-weight-hp" onClick={handleClick} title="Help">?</button>
            <input type="number" id="test-weight" min="0" max="100" onChange={handleChange} value={testWeight} required></input>
          </li>
          <li>
            <label htmlFor="desired-average">Desired class average after test:</label> 
            <button type="button" id="help-btn" name="desired-average-hp" onClick={handleClick} title="Help">?</button>
            <input type="number" id="desired-average" min="0" max="110" onChange={handleChange} value={desiredClassAvg} required></input>
          </li>
        </ul>
        <button type="submit" id="submit-btn">Submit</button>
      </form> 
      <Results usrSubmit={usrSubmit} classAvg={classAvg} testWeight={testWeight} desiredClassAvg={desiredClassAvg} gradeNeeded={gradeNeeded}/>
    </div>
  );
}