import React from 'react'
import './Projects.css'
const Projects = () => {
    return (
        <div className='projects'>
            <h2 style={{ textAlign: 'center', color: 'white', fontSize: '50px' }}>Projects</h2>
            <div className="cards">
                <div className="card">
                    <div className="avatar1">
                        <img src="agent.jpeg" alt="cover" className="cover" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                    </div>
                    <div className="card_content">
                        <h3>Stella</h3>
                        <p>An AI research assistant which helps you to deep research on any topic.</p>
                    </div>
                    <button className='btn' onClick={() => window.open("https://github.com/Vivekscodes/stella")}>Click to visit</button>
                </div>
                <div className="card">
                    <div className="avatar1">
                        <img src="git agent.jpg" alt="cover" className="cover" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                    </div>
                    <div className="card_content">
                        <h3>Git Fixer</h3>
                        <p>An automated CLI tool which can increase your git commits automatically.</p>
                    </div>
                    <button className='btn' onClick={() => window.open("")}>Click to visit</button>
                </div>
                <div className="card">
                    <div className="avatar1">
                        <img src="cover.webp" alt="cover" className="cover" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                    </div>
                    <div className="card_content">
                        <h3>AI Summarizer</h3>
                        <p>It is bascially a chrome extension. You can use it to summarize any text you want.Do check it out.</p>

                    </div>
                    <button className='btn' onClick={() => window.open("https://chromewebstore.google.com/detail/ai-summarizerbrief-summar/moliplaihkifalepbaflhgpjacfhpcfe")}>Click to visit</button>
                </div>
                <div className="card">
                    <div className="avatar1">
                        <img src="compilex.png" alt="cover" className="cover" style={{ objectFit: 'cover', width: '100%', height: '120%' }} />
                    </div>
                    <div className="card_content">
                        <h3>CompileX</h3>
                        <p>It is an online code editor with feautres like code sharing AI code completion and many more</p>
                    </div>
                    <button className='btn' onClick={() => window.open("https://github.com/Vivekscodes/CompileX")}>Click to visit</button>
                </div>
                <div className="card">
                    <div className="avatar1">
                        <img src="Xamin.png" alt="cover" className="cover" style={{ objectFit: 'cover', width: '100%', height: '120%' }} />
                    </div>
                    <div className="card_content">
                        <h3>Xamin</h3>
                        <p>It is an online Platform developed to reduce the risk of Paper leaks.</p>
                    </div>
                    <button className='btn' onClick={() => window.open("https://github.com/Vivekscodes/Xamin")}>Click to visit</button>
                </div>
                <div className="card">
                    <div className="avatar1">
                        <img src="deliv.png" alt="cover" className="cover" style={{ objectFit: 'cover', width: '100%', height: '120%' }} />
                    </div>
                    <div className="card_content">
                        <h3>Food Delivery Website</h3>
                        <p>It is a MERN stack based Project named it as TOMATO.User can add and remove items.</p>
                    </div>
                    <button className='btn' onClick={() => window.open("https://github.com/Vivekscodes/CompileX")}>Click to visit</button>
                </div>
                <div className="card">
                    <div className="avatar1">
                        <img src="url.jpg" alt="cover" className="cover" style={{ objectFit: 'cover', width: '100%', height: '120%' }} />
                    </div>
                    <div className="card_content">
                        <h3>URL Shortener</h3>
                        <p>It is a NodeJs based project where you can shorten your long urls.</p>
                    </div>
                    <button className='btn' onClick={() => window.open("https://github.com/Vivekscodes/URL-Shortener")}>Click to visit</button>
                </div>


                <div className="card">
                    <div className="avatar1">
                        <img src="gemi.jpeg" alt="cover" className="cover" style={{ objectFit: 'cover', width: '100%', height: '120%' }} />
                    </div>
                    <div className="card_content">
                        <h3>Gemini Clone</h3>
                        <p>It is a React JS based Project Just tried to clone the Google gemini.</p>
                    </div>
                    <button className='btn' onClick={() => window.open("https://github.com/Vivekscodes/Gemini-Clone")}>Click to visit</button>
                </div>
                <div className="card">
                    <div className="avatar1">
                        <img src="text.jpg" alt="cover" className="cover" style={{ objectFit: 'cover', width: '100%', height: '120%' }} />
                    </div>
                    <div className="card_content">
                        <h3>Text to Speech converter</h3>
                        <p>It is a Python based project where you can convert your text to speech.</p>
                    </div>
                    <button className='btn' onClick={() => window.open("https://github.com/Vivekscodes/Text-to-Speech")}>Click to visit</button>
                </div>
                <p style={{ textAlign: 'center', color: 'white', fontSize: '20px' }}>Many more to go...</p>
            </div>


        </div>
    )
}

export default Projects