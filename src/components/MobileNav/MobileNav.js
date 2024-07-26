import React, {useState} from 'react'
import { IoMenu } from "react-icons/io5";
import './MobileNav.css'
import {
  FcHome,
  FcAbout,
  FcSalesPerformance,
  FcReading,
  FcPrint,
  FcContacts,
} from "react-icons/fc";
import { Link } from "react-scroll";
import "aos/dist/aos.css";
import { RiMenuUnfold4Line2 } from "react-icons/ri";


const MobileNav = () => {
    const [open,setOpen]= useState(false);

    // Handle open
    const handleOpen=()=>{
        setOpen(!open);
    }

    // handle Menu clicks
    const handleMenuClick=()=>{
        setOpen(false);
    }
  return (
    <>
      <div className='"mobile-nav'>
        <div className="mobile-nav-header">
          {open ? (
            <RiMenuUnfold4Line2
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          ) : (
            <IoMenu
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          )}

          <span className="mobile-nav-title">Menu</span>
        </div>
        {open && (
          <div className="mobile-nav-menu">
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
                      onClick={handleMenuClick}
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
                      onClick={handleMenuClick}
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
                      onClick={handleMenuClick}
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
                      onClick={handleMenuClick}
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
                      onClick={handleMenuClick}
                    >
                      <FcPrint />
                      Projects
                    </Link>
                  </div>

                  <div className="nav-link">
                    <Link
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={100}
                      onClick={handleMenuClick}
                    >
                      <FcContacts />
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MobileNav

