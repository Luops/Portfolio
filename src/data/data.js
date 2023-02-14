// Icons
import {
    FaLinkedin,
    FaGithubSquare
} from 'react-icons/fa'

export const navBarOptions = [
    {id: 1, text: "About", ref: "about"},
    {id: 2, text: "Projects", ref: "projects"},
    {id: 3, text: "Languages", ref: "languages"},
    {id: 4, text: "Contact", ref: "contact"}
]

export const socialIcons = [
    {id: 1, title: "Github", icon: <FaGithubSquare/>, URL: "https://github.com/Luops"},
    {id: 2, title: "LinkedIn", icon: <FaLinkedin/>, URL: "https://www.linkedin.com/in/fabricio-lopes-b0291a204/"},
]

export const projects = [
    {id: 1, 
    title: "Clone do site do Grêmio", 
    description: "teste 1", 
    used: [
        {id: 1, name: "Firebase", icon: ""},
    ], 
    image: ""},
    {id: 2, 
    title: "Site de catálogos online", 
    description: "teste 2", 
    used: [
        {id: 1, name: "Firebase", icon: ""},
    ], 
    image: ""},
]