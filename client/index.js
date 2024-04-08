import React from "react";
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import store from "./src/redux/store";
import App from "./src/app";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"))


root.render(
    <Provider store={store}>
        <App />
    </Provider>
)