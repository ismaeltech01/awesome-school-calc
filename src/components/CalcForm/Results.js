import React from "react";
import { Container } from "..";

export default function Results({submit, children}) {
  return(
    <Container name="results" altName={submit ? 'submit' : 'no-submit'}>
      {children}
    </Container>
  );
}