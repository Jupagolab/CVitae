import { Link } from "react-router-dom";
import Nav from './Nav';
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";

const Header = () => {
  const [mostrarMenu, setMostrarMenu] = useState(false);

  const menuToggle = () => {
    setMostrarMenu(!mostrarMenu);
  }


  return (
    <>
      <header className="flex lg:flex-col items-center justify-center lg:gap-1 gap-4 bg-custom-gradient p-4 text-white font-bold">
        <div className="text-center">
          {mostrarMenu ? (
            <>
            <IoIosClose className="text-white text-2xl lg:hidden transition-transform 0.5 transform" onClick={menuToggle}/>
            </>
          ) : (
            <IoMenu className="text-white text-2xl lg:hidden transform" onClick={menuToggle}/>
          )}
        </div>
        <Link to={"/"}><h1 className="mx-auto text-3xl lg: lg:mb-4">Curriculum Vitae</h1></Link>
        <div className="hidden lg:flex lg:justify-center">
          <Nav />
        </div>
      </header>
      {mostrarMenu && (
      <div className="bg-custom-gradient h-screen z-50">
        <Nav 
          setMostrarMenu={setMostrarMenu}
        />
      </div>
      )}
    </>
  )
}

export default Header;