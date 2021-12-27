//TestGrade Results
import React from "react";
import areAllVarsEmpty from "../areAllVarsEmpty";

export default function Results(props) {
  const {usrSubmit, classAvg, testWeight, desiredClassAvg, gradeNeeded} = props;

  if (usrSubmit) {
    if (areAllVarsEmpty(classAvg, testWeight, desiredClassAvg, gradeNeeded)) {
      return (
        <p className="results submit-result">You submitted invalid data! Please double check that you filled out ALL of the input fields.</p>
      );
    } else if (gradeNeeded === 0) {
      return (
        <p className="results submit-result">To get a <strong>{desiredClassAvg}</strong> class average... you don't have to do anything! You can score a <strong>0</strong> on the test and still get your desired grade. (I would recommend still taking the test, just saying.)</p>
      );
    } else if (gradeNeeded !== 0) {
      return (
        <p className="results submit-result">To get a <strong>{desiredClassAvg}</strong> class average, you will need a score of <strong>{gradeNeeded}</strong> on the test.</p>
      );
    } else {
      return (
        <p className="results submit-result">Uncaught Error. Please try again. If error persists, contact the developer.</p>
      );
    }
  } else {
    return (
      <p className="results no-submit-result">Fill out all of the fields above and click the Submit button to get a result.</p>
    );
  }
}