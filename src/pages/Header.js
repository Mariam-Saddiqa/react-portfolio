import React from 'react'
import  Typed from 'react-typed'
import { Button } from 'react-bootstrap'

const Header = () => {
    return (
        <div className='header-wrapper'>
            <div className="main-info">
                <h1 style={{color:"orange"}}>Hello</h1>
                <h2 style={{color:"white" ,fontSize:"50px"}}>My name is Mariam Saddiqa</h2>
                
                <Typed className='typed-text'  typeSpeed={40} backSpeed={60} loop strings={[" I'm Front End Developer"]} />'
                <h2 style={{color:"white"}}>based in <span style={{color:"orange"}}> Belgium</span></h2><br></br>
            
            
            </div>
        </div>
    )
}

export default Header
