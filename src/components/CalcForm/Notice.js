import React from "react";

const Notice = ({submit, children}) => {
  return(
    <Container name="results" altName={submit ? 'submit' : 'no-submit'}>
      {children}
    </Container>
  );
}

export default Notice;