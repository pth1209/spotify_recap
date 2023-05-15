import React from 'react'
import NavBar from "../NavBar/NavBar"
import "./Artist.css"

function Artist() {
  return (
    <div className = "Artists">
        <NavBar />
        <div className = "buttonContainer">
            <button className = "getArtist">Get Top Artists</button>
        </div>
    </div>
  )
}

export default Artist


