import React from 'react'
import './Contact.css'
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import Rotate from 'react-reveal/Rotate';
import LightSpeed from 'react-reveal/LightSpeed'
import contact from './contact.gif'


const Contact = () => {
  return (
    <>
      <div className="contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line ">
                  <img
                    src="https://i.pinimg.com/originals/38/db/07/38db0791549a04e0139e90cbdb8a5f32.gif"
                    alt="contact"
                    className="image"
                  />
                </div>
              </div>
            </div>
            {/* card border-0 */}
            <div className="col-lg-6 col-md-6">
              {/* <div className="row"> */}
              <Rotate>
                <div className="card2 d-flex px-4 py-4">
                  <div className="row">
                    <div className="row">
                      <h6>
                        Contact With
                        <FaLinkedin color="blue" className="ms-2" size={30} />
                        <FaGithub color="black" className="ms-2" size={30} />
                        <FaWhatsapp
                          color="	#075E54"
                          className="ms-2"
                          size={30}
                        />
                      </h6>
                    </div>

                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>
                    {/*  */}
                    <form
                      action="https://formspree.io/f/mpwaqgoj"
                      method="POST"
                    >
                      <div className="row px-3">
                        <input
                          type="text"
                          name="Name"
                          placeholder="Enter your Name"
                          className="mb-3"
                          required
                        />
                      </div>

                      <div className="row px-3">
                        <input
                          type="email"
                          name="Email"
                          placeholder="Enter your Email"
                          className="mb-3"
                          required
                        />
                      </div>

                      <div className="row px-3">
                        <textarea
                          type="text"
                          name="Message"
                          placeholder="Write your message"
                          className="mb-3"
                          required
                        />
                      </div>

                      <div className="row px-3">
                        <button type="submit" className="button">
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </Rotate>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact
