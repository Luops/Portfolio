// Bibliotecas
import React from 'react'
import { Link } from 'react-router-dom'

// Data
import {
    navBarOptions,
    socialIcons
} from '../../data/data'

const Header = () => {
  return (
    <header className='w-[100%] flex flex-row items-center justify-between px-10 py-[1.2em] text-white font-inder'>
        {/*Logo*/}
        <h3 className='font-mark text-3xl'>Luops</h3>
        {/*Navegação - ul + li*/}
        <ul className='flex flex-row gap-5'>
            {navBarOptions.map((Options) => (
                <li className='hover:text-amber-400 transition ease-in-out duration-300 opacity-70 text-center border-l first:border-none pl-4'>
                    <Link to="">{Options.text}</Link>
                </li>
            ))}
        </ul>
        {/*Icones de contato*/}
        <div className='flex gap-2'>
            {socialIcons.map((Social) => (
                <Link className='text-2xl opacity-70 hover:opacity-100 hover:last:text-[#0e76a8] transition ease-in-out duration-300' to={Social.URL} target="_blank">
                    {Social.icon}
                </Link>
            ))}
        </div>
    </header>
  )
}

export default Header