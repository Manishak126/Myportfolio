import React from 'react'
import './About.css'
import ProfilePic from "./1CR21IS090_ManishaKumari_FormalPic.png";
import Jump from 'react-reveal/Jump';

const About = () => {

  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="https://cdn.dribbble.com/users/3142893/screenshots/6690314/me-f.gif"
                alt=""
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                I am a dedicated Full Stack Developer specializing in the MERN
                stack (MongoDB, Express.js, React, and Node.js). With a strong
                foundation in both front-end and back-end development, I create
                dynamic, responsive web applications that deliver exceptional
                user experiences. My expertise spans from designing intuitive
                interfaces to implementing robust server-side logic, ensuring
                seamless performance and scalability. Passionate about
                continuous learning and staying updated with industry trends, I
                thrive on tackling new challenges and contributing to innovative
                projects.{" "}
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
}

export default About
