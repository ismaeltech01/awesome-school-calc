import React from "react";

const HelpButton = (props) => {
  const {itemName, msg} = props;

  const handleClick = (e) => {
    alert(msg);
  }

  return(
    <button type="button" id="help-button" name={`${itemName}-hp`} onClick={handleClick.bind(this)} title="Help">?</button>
  );
}

export default HelpButton;