import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import initialState from "./store/inititalState";

const store = createStore(rootReducer, initialState);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
