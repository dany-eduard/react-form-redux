import React from "react";
import { Container } from "react-bootstrap";
import TablaReports from "./components/TablaReports";
import { Provider } from "react-redux";
import generateStore from "./redux/store";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Container>
      <Provider store={generateStore()}>
        <Layout />
      </Provider>
    </Container>
  );
}

export default App;
