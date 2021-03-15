import React from "react";
import { Container } from "react-bootstrap";
/* import "bootstrap/dist/css/bootstrap.min.css"; */
import TablaReports from "./components/TablaReports";
import { Provider } from "react-redux";
import generateStore from "./redux/store";

function App() {
  return (
    <Container>
      <Provider store={generateStore()}>
        <TablaReports />
      </Provider>
    </Container>
  );
}

export default App;
