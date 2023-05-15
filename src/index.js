import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Albums from "./components/Albums/Albums"
import Artist from './components/Artists/Artist';
import Track from './components/Tracks/Track';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>  
      <Route path = "/" element = {<App/>}/>
      <Route path = "/albums" element = {<Albums />} />
      <Route path = "/artist" element = {<Artist />}/>
      <Route path = "/songs" element = {<Track />}/>
    </Routes>
  </Router>
);


