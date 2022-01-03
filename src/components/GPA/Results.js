//GPA results
import React from "react";

export default function Results(props) {
  const {usrSubmit, classAvg, testWeight, desiredClassAvg, gradeNeeded} = props;

  if (usrSubmit) {
    if (gradeNeeded === 0) {
      return (
        <p className="results submit-result">To get a <strong>{desiredClassAvg}</strong> class average... you don't have to do anything! You can score a <strong>0</strong> on the test and still get your desired grade. (I would recommend still taking the test, just saying.)</p>
      );
    } else if (gradeNeeded !== 0) {
      return (
        <p className="results submit-result">To get a <strong>{desiredClassAvg}</strong> class average, you will need a score of <strong>{gradeNeeded}</strong> on the test.</p>
      );
    } else {
      return (
        <p className="results submit-result">Uncaught Error. Make sure that ALL of the input fields are filled and try again. If the error persists, contact the developer.</p>
      );
    }
  } else {
    return (
      <p className="results no-submit-result">Fill out all of the fields above and click the Submit button to get a result.</p>
    );
  }
}