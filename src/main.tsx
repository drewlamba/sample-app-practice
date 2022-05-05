import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import UserDetails from "./components/UserDetails";
import Form from "./components/Form";

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Form/> */}

    {/* <UserDetails/> */}
  </React.StrictMode>,
  document.getElementById("root")
);
