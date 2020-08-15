import React from "react";
import ListStudent from "./components/ListStudent";
import { Container } from "@material-ui/core";
import NavBar from "./reutilisable/NavBar";
import { Row, Col } from "react-materialize";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <NavBar />
        </Row>
        <Row>
          <Col l={2} />
          <Col></Col>
        </Row>
        <Row>
          <ListStudent />
        </Row>
      </Container>
    </div>
  );
}

export default App;
