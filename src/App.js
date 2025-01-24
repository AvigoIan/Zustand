import "./App.css";
import { Header, Form, Footer, List } from "./components";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 40%;
  margin: 0 auto;
  background: #ecf0f1;
  border-radius: 4px;
`;

const App = () => {
  return (
    <Container>
      <Header title={"Todos"} />
      <Form />
      <List />
      <Footer />
    </Container>
  );
};

export default App;
