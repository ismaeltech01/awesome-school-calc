import React from "react";
import { Container } from "..";

export default function Results({submit, children}) {

  return(
    <Container id="results" altId={submit ? 'submit' : 'no-submit'}>
      {children}
    </Container>
  );
}