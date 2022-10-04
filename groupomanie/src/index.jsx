import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import { getUser } from "./actions/user.actions";
// import { getPosts } from "./actions/post.actions";
// import rootReducer from "./reducers";
//Redux
// import { Provider } from "react-redux";
// import { configureStore } from "@reduxjs/toolkit";

// const store = configureStore({ reducer: rootReducer })

// store.dispatch(getUser())
// store.dispatch(getPosts())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < App />
  </React.StrictMode>
)