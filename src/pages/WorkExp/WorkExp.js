import React from 'react'
import './WorkExp.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaReact } from "react-icons/fa6";


const WorkExp = () => {
  return (
    <>
      <div className="work" id='work'>
        <div className="container work-exp">
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Work Experience</h2>
        <hr />

        <VerticalTimeline>
        <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    // date="2018"
                    contentStyle={{background:"#138781", color:"#fff"}}
                    iconStyle={{ background: '#138781', color: '#fff' }}
                    icon={<FaReact />}
                >
                    <h3 className="vertical-timeline-element-title">Standard  10th</h3>
                    <h4 className="vertical-timeline-element-subtitle">DAV Public School, Jehanabad</h4>
                    <p>Percentage - 85.4%<br/> 2018
                    </p>
                   
            </VerticalTimelineElement>

            <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    // date="2018"
                    contentStyle={{background:"#138781", color:"#fff"}}
                    iconStyle={{ background: '#138781', color: '#fff' }}
                    icon={<FaReact />}
                >
                    <h3 className="vertical-timeline-element-title">Standard  10th</h3>
                    <h4 className="vertical-timeline-element-subtitle">DAV Public School, Jehanabad</h4>
                    <p>Percentage - 85.4%<br/> 2018
                    </p>
                   
            </VerticalTimelineElement>

            <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    // date="2018"
                    contentStyle={{background:"#138781", color:"#fff"}}
                    iconStyle={{ background: '#138781', color: '#fff' }}
                    icon={<FaReact />}
                >
                    <h3 className="vertical-timeline-element-title">Standard  10th</h3>
                    <h4 className="vertical-timeline-element-subtitle">DAV Public School, Jehanabad</h4>
                    <p>Percentage - 85.4%<br/> 2018
                    </p>
                   
            </VerticalTimelineElement>
        </VerticalTimeline>

        

        </div>
      </div>
    </>
  )
}

export default WorkExp
