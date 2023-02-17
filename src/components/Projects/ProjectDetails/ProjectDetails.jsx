// Bibliotecas
import React from "react";
import { Link } from "react-router-dom";

// Icons
import {
  FaGithubSquare
} from 'react-icons/fa'
import {
  CgWebsite
} from 'react-icons/cg'

const ProjectDetails = ({ selectedProject }) => {
  return (
    <article className="relative h-[350px] flex flex-row pr-10 items-center justify-center gap-10 bg-[rgba(0,0,0,0.1)] border border-cyan-400 shadow-[0_0_5px_#0000003e]">
      {/*Imagem do projeto*/}
      <div className="relative h-[100%] w-[600px]">
        <img
          id="img"
          src={selectedProject.imageDetails}
          alt={selectedProject.title}
          className="absolute top-0 left-0 w-full h-full border border-[rgba(0,0,0,0.3)] shadow-[0_0_5px_#0000003e]"
        />
      </div>
      {/*Dados do projeto*/}
      <div id="teste" className="h-full flex flex-col justify-between py-3 gap-2 ">
        <div className="flex flex-col gap-2">
          <h3 className="font-mont font-bold drop-shadow">
            {selectedProject.title}
          </h3>
          <p className="max-w-[350px] drop-shadow text-[0.80em] text-justify opacity-80">
            {selectedProject.description}
          </p>
        </div>
        {/*Icones + Links*/}
        <div className="flex gap-3 self-center items-center">
          <>
            {selectedProject.used.map((Used) => (
              <i
                className={`cursor-pointer text-[40px] drop-shadow ${
                  Used.name === "Firebase" ? "text-[#FFCC2F]" : "text-white"
                } ${Used.name === "React" ? "text-[#61DBFB]" : "text-white"} ${
                  Used.name === "TailwindCSS" ? "text-[#38BDF8]" : "text-white"
                } ${Used.name === "CSS" ? "text-[#264de4]" : "text-white"} `}
              >
                {Used.icon}
              </i>
            ))}
            <Link className="text-[#333] p-0 drop-shadow text-[40px]" to={selectedProject.gitHubURL} target="_blank">
              <FaGithubSquare />
            </Link>
            <Link className="relative text-[#333] p-0 drop-shadow text-[40px]" to={selectedProject.webSiteURL} target="_blank">
              <CgWebsite />
              <h4 className="absolute bottom-[-2px] left-2 text-sm text-white drop-shadow">Site</h4>
            </Link>
          </>
        </div>
      </div>
    </article>
  );
};

export default ProjectDetails;
