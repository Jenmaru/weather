import React, { useState } from 'react';
import { Countries } from './CitiesAndCountries.jsx';
import backPic from './components/backgrounds.js';
import './app.css';

function App() {
  const [weather, setWeather] = useState({ main: 'Clear' });
  console.log(weather.main)

  return (
      <><nav className="navbar navbar-expand-lg border-bottom border-dark bg-dark" role="navigation">
      <div className="container">
        <text className="text" style={{ fontFamily: 'Georgia', fontSize: '20px', fontWeight: 'bold' }}>1PersonStudio [WEATHER]</text>
        <Countries setWeather={setWeather} />
      </div>
    </nav>
    <div className="img" style={{ backgroundImage: `url(${backPic[weather.main]})`, height: '92vh' }}>
      <div className="weatherwidget">
        <div className="row">
          <div className="part-widget" >
            <div className="text-weather" >{weather.main}</div>
          </div>
          <div className="part-widget1" >
            <div className="text-weather" >{weather.main}</div>
          </div>
          <div className="part-widget1" >
            <div className="text-weather" >{weather.main}</div>
          </div>
          <div className="part-widget1" >
            <div className="text-weather" >{weather.main}</div>
          </div>
        </div>
      </div>
      </div></>
  );
}

export default App;
