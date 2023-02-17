import React, { useState, useEffect } from "react";

// Data
import { projects } from "../../data/data";

// Components
import Slide from "./Slide/Slide";
import ProjectDetails from "./ProjectDetails/ProjectDetails";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  //Observar após a página ser atualizado. Retornar sempre o primeiro projeto
  useEffect(() => {
    if (!selectedProject) {
      setSelectedProject(projects[0]);
    }
  }, [selectedProject, projects]);

  console.log(selectedProject);

  return (
    <section className="w-[100%] flex flex-col items-center justify-center py-[3em] border-[#ffffffa0] border-b-2">
      <h2 className="pl-[3.5em] self-start font-rubik text-2xl text-[#1F5063] drop-shadow-2xl">
        Meus Projetos
      </h2>
      <div className="w-[100%] flex flex-col items-center justify-center py-[2em]">
        <div className="w-100 flex items-center justify-center">
          {/* Componente de detalhes do projeto*/}
          {selectedProject && (
            <ProjectDetails selectedProject={selectedProject} className="" />
          )}
        </div>
        {/*Swiper slide para as opções de projetos*/}
        <Slide setSelectedProject={setSelectedProject} />
      </div>
    </section>
  );
};

export default Projects;
