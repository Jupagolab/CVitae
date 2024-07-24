import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-custom-gradient p-4 text-white font-bold">
        <Link to={"/"}><h1 className="text-3xl lg: lg:mb-4">Curriculum Vitae</h1></Link>
        <div className="space-x-4 lg:space-x-8">
          <Link className='border-b-2 border-b-transparent hover:text-blue-200 hover:border-b-white py-2' to="/">Sobre Mí</Link>
          <Link className='border-b-2 border-b-transparent hover:text-blue-200 hover:border-b-white py-2' to="/skills">Habilidades</Link>
          <Link className='border-b-2 border-b-transparent hover:text-blue-200 hover:border-b-white py-2' to="/experience">Experiencia</Link>
          <Link className='border-b-2 border-b-transparent hover:text-blue-200 hover:border-b-white py-2' to="/education">Educación</Link>
          <Link className='border-b-2 border-b-transparent hover:text-blue-200 hover:border-b-white py-2' to="/testimonials">Testimonios</Link>
          <Link className='border-b-2 border-b-transparent hover:text-blue-200 hover:border-b-white py-2' to="/contact">Contacto</Link>
        </div>
      </header>
    </>
  )
}

export default Header;