//import React from "react";
import Registration from "./components/Registration";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Registration />} path="/reg" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

