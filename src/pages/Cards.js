import React, { Component } from "react";
import {AiOutlineGithub} from "react-icons/ai"

import weather from "../weather.jpg";
import library from "../library.jpg"
import corona from "../corona.jpg"

export default class Cards extends Component {
  render() {
    return (
      <div class="container cards-projects" style={{marginTop:"50px"}} data-aos="fade-up">
        <div className="row">
          <div className="col-sm" style={{color:"white", textAlign:"center"}}>
            <h1 style={{fontSize:"70px",marginBottom:"50px"}}>What I did</h1>
            <hr style={{backgroundColor:"white",width:"50%"}}></hr>
          </div>
        </div>
      {/* <!--image row start--> */}
      <div class="row">
        {/* <!--image card start--> */}
        <div class="image">
          <img src={library} alt=""/>
          <div class="details">
            <h2><span>Ebook Library</span></h2>
            <p>HTML,CSS,JS</p>
            <div class="more">
              <a href="https://github.com/Mariam-Saddiqa/webdevclass/tree/main/javascript/Js%20Ebook%20Exam" class="read-more"><AiOutlineGithub style={{ width: "30px",height:"30px",color:"black"}}/> <span>Project</span></a>
              <div class="icon-links">
                <a href="#"><i class="fas fa-heart"></i></a>
                <a href="#"><i class="fas fa-eye"></i></a>
                <a href="#"><i class="fas fa-paperclip"></i></a>
              </div>
            </div>
          </div>
        </div>
        {/* <!--image card end-->
        <!--image card start--> */}
        <div class="image">
          <img src={weather} alt=""/>
          <div class="details">
            <h2><span>Weather App</span></h2>
            <p>HTML,CSS,JS</p>
            <div class="more">
              <a href="https://github.com/Mariam-Saddiqa/webdevclass/tree/main/javascript/OOP/FetchApi/weather" class="read-more"><AiOutlineGithub style={{ width: "30px",height:"30px",color:"black"}}/> <span>Project</span></a>
              <div class="icon-links">
                <a href="#"><i class="fas fa-heart"></i></a>
                <a href="#"><i class="fas fa-eye"></i></a>
                <a href="#"><i class="fas fa-paperclip"></i></a>
              </div>
            </div>
          </div>
        </div>
        {/* <!--image card end-->
        <!--image card start--> */}
        <div class="image">
          <img src={corona} alt=""/>
          <div class="details">
            <h2><span>Corona App</span></h2>
            <p>HTML,CSS,jS</p>
            <div class="more">
              <a href="https://github.com/Mariam-Saddiqa/webdevclass/tree/main/javascript/OOP/FetchApi/coronvirus" class="read-more"><AiOutlineGithub style={{ width: "30px",height:"30px",color:"black"}}/> <span>Project</span></a>
              <div class="icon-links">
                <a href="#"><i class="fas fa-heart"></i></a>
                <a href="#"><i class="fas fa-eye"></i></a>
                <a href="#"><i class="fas fa-paperclip"></i></a>
              </div>
            </div>
          </div>
        </div>
        {/* <!--image card end--> */}
      </div>
      {/* <!--image row end-->
      <!--image row start--> */}
      
    </div>
    );
  }
}
