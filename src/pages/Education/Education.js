import React from 'react'
import './Education.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoSchool } from "react-icons/io5";

const Education = () => {
  return (
    <>
      <div className="container education" id="edu">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education
        </h2>
        <hr />

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021-Present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<IoSchool />}
          >
            <h3 className="vertical-timeline-element-title">BE-Information Science and Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">
              CMR Institute of Technology, Bangalore
            </h4>
            <p>CGPA - 8.42</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<IoSchool />}
          >
            <h3 className="vertical-timeline-element-title">Standard 12th</h3>
            <h4 className="vertical-timeline-element-subtitle">
              DAV Public School, Jehanabad
            </h4>
            <p>Percentage - 81.5%</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<IoSchool />}
          >
            <h3 className="vertical-timeline-element-title">Standard 10th</h3>
            <h4 className="vertical-timeline-element-subtitle">
              DAV Public School, Jehanabad
            </h4>
            <p>Percentage - 84.66%</p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </>
  );
}

export default Education
