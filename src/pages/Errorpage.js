import React from 'react'
import crying from '../crying.jpg'

const Errorpage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm" style={{textAlign:"center",color:"white"}}>
                    <h1 style={{color:"white"}}>Ooops!!</h1>
            <h2 style={{color:"white"}}>404: Page Not Foun</h2>
            </div>
            <div className="col-sm">
            <img src={crying} style={{width:"50%",height:"50%"}}></img>
            </div>
            </div>
            
        </div>
    )
}

export default Errorpage
