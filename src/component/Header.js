import React from 'react'
import  Typed from 'react-typed'

const Header = () => {
    return (
        <div className='header-wrapper'>
            <div className="main-info">
                <h1>Mariam Saddiqa</h1>
                <Typed className='typed-text'  typeSpeed={40} backSpeed={60} loop strings={["Front End Developer","Web Development","App Developer"]} />'
            <a href="#" className="btn-main" id="btn">Contact</a>
            
            </div>
        </div>
    )
}

export default Header
