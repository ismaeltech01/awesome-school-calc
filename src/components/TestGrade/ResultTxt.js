//TestGrade Results
import React from "react";

const ResultTxt = ({usrSubmit, desiredClassAvg, gradeNeeded}) => {
  if (usrSubmit) {
    if (gradeNeeded === 0) {
      return (
        <p>To get a <strong>{desiredClassAvg}</strong> class average... you don't have to do anything! You can score a <strong>0</strong> on the test and still get your desired grade. (I would recommend still taking the test, just saying.)</p>
      );
    } else if (gradeNeeded !== 0) {
      return (
        <p>To get a <strong>{desiredClassAvg}</strong> class average, you will need a score of <strong>{gradeNeeded}</strong> on the test.</p>
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