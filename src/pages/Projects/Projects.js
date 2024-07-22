import React from 'react'
import './Projects.css'

const Projects = () => {
  return (
    <>
      <div className="container projects" id="project">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Projects
        </h2>
        <hr />
        <p className="pb-3 text-center">
          👉Here are my top 3 recent project with live links and source code
        </p>

        <div className="row" id="ads">
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img
                  src="https://cdn.dribbble.com/users/6175319/screenshots/15856926/media/f8bbd8e466de3af9ea252bbed81c8e8f.jpg?resize=400x300&vertical=center"
                  alt="Project1"
                />
              </div>
              <div className="card-image-overly m-auto">
                <span className="card-detail-badge">Node JS</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">Mongo DB</span>
                <span className="card-detail-badge">React JS</span>
              </div>

              <div className="card-body m-auto text-center">
                <div className="ad-title">
                  <h5 className="text-uppercase">Food Ordering Website</h5>
                </div>
                <a
                  href="https://manishak126.github.io/fooddelivery/"
                  className="ad-btn"
                >
                  View
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Frontend</span>
                <img src="https://media.shuru.co.in/input/1683637294081.jpg" />
              </div>
              <div className="card-image-overly m-auto">
                <span className="card-detail-badge">React JS</span>
                <span className="card-detail-badge">HTML/Bootstrap</span>
                <span className="card-detail-badge">JS</span>
                <span className="card-detail-badge"> NewsAPI</span>
              </div>

              <div className="card-body m-auto text-center">
                <div className="ad-title">
                  <h5 className="text-uppercase">News App</h5>
                </div>
                <a
                  href="https://manishak126.github.io/newsapp/"
                  className="ad-btn"
                >
                  View
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img
                  src="https://play-lh.googleusercontent.com/7jGVW02tWTXs_YPoaOnUHnDvDZPzKCHD4PG8Dbxuux1Lhm99LkUT-bmnDPRsrKnmHXE"
                  alt="Project3"
                />
              </div>
              <div className="card-image-overly m-auto">
                <span className="card-detail-badge">Node JS</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">Mongo DB</span>
                <span className="card-detail-badge">React JS</span>
              </div>

              <div className="card-body m-auto text-center">
                <div className="ad-title">
                  <h5 className="text-uppercase">iNoteBook</h5>
                </div>
                <a href="#" className="ad-btn">
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects
