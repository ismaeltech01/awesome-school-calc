import React from "react";
import FormListItem from "./FormListItem";

const CalcForm = (props) => {
  const {onsubmit, onchange, itemData, helpData, submitText, extraBtn, extraBtnText, onBackClick} = props;

  if (typeof extraBtn !== 'boolean' || !extraBtn)
    return(
      <form onSubmit={onsubmit}>
        <ul>
          {
            itemData.map(([name, text, minVal, maxVal, inputVal, stepVal], index) => (
              <FormListItem key={name} itemName={name} text={text} onchange={onchange} minVal={minVal}
              maxVal={maxVal} inputVal={inputVal} stepVal={stepVal} helpMsg={helpData[index]}/>
            ))
          }
        </ul>
        <button type="submit" id="submit-button">{submitText}</button>
      </form>
    );

  if (extraBtn)
    return(
      <form onSubmit={onsubmit}>
        <ul>
          {
            itemData.map(([name, text, minVal, maxVal, inputVal, stepVal], index) => (
              <FormListItem key={name} itemName={name} text={text} onchange={onchange} minVal={minVal}
              maxVal={maxVal} inputVal={inputVal} stepVal={stepVal} helpMsg={helpData[index]}/>
            ))
          }
        </ul>
        <button type="button" id="back-btn" onClick={onBackClick}>{extraBtnText}</button>
        <button type="submit" id="submit-button">{submitText}</button>
      </form>
    );
}

export default CalcForm;

const CustomElements = (props) => {
  const {customEl} = props;


  return(null);
}