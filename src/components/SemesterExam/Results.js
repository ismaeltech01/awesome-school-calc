//SemesterExam results
import React from "react";
import areAllVarsEmpty from "./logic";

export default function Results(props) {
  const {usrSubmit, semesterAvg, percentEffect, desiredGrade, gradeNeeded} = props;

  if (usrSubmit) {
    if (areAllVarsEmpty(semesterAvg, percentEffect, desiredGrade, gradeNeeded)) {
      return (
        <p className="results submit-result">You submitted invalid data! Please double check that you filled out ALL of the input fields.</p>
      );
    } else if (gradeNeeded !== 0) {
      return (
        <p className="results submit-result">To get a <strong>{desiredGrade}</strong> final semester average, you will need a score of atleast <strong>{gradeNeeded}</strong> on the semester exam.</p>
      );
    } else if (gradeNeeded === 0) {
      return (
        <p className="results submit-result">To get a <strong>{desiredGrade}</strong> final semester average... you don't have to do anything! As long as you don't get a negative average, your good to go!</p>
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