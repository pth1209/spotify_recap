import React from 'react'
import {Link} from "react-router-dom"
import './NavBar.css'
import logo from '../unnamed.png'

const NavBar = () => {
  return (
    <div className = "sum">
      <div className='logo'>
        Spotify Recap
        <img className = "image" src = {logo} alt = "logo"/>
      </div>
      <nav className = "item">
        <ul className = "ul">
            <li>
                <Link to = "/">Home</Link>
            </li>
            <li>
                <Link to = "/artist">Get Top Artist</Link>
            </li>
            <li>
                <Link to = "/albums">Get Top Albums</Link>
            </li>
            <li>
                <Link to = "/songs">Get Top Songs</Link>
            </li>

        </ul>
      </nav>
    </div>
  )
}

export default NavBar
