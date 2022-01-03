import React from "react";
import Results from "./Results";

export default function GPACustomCalc() {
  //input field variables
  const handleChange = (e) => {
    return 0;
  }

  const handleClick = (e) => {
    return 0;
  }

  const handleSubmit = (e) => {
    return 0;
  }

  //Final result variables
  return (
    <div className="calculator-body">
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <p className="under-dev-notice">Feature under development, don't trust the functionality of this calc.</p>
          </li>
        </ul>
        <button type="submit" id="submit-button" disabled>Submit</button>
      </form>
      <Results/>
    </div>
  );
}