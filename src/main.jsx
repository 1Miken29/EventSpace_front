import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { UserProvider } from "./hooks/UserContext.jsx";
import { AppRouter } from "./routes/AppRouter.jsx";
import { SalonProvider } from "./hooks/SalonContext.jsx";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <SalonProvider>
          <AppRouter />
        </SalonProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
