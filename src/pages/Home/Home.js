import React from 'react'
import './home.css'//css is within same folder so we are using ./ and if we write ../ it will go back to the parent folder
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/docs/1CR21IS090_ManishaKumari_Resume.pdf'
const Home = () => {
  return (
    <>
    <div className="conatainer-fluid home-container" id='home'>
      <div className="container home-content">
        <h2>Hi 👋 I'm a</h2>
        <h1>
          <Typewriter
          options={{
              strings:["FullStack Developer !","Mern Stack Developer !"],
              autoStart:true,
              loop:true,
          }}
          />
        </h1>

        <div className="home-buttons">
          <button className="btn btn-hire">Hire Me</button>
          <a className="btn btn-cv" href={Resume} download="1CR21IS090_ManishaKumari_Resume">My Resume</a>
        </div>

      </div>
    </div>
    </>
  )
}

export default Home
