import React, { useEffect, useState } from 'react'
import NavBar from "../NavBar/NavBar"
import "./Albums.css"
import axios from "axios"

const Albums = () => {

  const ALBUM_ENDPOINT = "https://api.spotify.com/v1/me/albums"

  const [token, setToken] = useState("")
  const [data, setData] = useState({})

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"))
    }
  }, []);

  const handleAlbum = () => {
    axios.get(ALBUM_ENDPOINT, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then(response => {
      setData(response.data)
      console.log(response.data.items[0].album)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div className = "Albums">
        <NavBar />
        <div className = "buttonContainer">
          <button className = "getAlbum" onClick = {handleAlbum}>Get Saved Albums</button>
        </div>
        <div className = "retrieveAlbums">
          {data?.items ? data.items.map((item) => <li>{item.album.name}</li>) : null}
        </div>
    </div>
  )
}

export default Albums

