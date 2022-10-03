import React from "react";
import { ReactDOM } from "react-dom";
import App from "./App";
import { getUser } from "./actions/user.actions";
import { getPost } from "./actions/post.actions";
import rootReducer from "./reducers";
//Redux
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: rootReducer })

store.dispatch(getUser())
store.dispatch(getPost())

ReactDOM.render(
  <Provider store={store}>
    < App />
  </Provider>,
  document.getElementById("root")
)