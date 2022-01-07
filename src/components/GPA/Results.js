//GPA results
import React from "react";

export default function Results(props) {
  const {usrSubmit, desiredGPA, gradeNeededEachClass} = props;

  const initialTxt = `Fill out all of the fields above and click the Submit button to get a result.`;

  const asideTxt = `How in the world did you get to this result? You must be some super mastermind... 
  Or you just put in random numbers into the calculator to see what you get. Anyway here is your result:`;
  
  const errTxt = `Uncaught Error. Make sure that ALL of the input fields are filled and try again. If the error persists, contact the developer.`;
  
  if (usrSubmit) {
    if (gradeNeededEachClass === 0) {
      return (
        <p className="results submit-result"><h6 className="aside-txt">{asideTxt}</h6>To get a <strong>{desiredGPA}</strong> GPA, you will need a grade of at least <strong>{gradeNeededEachClass}</strong> in every class.</p>
      );
    } else if (gradeNeededEachClass <= 100) {
      return (
        <p className="results submit-result">To get a <strong>{desiredGPA}</strong> GPA, you will need a grade of at least <strong>{gradeNeededEachClass}</strong> in every class.</p>
      );
    } else if (gradeNeededEachClass > 100) {
      <p className="results submit-result">According to the data you provided... Unless you can get at least {gradeNeededEachClass} in every single class, It is <strong>IMPOSSIBLE</strong> to get your desired GPA.</p>
    } else {
      return (
        <p className="results submit-result">{errTxt}</p>
      );
    }
  } else {
    return (
      <p className="results no-submit-result">{initialTxt}</p>
    );
  }
}