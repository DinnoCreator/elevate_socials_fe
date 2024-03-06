import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Insta from "./pages/Insta";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/insta" element={<Insta />} />
      </Routes>
    </Router>
  );
}

export default App;
