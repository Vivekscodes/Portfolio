import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Me from './Components/Me';
import ContactMe from './Components/ContactMe';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const appRef = useRef(null);

  useEffect(() => {
    // Register GSAP ScrollToPlugin
    gsap.registerPlugin(ScrollToPlugin);



    const handleScroll = () => {
      const sections = ['home', 'Projects', 'Skills', 'Contact'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar

      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            if (activeSection !== sectionId) {
              setActiveSection(sectionId);
            }
          }
        }
      });
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);

    // Initial check for active section
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  // Handle navigation from navbar
  const handleNavigation = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    // Update active section
    setActiveSection(sectionId);

    // Smooth scroll to section
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: element,
        offsetY: 80 // Account for navbar height
      },
      ease: "power2.inOut"
    });

    // Add entrance animation to the target section
    gsap.fromTo(element,
      { opacity: 0.7, scale: 0.98 },
      { opacity: 1, scale: 1, duration: 0.5, delay: 0.3 }
    );
  };

  return (
    <div className="App" ref={appRef}>
      <Navbar activeSection={activeSection} onNavigate={handleNavigation} />

      <main>
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
        </section>
      </main>
    </div>
  );
};

export default App;