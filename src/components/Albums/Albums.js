import React from 'react'
import NavBar from "../NavBar/NavBar"
import "./Albums.css"

function Albums() {
  return (
    <div className = "Albums">
        <NavBar />
        <div className = "buttonContainer">
          <button className = "getAlbum">Get Top Albums</button>
        </div>
    </div>
  )
}

export default Albums
