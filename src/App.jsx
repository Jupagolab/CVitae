import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="mx-auto text-center flex flex-col min-h-screen">
      <Router>
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<h1>About </h1>} />
            <Route path="/skills" element={<h1>Skills</h1>} />
            <Route path="/experience" element={<h1>Experience</h1>} />
            <Route path="/education" element={<h1>Education</h1>} />
            <Route path="/testimonials" element={<h1>Testimonials </h1>} />
            <Route path="/contact" element={<h1>Contact</h1>} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
