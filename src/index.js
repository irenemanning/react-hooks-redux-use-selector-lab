import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./store"
// import usersReducer from "./features/users/usersSlice";
import { Provider } from "react-redux";

// add imports and code
ReactDOM.render(
  <Provider store={store}>
     <App />
  </Provider>,
  // add imports and code
  document.getElementById("root")
);
