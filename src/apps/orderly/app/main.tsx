import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Orderly";
import "./index.css";
import "../../../app.css";
import { AuthProvider } from "@COMPONENTS/firebase/AuthContext";

if (!localStorage.getItem("initID")) {
  localStorage.setItem("initID", Date.now().toString());
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
