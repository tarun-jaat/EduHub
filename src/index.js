import React from "react";
// import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./Components/Common/Others/ScrollToTop";
import ReactDOM from "react-dom/client";

// import swDev from "./swDev";
import { AuthContextProvider } from "./Context/AuthContext.js";
import { ConversationContextProvider } from "./Context/ConsevationContextProvider.js";
import { SocketContextProvider } from "./Context/SocketContext.js";
const store= configureStore({
    reducer: rootReducer,
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
    <BrowserRouter>
    <ScrollToTop/>
    <AuthContextProvider>
        <ConversationContextProvider>
          <SocketContextProvider>
            <App />
          </SocketContextProvider>
        </ConversationContextProvider>
      </AuthContextProvider>
    <Toaster/>
    </BrowserRouter>
    </Provider>
);
// swDev();