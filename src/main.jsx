import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BackendScanner } from "./components/BackendScanner";
import "./styles.css";
import "./js/main.js";
import "./js/navbar.js";

const mount = document.getElementById("backend-scanner-root");

if (mount) {
  createRoot(mount).render(
    <StrictMode>
      <BackendScanner />
    </StrictMode>
  );
}
