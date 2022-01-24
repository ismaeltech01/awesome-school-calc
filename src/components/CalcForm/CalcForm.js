import React from "react";
import FormListItem from "./FormListItem";

const CalcForm = (props) => {
  const {onsubmit, onclick, onchange, itemData, submitText} = props;

  return(
    <form onSubmit={onsubmit}>
      <ul>
        {
          itemData.map(([name, text, minVal, maxVal, inputVal, stepVal]) => (
            <FormListItem key={name} itemName={name} text={text} onclick={onclick} onchange={onchange} minVal={minVal}
            maxVal={maxVal} inputVal={inputVal} stepVal={stepVal}/>
          ))
        }
      </ul>
      <button type="submit" id="submit-button">{submitText}</button>
    </form>
  );
}

export default CalcForm;