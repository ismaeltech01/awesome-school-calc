//GPA results
import React from "react";

export default function Results(props) {
  const {usrSubmit, desiredGPA, gradeNeededEachClass, weighted} = props;

  let initialTxt = `Fill out all of the fields above and click the Submit button to get a result.`;

  let asideTxt = `How in the world did you get to this result? You must be some super mastermind... 
  Or you just put in random numbers into the calculator to see what you get. Anyway here is your result:`;
  
  let errTxt = `Uncaught Error. Make sure that ALL of the input fields are filled and try again. If the error persists, contact the developer.`;
  
  if (usrSubmit) {
    if (gradeNeededEachClass === 0) {
      return (
        <p className="results submit-result"><em className="aside-txt">{asideTxt}</em><br></br>To get a <strong>{desiredGPA}</strong> GPA, you will need a grade of at least <strong>{gradeNeededEachClass}</strong> in every class.</p>
      );
    } else if (gradeNeededEachClass <= 100) {
      return (
        <p className="results submit-result">To get a <strong>{desiredGPA}</strong> GPA, you will need a grade of at least <strong>{gradeNeededEachClass}</strong> in every class.</p>
      );
    } else if (gradeNeededEachClass > 100) {
      return (
      <p className="results submit-result">According to the data you provided... Unless you can get at least <strong>{gradeNeededEachClass}</strong> in every single class, It is <strong>IMPOSSIBLE</strong> to get your desired GPA this next semester.</p>
      );
    } else if (gradeNeededEachClass == -1) {
      return (
        <p className="results submit-result">You have submitted a GPA value that would result in a <strong>0</strong> on the <strong>{weighted ? 'weighted': 'un-weighted'}</strong>. Make sure that ALL of your GPA values are above {weighted ? '2.0' : '2.2'}.</p>
      );
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