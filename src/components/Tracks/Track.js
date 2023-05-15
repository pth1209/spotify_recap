import React from 'react'
import NavBar from "../NavBar/NavBar"
import "./Track.css"

function Track() {
  return (
    <div className = "Tracks">
        <NavBar />
        <div className = "buttonContainer">
            <button className = "getTrack">Get Top Songs</button>
        </div>
    </div>
  )
}

export default Track
