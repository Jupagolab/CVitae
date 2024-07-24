import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-custom-gradient p-4 text-white font-bold">
        <div className="space-x-4">
        <Link to={"/"}><h1 className="text-3xl lg:mb-4">Curriculum Vitae</h1></Link>
          <Link to="/about">Sobre Mí</Link>
          <Link to="/projects">Proyectos</Link>
          <Link to="/skills">Habilidades</Link>
          <Link to="/experience">Experiencia</Link>
          <Link to="/education">Educación</Link>
          <Link to="/testimonials">Testimonios</Link>
          <Link to="/contact">Contacto</Link>
        </div>
      </header>
    </>
  )
}

export default Header;