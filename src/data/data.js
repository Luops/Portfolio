// Icons
import { FaLinkedin, FaGithubSquare, FaReact, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiFirebase } from "react-icons/si"

// Images
import CloneGremio from '../img/gremio_clone_screen.PNG'
import CatalogoOnline from '../img/catalogo_online_screen.PNG'
import LogoGremio from '../img/gremio-logo-escudo.png'
import LogoLider from '../img/logo_lider_madeiras.jpg'

export const navBarOptions = [
  {
    id: 1,
    text: "About",
    ref: "about",
  },
  {
    id: 2,
    text: "Projects",
    ref: "projects",
  },
  {
    id: 3,
    text: "Languages",
    ref: "languages",
  },
  {
    id: 4,
    text: "Contact",
    ref: "contact",
  },
];

export const socialIcons = [
  {
    id: 1,
    title: "Github",
    icon: <FaGithubSquare />,
    URL: "https://github.com/Luops",
  },
  {
    id: 2,
    title: "LinkedIn",
    icon: <FaLinkedin />,
    URL: "https://www.linkedin.com/in/fabricio-lopes-b0291a204/",
  },
];

export const about = [
  {
    id: 1,
    text: "Sou desenvolvedor Web, especializado em desenvolvimento front-end. Como desenvolvedor front - end junior, tenho experiência na criação de projetos utilizando Reactjs e tailwindCSS, e atualmente meu portfólio é composto apenas por projetos pessoais.Esses projetos demonstram minha capacidade de trabalhar de forma independente e criativa.",
  },
];

export const projects = [
  {
    id: 1,
    title: "Grêmio Clone",
    description: "Este projeto basea-se no site oficial do Grêmio, que é o time do meu coração. O layout do projeto é completamente responsivo, de mobile à computadores de tela grande. Como estou em processo de aperfeiçoamento nas minhas habilidades de front-end, utilizei React e TailwindCSS para criar o site. Para fazer o deploy, utilizei o Firebase Hosting e fiz o build com a biblioteca do node.",
    gitHubURL: "https://github.com/Luops/Website-Gremio-Clone",
    webSiteURL: "https://gremioclone-307b9.web.app/",
    used: [
      {
        id: 1,
        name: "Firebase",
        icon: <SiFirebase/>,
      },
      {
        id: 2,
        name: "React",
        icon: <FaReact/>,
      },
      {
        id: 3,
        name: "TailwindCSS",
        icon: <SiTailwindcss/>,
      },
    ],
    logo: LogoGremio,
    imageDetails: CloneGremio,
  },
  {
    id: 2,
    title: "Catálogo online",
    description: "Fui solicitado para criar um site que catalogue produtos de uma madeireira, sem a necessidade de haver vendas online. Este projeto foi criado no início dos meus estudo em React, por este motivo que o mesmo não é muito atrativo com o design. Neste site há um sistema de login para que a pessoa cadastre, edite ou exclua o produto do sistema. Ele é completamente responsivo, tanto para um usuário comum ou admin. Como estou em processo de aperfeiçoamento nas minhas habilidades de front-end, utilizei React e CSS puro para criar o site. Além do front-end, criei as funcionalidades do back-end com Firestore da Firebase e hooks do React. Para fazer o deploy, utilizei o Firebase Hosting e fiz o build com a biblioteca do node. ",
    gitHubURL: "https://github.com/Luops/WebSite_ReactFirebase_Lider-Madeiras",
    webSiteURL: "https://lidermadeirasgravatai.com.br/",
    used: [
      {
        id: 1,
        name: "Firebase",
        icon: <SiFirebase/>,
      },
      {
        id: 2,
        name: "React",
        icon: <FaReact/>,
      },
      {
        id: 3,
        name: "CSS",
        icon: <FaCss3Alt/>,
      },
    ],
    logo: LogoLider,
    imageDetails: CatalogoOnline,
  },
];
