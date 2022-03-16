import CalcHeader from "./CalcForm/CalcHeader";
import Container from "./CalcForm/Container";

const Error404 = () => {
  return (
    <Container id="err-msg">
      <h2 id="err-code">404</h2>
      <h3 id="err-desc">Page Not Found</h3>
    </Container>
  );
} 

export default Error404;