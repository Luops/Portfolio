import React, { useEffect, useState } from "react";
import axios from "axios";



// Images
import imgPortfolio from "../../img/img-portfolio.png";

// Icons
import {
  RiGitRepositoryFill,
  RiGitRepositoryCommitsFill,
} from "react-icons/ri";

const About = () => {
  const [repos, setRepos] = useState([]); // Dados dos repositórios
  const [commitCount, setCommitCount] = useState(0); // Contador de commits

  axios.defaults.headers.common['User-Agent'] = 'portfolio';

  // Integração com a API do Github
  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get(`https://api.github.com/users/Luops/repos`, {
          headers: {
            Authorization: `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`
          },
        })
        .then((response) => {
          setRepos(response.data);
        })
        .catch((error) => console.log(error));
    }, 60000); // 1 minuto
    return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
  }, []);

  // Contagem dos commits, enquanto houver repositórios
  useEffect(() => {
    async function countCommits() {
      let count = 0;
      for (let repo of repos) {
        try {
          const response = await axios.get(
            `https://api.github.com/repos/Luops/${repo.name}/commits`,
            {
              headers: {
                Authorization: `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`,
              },
            }
          );
          count += response.data.length;
        } catch (error) {
          console.log(error);
        }
      }
      setCommitCount(count);
    }
    // Definir intervalo de 1 minuto
    const interval = setInterval(countCommits, 60000);

    // Limpar intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, [repos]);

  console.log(repos);
  console.log(commitCount);

  return (
    <section className="flex h-[100vh] items-center justify-center py-[2em] px-[3.5em] gap-[3em] border-[#ffffffa0] border-b-2">
      <div className="flex flex-col gap-5">
        {/*Texto sobre*/}
        <article className="flex flex-col font-rubik gap-4">
          <h3 className="text-base text-black opacity-50 drop-shadow-2xl">
            Olá, sou o
          </h3>
          <h3 className="text-5xl drop-shadow-2xl">Fabrício Lopes</h3>
          <p className="text-black opacity-50 text-base font-inder max-w-[550px] text-justify">
            Sou desenvolvedor Web, especializado em desenvolvimento front-end.
            Como desenvolvedor front-end junior, tenho experiência na criação de
            projetos utilizando Reactjs e tailwindCSS, e atualmente meu
            portfólio é composto apenas por projetos pessoais. Esses projetos
            demonstram minha capacidade de trabalhar de forma independente e
            criativa.
          </p>
        </article>
        <ul className="flex gap-10 items-center justify-start">
          {/*Informação de repositórios*/}
          <li className="relative flex flex-col items-center justify-center h-[80px] text-center bg-[rgba(0,0,0,0.1)] border border-cyan-400 shadow-[0_0_5px_#0000003e] px-5 rounded-xl">
            <i className="absolute top-[-10px] right-[-10px] text-[#1F5063] text-5xl drop-shadow-2xl">
              <RiGitRepositoryFill />
            </i>
            <p className="font-rubik text-2xl text-black opacity-50 drop-shadow-2xl">
              {repos.length}
            </p>
            <p className="font-rubik text-base text-black opacity-50 drop-shadow-2xl">
              Repositórios
            </p>
          </li>
          <li className="relative flex flex-col items-center justify-center h-[80px] text-center bg-[rgba(0,0,0,0.1)] border border-cyan-400 shadow-[0_0_5px_#0000003e] px-5 rounded-xl">
            <i className="absolute top-[-10px] right-[-10px] text-[#1F5063] text-5xl drop-shadow-2xl">
              <RiGitRepositoryCommitsFill />
            </i>
            <p className="font-rubik text-2xl text-black opacity-50 drop-shadow-2xl">
              {commitCount}
            </p>
            <p className="font-rubik text-base text-black opacity-50 drop-shadow-2xl">
              Commits
            </p>
          </li>
        </ul>
        <button
          id="btn-contact"
          className="self-start font-bold border border-cyan-400 rounded px-6 py-3 shadow-[0_0_5px_#00000062] bg-clip-text text-transparent bg-gradient-to-r from-black to-transparent hover:from-transparent hover:to-black hover:bg-gradient-to-l hover:bg-clip-text hover:scale-[1.01] transition-all ease-in-out duration-300"
        >
          Entre em contato
        </button>
      </div>
      {/*Imagem do portfolio*/}
      <img
        className="max-w-[350px]"
        src={imgPortfolio}
        alt="Imagem do portfólio"
      />
    </section>
  );
};

export default About;
