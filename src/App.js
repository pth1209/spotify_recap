import React from "react"
import './App.css';
import {useState, useEffect} from "react"
import NavBar from "./components/NavBar/NavBar";

function App() {
  const CLIENT_ID = "043e7807ac214928a8c68e3ece5ebb0f"
  const REDIRECT_URL = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize" 
  const SPACE_DELIMITER = "%20"
  const SCOPES = ["user-library-read", "user-top-read"]
  const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER)

  const [token, setToken] = useState("")

  useEffect(() => {
    const hash  = window.location.hash
    let token = window.localStorage.getItem("token")

    if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

      window.location.hash = ""
      window.localStorage.setItem("token", token)

    }
    setToken(token)

  }, [])



  const logout = () => {
    setToken("")
    window.localStorage.removeItem("token")
  }

  const handleLogin = () => {
        window.location = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
      };

  return (
    <div className="App">
      <NavBar />
      <div className = "App-header">
        <h3>
          Welcome to Spotify Recap, where you can check your Spotify data!!!
        </h3>
          {!token ?
            <button onClick = {handleLogin}>Log in to Spotify</button>
              : <button onClick={logout}>Logout</button>}
      </div>
      
    </div>
  );
}

export default App;



