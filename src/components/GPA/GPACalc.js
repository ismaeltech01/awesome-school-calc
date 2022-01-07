import React from "react";
import { NavLink } from "react-router-dom";

export default function GPACalc() {

  const handleClick = (e) => {
    let alertTxt = `There are two GPA calculator types:\n 
    - Default: Uses the default settings to calculate GPA. The default settings are:\n GPA Scale: 4.0\n\t4.0 == 100 3.0 == 90, 2.0 == 80, 1.0 == 70, < 1.0 == 0\n\n 
    - Custom: Uses your custom settings that you can set to calculate GPA. Customizable settings include: `;
    if (e.target.id === 'help-button')
      alert(alertTxt);
    
    /*
    if (e.target.id === "gpa-default-button") {
      e.preventDefault();
      setGpaCalcType('default');
    }
    
    if (e.target.id === "gpa-custom-button") {
      e.preventDefault();
      setGpaCalcType('custom');
    }
    */
  }

  return (
    <div className="calculator-body">
      <h2 className="recommended-gpa-calc-notice"> Note: For more accurate results, use the <strong>Custom</strong> calculator.</h2>
      <div className="label-and-help-container">
        <label className="txt-field-label" htmlFor="gpa-calc-type">Select GPA calculator type:</label>
        <button type="button" id="help-button" name="gpa-calc-type-hp" onClick={handleClick} title="Help">?</button>
      </div>
      <div className="gpa-calc-types-container">
        <NavLink id="gpa-calc-option" to="/gpa/weighted">Weighted GPA</NavLink>
        <NavLink id="gpa-calc-option" to="/gpa/un-weighted">Un-Weighted GPA</NavLink>
        <NavLink id="gpa-calc-option" to="/gpa/custom">Custom</NavLink>
      </div>
    </div>
  );
}