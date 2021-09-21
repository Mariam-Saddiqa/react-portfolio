import React from "react";
import { FaSchool,FaUniversity } from 'react-icons/fa';
import { FcAssistant } from 'react-icons/fc';
import {GiTeacher} from 'react-icons/gi'
import {FiStar} from 'react-icons/fi'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import about from "../about.png";

const About = () => {
  return (
    <div className="container" style={{marginBottom:"50px"}}>
      <div className="row">
        <div className="col-sm">
          <h1
            style={{
              color: "white",
              textAlign: "center",
              padding: "25px",
              marginTop: "25px",
              marginBottom: "50px",
              fontSize:"70px"
            }}
          >
            About
          </h1>
          <hr style={{ backgroundColor: "white", width: "50%",marginBottom:"40px" }}></hr>
        </div>
      </div>
      <div
        className="row"
        style={{ textAlign: "center", color: "white", marginTop: "25px" }}
      >
        <div className="col-sm">
          <img src={about} style={{ width: "80%", height: "100%" }}></img>
        </div>
        <div className="col-sm">
          <h2 style={{ marginBottom: "55px" }}>
            I create products not just art
          </h2>
          <h5>
            My name is Mariam Saddiq. I am a web designer and developer.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
            suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </h5>
        </div>
      </div>
      <div style={{color:"white",textAlign:"center",padding:"25px",marginBottom:"50px"}}><h1>Eductaion and Experience</h1></div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "orange", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid orange" }}
          date="March 2021- Oct 2021"
          iconStyle={{ background: "black",color:"orange" }}
          icon={<FaSchool/>}
        >
          <h3 className="vertical-timeline-element-title">Student</h3>
          <h4 className="vertical-timeline-element-subtitle">Intec Brussel</h4>
          <p>
            Front End Developer Course
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021-2021"
          iconStyle={{ background: "black", color: "orange" }}
          icon={<FaUniversity />}
        >
          <h3 className="vertical-timeline-element-title">Student</h3>
          <h4 className="vertical-timeline-element-subtitle">
          University of Sargodha,Pakistan
          </h4>
          <p>
           Bachelors in Computer Science
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2010"
          iconStyle={{ background: "black", color: "orange" }}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title">Student</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Government Jamia College, Pakistan
          </h4>
          <p>Pre Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          iconStyle={{ background: "black" }}
          icon={< FcAssistant/>}
        >
          <h3 className="vertical-timeline-element-title">Administratief Assistant</h3>
          <h4 className="vertical-timeline-element-subtitle">
           Hasselt, Belgium
          </h4>
          <p>Deals with Invoices and Queries</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2013"
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<GiTeacher />}
        >
          <h3 className="vertical-timeline-element-title">
            Maths Teacher
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Maryam Higher Secondary School,Pkaistan</h4>
          
        </VerticalTimelineElement>
        
        
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<FiStar />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default About;
