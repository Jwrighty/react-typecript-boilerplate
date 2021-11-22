import React from "react";
import ReactDOM from "react-dom";

import styled from 'styled-components';

const Header = styled.h1``;

const App = () => (
  <Header>My React and TypeScript App!</Header>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);