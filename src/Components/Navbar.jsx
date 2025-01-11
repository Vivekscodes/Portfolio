import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('home');

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        setActiveLink(sectionId);
        element.scrollIntoView({ behavior: 'smooth' });
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
                    >
                        Home
                    </a>
                    <a
                        onClick={() => scrollToSection('Projects')}
                        className={activeLink === 'Projects' ? 'active' : ''}
                    >
                        Projects
                    </a>
                    <a
                        onClick={() => scrollToSection('Skills')}
                        className={activeLink === 'Skills' ? 'active' : ''}
                    >
                        Skills
                    </a>
                    <a
                        onClick={() => scrollToSection('Contact')}
                        className={activeLink === 'Contact' ? 'active' : ''}
                    >
                        Contact
                    </a>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;