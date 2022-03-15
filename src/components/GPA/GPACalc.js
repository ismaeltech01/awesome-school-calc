import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { HelpButton, CalcHeader, Container } from "..";
import { ThemeContext } from "../themeContext";

export default function GPACalc() {
  const {theme} = useContext(ThemeContext);

  let helpMsg = ` There are 3 GPA calculator types:\n 
  - Weighted & Un-Weighted: Uses a predetermined scale and calculation. 
  *Go to schoolcalc.netlify.app/scales for more details on the scales used.  
  - Custom: Calculate your GPA using your own custom settings.`;

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