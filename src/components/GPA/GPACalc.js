import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { HelpButton, CalcHeader, Container } from "..";
import { ThemeContext } from "../themeContext";

export default function GPACalc() {
  const {theme} = useContext(ThemeContext);

  let helpMsg = `Help currently unavailable.`;
  // `There are two GPA calculator types:\n 
  //   - Default: Uses the default settings to calculate GPA. The default settings are:\n GPA Scale: 4.0\n\t4.0 == 100 3.0 == 90, 2.0 == 80, 1.0 == 70, < 1.0 == 0\n\n 
  //   - Custom: Uses your custom settings that you can set to calculate GPA. Customizable settings include: `;

  return (
    <div id="calc-body" className={theme}>
      <Container id="gpa-head">
        <CalcHeader navTo='/' txt='GPA Calc'/>
        <Container id="label-and-help">
          <label id="txt-field-label" htmlFor="gpa-calc-type">Select GPA calculator type:</label>
          <HelpButton itemName='gpa-calc' msg={helpMsg}/>
        </Container>
        <Container id="gpa-calc-types">
          <NavLink id="gpa-calc-option" className={theme} to="/gpa/weighted">Weighted GPA</NavLink>
          <NavLink id="gpa-calc-option" className={theme} to="/gpa/un-weighted">Un-Weighted GPA</NavLink>
          <NavLink id="gpa-calc-option" className={theme} to="/gpa/custom">Custom</NavLink>
        </Container>
      </Container>
    </div>
  );
}