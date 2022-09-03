import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "components/layout/Menu";
import TopNav from "components/layout/TopNav";
import AppRoutes from "routes/Routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="min-vh-100 bg-light">
        <TopNav />
        <Menu />
        <div className="ms-5 ps-4  me-4 ">
          <AppRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
