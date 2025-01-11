import React from 'react'
import './Me.css'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';


const Me = () => {
    return (
        <div className='se'>
            <div className='Me'>

                <div className="avat">

                    <img src="about.jpg" alt="about me" className="cover" style={{ objectFit: 'cover', width: '60%', height: '60%', borderRadius: '50%' }} />
                </div>


            </div>
            <div className="ab">
                <h2>
                    Hi there! I'm Vivek, a passionate developer and innovator dedicated to building solutions that enhance user experiences. With expertise in React JS, I specialize in creating dynamic, responsive web applications that bring ideas to life.

                    My journey in technology is fueled by curiosity and a commitment to continuous learning. Whether it's crafting intuitive user interfaces or architecting efficient backend solutions, I enjoy taking on challenges that push my creativity and technical skills to the next level.
                    I believe that technology should simplify life, spark curiosity, and empower people. Every project I work on is an opportunity to create intuitive, scalable solutions that bridge the gap between complex problems and elegant designs.

                    When I'm not coding, you’ll find me exploring new tech trends, brainstorming innovative projects, or contributing to the developer community.

                    Let’s connect and create something amazing together!
                </h2>
                <hr>
                </hr>
                <div className="social-icons">
                    <h1 style={{ color: 'white', fontSize: '30px', fontFamily: 'arial' }}>Connect with me:</h1>
                    <a href="https://www.linkedin.com/in/vivek-singh-7b3a741b1/" target="_blank" rel="noopener noreferrer" classname="linkedin-icon">
                        <FaLinkedin style={{ fontSize: '2em', color: '#0077B5' }} />
                    </a>
                    <a href="https://github.com/Vivekscodes" target="_blank" rel="noopener noreferrer" className="github-icon">
                        <FaGithub style={{ fontSize: '2em', color: 'white' }} />
                    </a>
                    <a href="https://www.instagram.com/vivek_singhp20" target="_blank" rel="noopener noreferrer" className="instagram-icon">
                        <FaInstagram style={{ fontSize: '2em', color: '#E1306C' }} />
                    </a>
                </div>
            </div>

        </div >

    )
}

export default Me