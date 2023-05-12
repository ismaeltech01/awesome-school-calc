//SemesterExam results
import React from "react";

const ResultTxt = ({usrSubmit, desiredClassAvg, gradeNeeded}) => {
  if (usrSubmit) {
    if (gradeNeeded !== 0) {
      return (
        <p>To get a <strong>{desiredClassAvg}</strong> final semester average, you will need a score of at least <strong>{gradeNeeded}</strong> on the semester exam.</p>
      );
    } else if (gradeNeeded === 0) {
      return (
        <p>To get a <strong>{desiredClassAvg}</strong> final semester average... you don't have to do anything! As long as you don't get a negative average, your good to go!</p>
      );
    } else {
      return (
        <p>Uncaught Error. Make sure that ALL of the input fields are filled and try again. If the error persists, contact the developer.</p>
      );
    }
  } else {
    return (
      <p>Fill out all of the fields above and click the Submit button to get a result.</p>
    );
  }
}

export default ResultTxt;