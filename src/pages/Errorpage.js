import React from 'react'
import crying from '../crying.jpg'

const Errorpage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <h1>Ooops!!</h1>
            <h2>404: Page Not Foun</h2>
            </div>
            <div className="col-sm">
            <img src={crying}></img>
            </div>
            </div>
            
        </div>
    )
}

export default Errorpage
