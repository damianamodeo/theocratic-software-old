import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Proclaimer";
import "./index.css";

if (!localStorage.getItem("initID")) {
  localStorage.setItem("initID", Date.now().toString());
}
if (localStorage.getItem("usehooks-ts-ternary-dark-mode")) {
}

const light = document.querySelector("#light-theme");
if (localStorage.getItem("usehooks-ts-ternary-dark-mode") === '"dark"') {
  light?.setAttribute("content", import.meta.env.VITE_APP_THEME_COLOR_DARK);
}

const dark = document.querySelector("#dark-theme");
if (localStorage.getItem("usehooks-ts-ternary-dark-mode") === '"light"') {
  dark?.setAttribute("content", import.meta.env.VITE_APP_THEME_COLOR_LIGHT);
}

window.addEventListener("load", function () {
  window.history.pushState({}, "");
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
