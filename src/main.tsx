import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import { BrowserRouter } from "react-router-dom";
/* import { Button, ConfigProvider, Space } from "antd";
import { config_theme } from "./antframework/ConfigTheme.tsx"; */
import { store } from "./store/store.tsx";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

/* ReactDOM.createRoot(document.getElementById("root")!).render */ 
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <BrowserRouter> */}
      <App />
      {/* </BrowserRouter> */}
    </Provider>
  </React.StrictMode>
);

/* root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
) */
