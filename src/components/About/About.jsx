import React from "react";

// Images
import imgPortfolio from '../../img/img-portfolio.png'

const About = () => {
  return (
    <section className="flex h-[100vh] items-center justify-center py-[2em] px-[3.5em] gap-[3em] border-[#ffffffa0] border-b-2">
      <div className="flex flex-col">
        {/*Texto sobre*/}
        <article className="flex flex-col font-rubik gap-4">
          <h3 className="text-base text-black opacity-50 drop-shadow-2xl">
            Olá, sou o
          </h3>
          <h3 className="text-5xl">Fabrício Lopes</h3>
          <p className="text-black opacity-50 text-base font-inder max-w-[550px] text-justify">
            Sou desenvolvedor Web, especializado em desenvolvimento front-end.
            Como desenvolvedor front-end junior, tenho experiência na criação de
            projetos utilizando Reactjs e tailwindCSS, e atualmente meu
            portfólio é composto apenas por projetos pessoais. Esses projetos
            demonstram minha capacidade de trabalhar de forma independente e
            criativa. 
          </p>
        </article>
        <button id='btn-contact' className="mt-10 self-start font-bold border border-cyan-400 rounded px-6 py-3 shadow-[0_0_5px_#00000062] bg-clip-text text-transparent bg-gradient-to-r from-black to-transparent hover:from-transparent hover:to-black hover:bg-gradient-to-l hover:bg-clip-text hover:scale-[1.01] transition-all ease-in-out duration-300">Entre em contato</button>
      </div>
      {/*Imagem do portfolio*/}
      <img className="max-w-[350px]" src={imgPortfolio} alt="Imagem do portfólio" />
    </section>
  );
};

export default About;
