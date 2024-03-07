import { useState } from "react";
import Selector from "./components/Selector/Selector";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Schedule from "./components/Schedule/Schedule";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Selector />} />
        <Route path="/schedule/:sid" element={<Schedule />} />
      </Routes>
    </>
  );
}

export default App;
