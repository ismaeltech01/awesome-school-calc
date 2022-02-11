import React, { useContext } from "react";
import { ThemeContext } from "../themeContext";

const HelpButton = (props) => {
  const {itemName, msg} = props;
  const {theme} = useContext(ThemeContext);

  const handleClick = (e) => {
    alert(msg);
  }

  return(
    <button type="button" id="help-btn" className={theme} name={`${itemName}-hp`} onClick={handleClick.bind(this)} title="Help">?</button>
  );
}

export default HelpButton;