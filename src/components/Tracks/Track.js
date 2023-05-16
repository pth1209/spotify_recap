import React, { useEffect, useState } from 'react'
import NavBar from "../NavBar/NavBar"
import "./Track.css"
import axios from "axios"

function Track() {

  const TRACK_ENDPOINT = "https://api.spotify.com/v1/me/top/tracks"

  const [token, setToken] = useState("")
  const [data, setData] = useState({})

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"))
    }
  }, [])

  const handleTrack = () => {
    axios.get(TRACK_ENDPOINT, {
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
    <div className = "Tracks">
        <NavBar />
        <div className = "buttonContainer">
            <button className = "getTrack" onClick = {handleTrack}>Get Top Songs</button>
        </div>
        <div className = "retrieveTrack">
        {data?.items ? data.items.map((item) => <li>{item.name}</li>) : null}
        </div>
    </div>
  )
}

export default Track
