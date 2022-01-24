import React from "react";

const FormListItem =  (props) => {
  const {itemName, text, onclick, onchange, minVal, maxVal, inputVal, stepVal} = props;

  return(
    <li>
      <div className="label-and-help-container">
        <label className="txt-field-label" htmlFor={itemName}>{text}</label>
        <button type="button" id="help-button" name={`${itemName}-hp`} onClick={onclick} title="Help">?</button>
      </div>
      <input type="number" id={itemName} min={minVal} max={maxVal} onChange={onchange} value={inputVal} step={stepVal} required></input>
    </li>
  );
}

export default FormListItem;