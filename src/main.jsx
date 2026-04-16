import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppProvider>
      <App />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            borderRadius: "9999px",
            background: "#1f6a54",
            color: "#fff",
          },
        }}
      />
    </AppProvider>
  </BrowserRouter>,
);
