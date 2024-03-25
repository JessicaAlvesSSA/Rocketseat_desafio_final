import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DishProvider from "./context/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DishProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </DishProvider>,
);
