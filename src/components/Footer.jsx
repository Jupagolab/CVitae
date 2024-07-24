import React from 'react';

function Footer() {
  return (
    <footer className="bg-custom-gradient text-white p-4 text-center">
      <p>&copy; {new Date().getFullYear()} Mi Curriculum Vitae. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;