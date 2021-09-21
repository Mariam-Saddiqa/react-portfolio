import React from "react";
import { Card } from "react-bootstrap";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaNodeJs, FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
const Skills = () => {

  const cardStyle = {
    backgroundColor: "black",
    boxShadow: "2px 2px 2px 2px",
    marginBottom: "50px",
    textAlign:"center"
   
  };
  const head2={
      fontSize:"50px",
      marginBottom:"25px",
      color:"white"
  }
  return (
    <div class="container">
      <div className="row">
        <div
          className="col-sm"
          style={{
            textAlign: "center",
            marginTop: "50px",
            marginBottom: "50px",
          }}
        >
          <h1
            style={{ color: "white", fontSize: "60px", marginBottom: "50px" }}
          >
            What I do
          </h1>
          <hr style={{ backgroundColor: "white", width: "50%" }}></hr>
        </div>
      </div>
      <div class="row">
        <div class="col-sm">
          <Card style={cardStyle}>
            <AiOutlineHtml5 style={{width:"80px",height:"70px",color:"red"}} />

            <Card.Body>
              <Card.Title>
                <h2 style={head2}>HTML</h2>
              </Card.Title>
              <div class="progress yellow">
                <span class="progress-left">
                  <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                  <span class="progress-bar"></span>
                </span>
                <div class="progress-value">75%</div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div class="col-sm">
          <Card style={cardStyle}>
            <FaCss3Alt style={{width:"80px",height:"70px",color:"orange"}} />
            <Card.Body>
              <Card.Title><h2 style={head2}>Css</h2></Card.Title>
              <div class="progress yellow">
                <span class="progress-left">
                  <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                  <span class="progress-bar"></span>
                </span>
                <div class="progress-value">85%</div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div class="col-sm">
          <Card style={cardStyle}>
            <FaNodeJs style={{width:"80px",height:"70px",color:"green"}} />
            <Card.Body>
              <Card.Title>
              <h2 style={head2}>NodeJs</h2>
              </Card.Title>
              <div class="progress yellow">
                <span class="progress-left">
                  <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                  <span class="progress-bar"></span>
                </span>
                <div class="progress-value">75%</div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row">
        <div class="col-sm">
          <Card style={cardStyle}>
            <DiMongodb style={{width:"80px",height:"70px",color:"green"}}/>
            <Card.Body>
              <Card.Title><h2 style={head2}>MongoDb</h2></Card.Title>

              <div class="progress blue">
                <span class="progress-left">
                  <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                  <span class="progress-bar"></span>
                </span>
                <div class="progress-value">90%</div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div class="col-sm">
          <Card style={cardStyle}>
            <FaReact style={{width:"80px",height:"70px",color:"blue"}} />
            <Card.Body>
              <Card.Title>
              <h2 style={head2}>React</h2>
              </Card.Title>
              <div class="progress yellow">
                <span class="progress-left">
                  <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                  <span class="progress-bar"></span>
                </span>
                <div class="progress-value">75%</div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div class="col-sm">
          <Card style={cardStyle}>
            <SiJavascript style={{width:"80px",height:"70px",color:"yellow"}}/>
            <Card.Body>
              <Card.Title style={{textAlign:"center"}}>
              <h2 style={head2}>JS</h2>
              </Card.Title>
              <div class="progress yellow">
                <span class="progress-left">
                  <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                  <span class="progress-bar"></span>
                </span>
                <div class="progress-value">85%</div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skills;
