import { Link } from "react-router-dom";

const Nav = ({ setMostrarMenu }) => {
  return (
    <div className="flex flex-col lg:flex-row text-white lg:space-x-8">
      <Link
        className="border-b-2 border-b-transparent hover:text-blue-200 hover:border-b-white py-2"
        to="/"
        onClick={() => setMostrarMenu(false)}
      >
        Sobre Mí
      </Link>
      <Link
        className="border-b-2 border-b-transparent hover:text-blue-200 hover:border-b-white py-2"
        to="/skills"
        onClick={() => setMostrarMenu(false)}
      >
        Habilidades
      </Link>
      <Link
        className="border-b-2 border-b-transparent hover:text-blue-200 hover:border-b-white py-2"
        to="/experience"
        onClick={() => setMostrarMenu(false)}
      >
        Experiencia
      </Link>
      <Link
        className="border-b-2 border-b-transparent hover:text-blue-200 hover:border-b-white py-2"
        to="/education"
        onClick={() => setMostrarMenu(false)}
      >
        Educación
      </Link>
      <Link
        className="border-b-2 border-b-transparent hover:text-blue-200 hover:border-b-white py-2"
        to="/testimonials"
        onClick={() => setMostrarMenu(false)}
      >
        Testimonios
      </Link>
      <Link
        className="border-b-2 border-b-transparent hover:text-blue-200 hover:border-b-white py-2"
        to="/contact"
        onClick={() => setMostrarMenu(false)}
      >
        Contacto
      </Link>
    </div>
  );
};

export default Nav;
