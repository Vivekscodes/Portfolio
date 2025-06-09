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
                            cursorcolor="#00ff88"
                            className="typewriter-text"
                        />
                    </div>

                    <div className="cta-section">
                        <a
                            href="https://drive.google.com/file/d/10Y2jlBo4jyEcFhs9znIH_r9Kjk6uht2z/view?usp=sharing"
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
                <div className="avatar-border">
                    <div className="avatar-glow"></div>
                    <img
                        src="me.jpg"
                        alt="Vivek Singh"
                        className="avatar-image"
                    />

                </div>
            </div>
        </div>
    )
}

export default About