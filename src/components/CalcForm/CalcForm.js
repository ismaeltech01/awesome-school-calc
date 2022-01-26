import React from "react";
import FormListItem from "./FormListItem";

const CalcForm = (props) => {
  const {onsubmit, onchange, itemData, helpData, submitText} = props;

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
}

export default CalcForm;