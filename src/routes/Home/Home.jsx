import React from 'react'

// Components
import About from '../../components/About/About'
import Projects from '../../components/Projects/Projects'

const Home = () => {
  return (
    <main className='w-[100%] flex flex-col text-white font-inder px-[3.5em]'>
      <About />
      <Projects />
    </main>
  )
}

export default Home