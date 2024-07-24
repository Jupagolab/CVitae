import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AnimatePage from "./components/Animation/AnimatePage";

function App() {
  return (
    <div className="mx-auto text-center flex flex-col min-h-screen">
      <Router>
        <Header />
        <div className="flex-grow">
          <AnimatePage>
            <div className="flex justify-center items-center flex-col m-4 md:m-7 xl:m-9 gap-4">
              <img
                className="rounded-full w-24 transform transition-transform duration-300 hover:scale-125"
                src="./images/juan.jpg"
                alt="Foto de Juan González"
              />
              <h2 className="text-xl lg:text-2xl font-bold">
                Juan Pablo Gonzalez Labarca
              </h2>
            </div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<h1>About </h1>} />
              <Route path="/skills" element={<h1>Skills</h1>} />
              <Route path="/experience" element={<h1>Experience</h1>} />
              <Route path="/education" element={<h1>Education</h1>} />
              <Route path="/testimonials" element={<h1>Testimonials </h1>} />
              <Route path="/contact" element={<h1>Contact</h1>} />
            </Routes>
          </AnimatePage>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
