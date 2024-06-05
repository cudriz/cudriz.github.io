import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./views/home/Home";
import Favoritos from "./views/favoritos/Favoritos";

import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Footer />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/favoritos" element={<Favoritos />} />
      </Routes>
    </div>
  );
}

export default App;
