import React, { useState, useEffect } from 'react';
import barba from '@barba/core';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import './Navbar.css';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('home');

    // Register ScrollToPlugin
    useEffect(() => {
        // Register the ScrollToPlugin with GSAP
        if (gsap.registerPlugin) {
            gsap.registerPlugin(ScrollToPlugin);
        }
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (!element) return;

        // Update active link
        setActiveLink(sectionId);

        // Scroll to the section for better UX
        element.scrollIntoView({ behavior: 'smooth' });

        try {
            // Use Barba.js to handle the transition if available
            if (barba && barba.go) {
                barba.go(`#${sectionId}`, {
                    trigger: 'barba'
                });
            }

            // Add animation with GSAP if ScrollToPlugin is registered
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: `#${sectionId}`,
                    offsetY: 0
                }
            });
        } catch (error) {
            console.error("Error during navigation:", error);
            // Fallback to basic scrolling if there's an error
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className='navbar'>

            <div className="logo">
                <img src="logo.png" alt="logo" />
            </div>

            <div className="right">
                <ul className="list">
                    <a
                        onClick={() => scrollToSection('home')}
                        className={activeLink === 'home' ? 'active' : ''}
                        data-barba-trigger="barba"
                    >
                        Home
                    </a>
                    <a
                        onClick={() => scrollToSection('Projects')}
                        className={activeLink === 'Projects' ? 'active' : ''}
                        data-barba-trigger="barba"
                    >
                        Projects
                    </a>
                    <a
                        onClick={() => scrollToSection('Skills')}
                        className={activeLink === 'Skills' ? 'active' : ''}
                        data-barba-trigger="barba"
                    >
                        Skills
                    </a>
                    <a
                        onClick={() => scrollToSection('Contact')}
                        className={activeLink === 'Contact' ? 'active' : ''}
                        data-barba-trigger="barba"
                    >
                        Contact
                    </a>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
