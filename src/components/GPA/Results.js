//GPA results
import React from "react";

export default function Results(props) {
  const {usrSubmit, desiredGPA, gradeNeededEachClass} = props;

  if (usrSubmit) {
    if (gradeNeededEachClass === 0) {
      return (
        <p className="results submit-result"><p className="aside-txt">How in the world did you get to this result? You must be some super mastermind... Or you just put in random numbers into the calculator to see what you get. Anyway here is your result:</p> To get a <strong>{desiredGPA}</strong> class average... you don't have to do anything! You can score a <strong>0</strong> on all of your classes and still get a GPA of <strong>{desiredGPA}</strong>. (I would still recommend at least getting a passing grade, just saying.)</p>
      );
    } else if (gradeNeededEachClass !== 0) {
      return (
        <p className="results submit-result">To get a <strong>{desiredGPA}</strong> GPA, you will need a grade of at least <strong>{gradeNeededEachClass}</strong> in every class.</p>
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