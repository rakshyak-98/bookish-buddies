import React from "react";
import ReactDOM from "react-dom/client";
import ErrorBoundary from "./components/ErrorBoundary"
import App from "./App.jsx";
import { BrowserRouter } from "../node_modules/react-router-dom/dist/index.js";
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';
import {Provider} from "react-redux"
import {store} from "./redux/store"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ErrorBoundary>
            <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
            </BrowserRouter>
        </ErrorBoundary>
    </React.StrictMode>
);
