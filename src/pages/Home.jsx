import AnimatePage from "../components/Animation/AnimatePage";

const Home = () => {
  return (
    <>
      <AnimatePage>
        <main className="space-y-4 text-justify mx-4 mb-4">
          <h3 className="font-semibold text-lg">Sobre Mí</h3>
          <p>
            Soy un joven profesional en el campo de la informática, actualmente cursando el séptimo trimestre de Ingeniería en Computación en la Universidad Valle del Momboy. 
          </p>
          <h3 className="font-semibold text-lg">Arco Profesional</h3>
          <p>
            Tengo experiencia en soporte técnico, atención al público y mantenimiento de hardware y software. 
          </p>
          <p>
            Poseo sólidos conocimientos en programación, diseño web y reparación de equipos de cómputo. Me destaco por mi capacidad de resolución de problemas, organización y adaptabilidad, así como por mi compromiso con la formación continua y el trabajo en equipo. 
          </p>
          <p>
            Busco constantemente oportunidades para aplicar y expandir mis habilidades en entornos desafiantes y dinámicos.
          </p>  
        </main>
      </AnimatePage>
    </>
  );
};

export default Home;
