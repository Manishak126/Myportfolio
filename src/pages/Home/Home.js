import React from 'react'
import './home.css'//css is within same folder so we are using ./ and if we write ../ it will go back to the parent folder
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/docs/1CR21IS090_ManishaKumari_Resume.pdf'
import { useTheme } from '../../context/ThemeContext';
import { FaMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [theme,setTheme] = useTheme()//destructuring context API's useTheme

  const handleTheme=()=>{
    setTheme((prevState)=>(prevState==='light'?'dark':'light'))
  }
  return (
    <>
      <div className="conatainer-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? <FaMoon size={25} /> : <IoMdSunny size={25} />}
        </div>
        <div className="container home-content">
          <div data-aos="fade-left">
            <h2>Hi 👋 I'm a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: ["FullStack Developer !", "Mern Stack Developer !"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>

          <div className="home-buttons" data-aos="fade-up">
            <button className="btn btn-hire">Hire Me</button>
            <a
              className="btn btn-cv"
              href={Resume}
              download="1CR21IS090_ManishaKumari_Resume"
            >
              My Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home
