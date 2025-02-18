import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import HeroSection from "../src/components/HeroSection";
import Projects from "../src/components/Projects";
import SkillsSection from "../src/components/Skills";
import Experience from "../src/components/Experience";
import Contact from "../src/components/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<SkillsSection />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer>
          <p>&copy; 2025 Udhav Agarwal. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
