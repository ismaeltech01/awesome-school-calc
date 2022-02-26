import React from "react";

const Notice = ({submit, children}) => {
  return(
    <h3 id="notice">
      <em>
        {children}
      </em>
    </h3>
  );
}

export default Notice;