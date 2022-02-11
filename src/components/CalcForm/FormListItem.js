import React, { useContext } from "react";
import { Container } from "..";
import { ThemeContext } from "../themeContext";
import HelpButton from "./HelpButton";

const FormListItem =  ({itemName, text, onchange, minVal, maxVal, inputVal, stepVal, helpMsg}) => {
  const {theme} = useContext(ThemeContext);

  return(
    <li>
      <Container id="label-and-help">
        <label id="txt-field-label" className={theme} htmlFor={itemName}>{text}</label>
        <HelpButton itemName={itemName} msg={helpMsg}/>
      </Container>
      <input type="number" id={itemName} className={theme} min={minVal} max={maxVal} onChange={onchange} value={inputVal} step={stepVal} required></input>
    </li>
  );
}

export default FormListItem;