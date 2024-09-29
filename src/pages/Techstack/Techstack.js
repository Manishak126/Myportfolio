import React from 'react'
import './Techstack.css'
import { TechstackList } from '../../utils/TechstackList'
import RubberBand from 'react-reveal/RubberBand';
// import Fade from 'react-reveal/Fade';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Techstack = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="container techstack" id="tech">
        <RubberBand>
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Technologies Stack
          </h2>
          <hr />
          <p className="pb-3 text-center">
            👉Including Programming Languages, Frameworks, Databases, Front-end
            and Back-end tools, and APIs
          </p>
        </RubberBand>

          <div className="row" data-aos="fade-right">
            {TechstackList.map((tech) => (
              <div className="col-md-3">
                <div className="card m-2">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex justify-content-center">
                        <div className="align-self-center">
                          <tech.icon className="tech-icon" />
                        </div>
                        <div className="media-body">
                          <h5>{tech.name}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </>
  );
}

export default Techstack
