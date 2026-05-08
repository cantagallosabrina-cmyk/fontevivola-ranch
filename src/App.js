import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Storia from "./pages/Storia";
import Scuola from "./pages/Scuola";
import Reining from "./pages/Reining";
import PonyClub from "./pages/PonyClub";
import Allevamento from "./pages/Allevamento";
import Pensione from "./pages/Pensione";
import ClubHouse from "./pages/ClubHouse";
import Contatti from "./pages/Contatti";
import News from "./pages/News";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/storia" element={<Storia />} />
        <Route path="/scuola" element={<Scuola />} />
        <Route path="/reining" element={<Reining />} />
        <Route path="/pony-club" element={<PonyClub />} />
        <Route path="/allevamento" element={<Allevamento />} />
        <Route path="/pensione" element={<Pensione />} />
        <Route path="/club-house" element={<ClubHouse />} />
        <Route path="/news" element={<News />} />
        <Route path="/contatti" element={<Contatti />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
