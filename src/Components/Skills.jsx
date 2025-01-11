import React from 'react'
import './Skills.css'

const Skills = () => {
    return (
        <div className='Skills'>
            <div className="lef">
                <h2 style={{ color: 'white', fontSize: '30px', fontFamily: 'arial' }}>Skills</h2>
                <h1 style={{ color: 'blue', fontSize: '30px', fontFamily: 'arial' }}>Front end</h1>
                <div className="front">
                    <p style={{ display: 'inline', padding: '10px', color: 'white', fontSize: '20px', fontFamily: 'arial', backgroundColor: 'black' }}>HTML</p>
                    <p style={{ display: 'inline', padding: '10px', color: 'white', fontSize: '20px', fontFamily: 'arial', backgroundColor: 'black' }}>CSS</p>
                    <p style={{ display: 'inline', padding: '10px', color: 'white', fontSize: '20px', fontFamily: 'arial', backgroundColor: 'black' }}>JavaScript</p>
                    <p style={{ display: 'inline', padding: '10px', color: 'white', fontSize: '20px', fontFamily: 'arial', backgroundColor: 'black' }}>Bootstrap</p>
                    <p style={{ display: 'inline', padding: '10px', color: 'white', fontSize: '20px', fontFamily: 'arial', backgroundColor: 'black' }}>React</p>

                </div>
                <h1 style={{ color: 'blue', fontSize: '30px', fontFamily: 'arial' }}>Backend</h1>
                <div className="back">
                    <p style={{ display: 'inline', padding: '10px', color: 'white', fontSize: '20px', fontFamily: 'arial', backgroundColor: 'black' }}>NodeJS</p>
                    <p style={{ display: 'inline', padding: '10px', color: 'white', fontSize: '20px', fontFamily: 'arial', backgroundColor: 'black' }}>ExpressJS</p>
                    <p style={{ display: 'inline', padding: '10px', color: 'white', fontSize: '20px', fontFamily: 'arial', backgroundColor: 'black' }}>MongoDB</p>
                    <p style={{ display: 'inline', padding: '10px', color: 'white', fontSize: '20px', fontFamily: 'arial', backgroundColor: 'black' }}>MySQL</p>
                </div>
                <h1 style={{ color: 'blue', fontSize: '30px', fontFamily: 'arial' }}>Non-Technical</h1>
                <div className="non">
                    <p style={{ display: 'inline', padding: '10px', color: 'white', fontSize: '20px', fontFamily: 'arial', backgroundColor: 'black' }}>Communication</p>
                    <p style={{ display: 'inline', padding: '10px', color: 'white', fontSize: '20px', fontFamily: 'arial', backgroundColor: 'black' }}>Teamwork</p>
                    <p style={{ display: 'inline', padding: '10px', color: 'white', fontSize: '20px', fontFamily: 'arial', backgroundColor: 'black' }}>Leadership</p>
                </div>
            </div>
            <div className="riht">
                <div className="avat">
                    <img src="skills.png" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                </div>
            </div>
        </div>
    )
}

export default Skills