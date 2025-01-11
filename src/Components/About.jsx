import React from 'react'
import './About.css'
import TypingEffect from 'react-typing-effect'


const About = () => {
    return (
        <div className='about'>
            <div className="hero-section">
                <div className="content-wrapper">
                    <div className="greeting-text">
                        <span className="hello-text">Hello!</span>
                        <div className="introduction">
                            I'm <span className="name">Vivek Singh</span>
                        </div>
                    </div>

                    <div className="typing-wrapper">
                        <TypingEffect
                            text={['Full stack developer', 'React enthusiast', 'Tech blogger']}
                            speed={100}
                            eraseSpeed={100}
                            eraseDelay={1200}
                            typingDelay={200}
                            cursorColor="#00ff88"
                            className="typewriter-text"
                        />
                    </div>

                    <div className="cta-section">
                        <a
                            href="https://drive.google.com/file/d/1IA3t4g_cx7NJ3P2B0QWAmOpEUZpcu1QV/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="resume-link"
                        >
                            <button className="resume-button">
                                <span className="button-text">View Resume</span>
                                <span className="button-icon">→</span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            <div className='image-container'>
                <div className="avatar">
                    <img src="profile1.png" style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '50%' }} />

                </div>
            </div>
        </div >
    )
}

export default About