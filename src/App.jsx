import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import MarufCalendar from "./components/MarufCalendar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Calendar" element={<MarufCalendar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
