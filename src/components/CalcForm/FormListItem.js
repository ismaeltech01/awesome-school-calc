import React from "react";
import HelpButton from "./HelpButton";

const FormListItem =  (props) => {
  const {itemName, text, onchange, minVal, maxVal, inputVal, stepVal, helpMsg} = props;

  return(
    <li>
      <div className="label-and-help-container">
        <label className="txt-field-label" htmlFor={itemName}>{text}</label>
        <HelpButton itemName={itemName} msg={helpMsg}/>
      </div>
      <input type="number" id={itemName} min={minVal} max={maxVal} onChange={onchange} value={inputVal} step={stepVal} required></input>
    </li>
  );
}

export default FormListItem;