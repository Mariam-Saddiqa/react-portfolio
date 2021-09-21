import React from "react";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillCodepenCircle,
  
} from "react-icons/ai";


const Footer = () => {
    const style={
        color:"white"
    }
    const colStyle={
        textAlign:"center"
    }
  return (
    
      <div class="container">
      
      <div className="row">
        <div className="col-sm">
          <p class="text-center" style={{ color: "white",marginTop:"25px",marginBottom:"25px" }}>
            Copyright @2021 | Designed by <a href="#" style={{color:"white"}}>Mariam Saddiqa</a>
          </p>
        </div>
      </div>
      <div className="row">
      <ul class="social">

        <div className="col-sm">
          
            <a href="https://github.com/Mariam-Saddiqa">
              <AiOutlineGithub style={{ width: "50px",height:"50px",color:"lightblue" ,marginLeft:"10px"}} />
            </a>
            <a href="https://www.linkedin.com">
              <AiFillLinkedin style={{ width: "50px",height:"50px",marginLeft:"10px" }}/>
            </a>
            <a href="https://codepen.io/your-work/">
              <AiFillCodepenCircle style={{ width: "50px" ,height:"50px",color:"white",marginLeft:"10px"}}/>
            </a>
           
            </div>
          </ul>
        
      </div>
      </div>
    
  );
};

export default Footer;
