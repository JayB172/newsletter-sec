import React from "react"
import "./Styles/Games.css"
import Video from "../Images/Team/Triumphant.mp4"

const Team = () => {
    return(
        <div>
            <h1 className='team-head'>Triumphant</h1>
            <video src={Video} controls='controls' width='30%' height='15%' className='video' />
            <h2 className="team-intro" >Welcome to Team</h2>
            <div>
                
            </div>
        </div>
    )
}

export default Team;