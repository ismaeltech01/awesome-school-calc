import React from "react";
import { NavLink } from "react-router-dom";

const CalcHeader = ({txt, navTo}) => {
  return(
    <div className="calc-header">
      <NavLink className='calc-back-btn' to={navTo}>Back</NavLink>
      <h2 className="calc-h-txt">{txt}</h2>
    </div>
  );
}

export default CalcHeader;