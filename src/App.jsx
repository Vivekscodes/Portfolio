import React from 'react'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Me from './Components/Me'
import ContactMe from './Components/ContactMe'
import Thanku from './Components/Thanku'
const App = () => {
  return (
    <div className="App">

      <Navbar />

      <section id="home">

        <About />
      </section>

      <section id="Projects">

        <Projects />
      </section>

      <section id="Skills">

        <Skills />
      </section>
      <Me />

      <section id="Contact">

        <ContactMe />
        <Thanku />
      </section>
    </div>
  )
}

export default App