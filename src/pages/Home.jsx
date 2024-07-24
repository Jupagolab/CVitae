import React from "react";
import AnimatePage from "../components/Animation/AnimatePage";

const Home = () => {
  return (
    <>
      <AnimatePage>
      <main>
        <div className="flex justify-center items-center flex-col m-4 md:m-7 xl:m-9 gap-4">
          <img
            className="rounded-full w-24 transform transition-transform duration-300 hover:scale-125"
            src="./images/juan.jpg"
            alt="Foto de Juan González"
          />
          <h2 className="text-xl font-bold">Juan Pablo Gonzalez Labarca</h2>
        </div>
      </main>
      </AnimatePage>
    </>
  );
};

export default Home;
