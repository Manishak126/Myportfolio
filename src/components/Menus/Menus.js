import React, { useEffect } from 'react'
import './Menus.css'
// import Profile from './profile_pic.jpg'
// import { FcHome } from "react-icons/fc";
// import { RiH1 } from 'react-icons/ri'
import { FcHome,FcAbout,FcBusinesswoman,FcSalesPerformance, FcReading,FcPrint, FcVoicePresentation, FcContacts } from "react-icons/fc";
import { Link} from 'react-scroll';
import ProfilePic from "./1CR21IS090_ManishaKumari_FormalPic.png";
import Zoom from "react-reveal/Zoom";
import Aos from "aos";
import "aos/dist/aos.css";

const Menus = ({toggle}) => {//by writing {toggle} we are sestructuring the property
    useEffect(()=>{
        Aos.init({duration:2000});
    },[])
  return (
    <>
      {toggle ? (
        <>
          <Zoom>
            <div className="navbar-profile-pic">
              <img src={ProfilePic} alt="Profile pic" />
            </div>
          </Zoom>
          <div data-aos="fade-right">
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcHome />
                    Home
                  </Link>
                </div>

                <div className="nav-link">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcAbout />
                    About
                  </Link>
                </div>

                <div className="nav-link">
                  <Link
                    to="edu"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcReading />
                    Education Details
                  </Link>
                </div>

                <div className="nav-link">
                  <Link
                    to="tech"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcSalesPerformance />
                    Tech Stack
                  </Link>
                </div>

                <div className="nav-link">
                  <Link
                    to="project"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcPrint />
                    Projects
                  </Link>
                </div>

                {/* <div className="nav-link">
             <Link to='work' spy={true} smooth={true} offset={-100} duration={100}>
                <FcBusinesswoman />Work Experience</Link>
            </div> */}

                <div className="nav-link">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcContacts />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="side-nav">
            <div className="nav-link">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcHome title="Home" />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcAbout title="About" />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="edu"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcReading title="Education Details" />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="tech"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcSalesPerformance title="Tech Stack" />
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="project"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcPrint title="Projects" />
              </Link>
            </div>
            {/* <div className="nav-link">
            <Link to='work' spy={true} smooth={true} offset={-100} duration={100}>
                <FcBusinesswoman title='Work Experience'/></Link>

            </div> */}
            <div className="nav-link">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcContacts title="Contact" />
              </Link>
            </div>
          </div>
        </>
      )}
    </>
    //{toggle && ()} means if toggle is true do this
  );
}

export default Menus
