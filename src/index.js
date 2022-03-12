import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { BrowserRouter } from "react-router-dom";
//---------------------------------//
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "font-awesome/css/font-awesome.css";
//---------------------------------//
import { createStore } from "redux";
import combined_reducers from "./Reducers/combined_reducers.js";
import combined_middleware from "./middlewares/combined_middleware";
import connect from "react-redux/lib/connect/connect";
import Provider from "react-redux/lib/components/Provider";
//----------------------------------//
const store = createStore(combined_reducers, combined_middleware);
//------------------------------------------------------------------//
const ConnectedApp = connect((state) => ({
  signed_in: state.signed_in,
  store
}))(App);
//------------------------------------------------------------------//
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
