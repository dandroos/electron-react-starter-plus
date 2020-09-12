import React from "react";
import ReactDOM from "react-dom";
import "typeface-roboto";
import App from "./App";
import { Provider } from "react-redux";
import store from "./state/store";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
