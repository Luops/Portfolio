// Bibliotecas
import React, {useState} from 'react'
import { Link } from 'react-router-dom'

// Data
import {
    navBarOptions,
    socialIcons
} from '../../data/data'

const Header = () => {
    const [navBar, setNavBar] = useState(false)

    // State para o header ao descer
    const changeBackground = () => {
        if(window.scrollY >= 30) {
        setNavBar(true) 
        } else {
        setNavBar(false)
        }
    }
    window.addEventListener('scroll', changeBackground)


  return (
    <header className={`w-[100%] ${navBar ? 'fixed' : 'absolute'} ${navBar ? 'z-10' : ''} top-0 flex flex-row items-center justify-between px-10 py-[1.2em] text-white font-inder`}>
        {/*Logo*/}
        <h3 className='font-mark text-3xl'>Luops</h3>
        {/*Navegação - ul + li*/}
        <ul className='flex flex-row gap-5'>
            {navBarOptions.map((Options) => (
                <li className='hover:text-black transition ease-in-out duration-300 text-center border-l first:border-none pl-4'>
                    <Link to="">{Options.id}. {Options.text}</Link>
                </li>
            ))}
        </ul>
        {/*Icones de contato*/}
        <div className='flex gap-2'>
            {socialIcons.map((Social) => (
                <Link className='text-2xl hover:last:text-[#0e76a8] hover:first:text-[#333] transition ease-in-out duration-300' to={Social.URL} target="_blank">
                    {Social.icon}
                </Link>
            ))}
        </div>
    </header>
  )
}

export default Header