import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "flowbite";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "./stores/store";
import { BrowserRouter as Router } from "react-router-dom";
import CheckUser from "./CheckRoutes/CheckUser";
import { socket, SocketContext } from "./contexts/socket";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CheckUser>
        <Router>
          <SocketContext.Provider value={socket}>
            <App />
          </SocketContext.Provider>
        </Router>
      </CheckUser>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
