import React from "react"
import logo from "../logo.png"
import {AiOutlineGithub} from "react-icons/ai"
//React font awsome//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
     <div className="container">      
  <a className="navbar-brand" href="/" style={{color:"white"}}><img className="logo"src={logo} alt="logo..."></img>PortFolio</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/"> Home<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/about">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/projects">Work</a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="/skills">Skills</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/contact">Contact</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://github.com/Mariam-Saddiqa"><AiOutlineGithub style={{ width: "30px",height:"30px",color:"lightblue"}}/></a>
      </li>
      
    </ul>
    
  </div>
  </div> 
</nav>
    )
}

export default Navbar


