import React, { useEffect, useState } from 'react'
import NavBar from "../NavBar/NavBar"
import "./Artist.css"
import axios from "axios"

function Artist() {

  const ARTIST_ENDPOINT = "https://api.spotify.com/v1/me/top/artists"

  const [token, setToken] = useState("")
  const [data, setData] = useState({})

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"))
    }
  }, [])

  const handleArtist = () => {
    axios.get(ARTIST_ENDPOINT, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then(response => {
      setData(response.data)
      console.log(response.data.items[0].name)
    })
    .catch((error) => {
      console.log(error)
    })
  }
  

  return (
    <div className = "Artists">
        <NavBar />
        <div className = "buttonContainer">
            <button className = "getArtist" onClick = {handleArtist}>Get Top Artists</button>
        </div>
        <div className = "retrieveArtist">
        {data?.items ? data.items.map((item) => <li>{item.name}</li>) : null}
        </div>
    </div>
  )
}

export default Artist


