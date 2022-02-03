import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/Header/Header";
import DataFetch from "./components/DataFetch/DataFetch";
ReactDOM.render(
  <React.StrictMode>
    <Header />
    <DataFetch />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
