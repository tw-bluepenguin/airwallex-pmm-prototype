import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import AirwallexPMMPrototype from "./prototype";
import MockAssets from "./mockAssets";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AirwallexPMMPrototype />} />
      <Route path="/mock-assets" element={<MockAssets />} />
    </Routes>
  </BrowserRouter>
);
