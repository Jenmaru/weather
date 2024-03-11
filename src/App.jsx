import React from 'react';
import { useSelector } from 'react-redux';
import Countries from './CitiesAndCountries.jsx';
import backPic from './components/backgrounds.js';
import './app.css';

const App = () => {
  const { weather, wind, main } = useSelector((state) => state.weather);
  const firstUp = (description) => (description !== undefined
    ? description.charAt(0).toUpperCase() + description.substr(1) : '');

  return (
    <>
      <nav className="navbar navbar-expand-lg" role="navigation">
        <div className="container">
          <text className="text" style={{ fontFamily: 'Georgia', fontSize: '20px', fontWeight: 'bold' }}>1PersonStudio [WEATHER]</text>
          <Countries />
        </div>
      </nav>
      <div className="img" style={{ backgroundImage: `url(${backPic[weather[0].main]})`, height: '92vh' }}>
        <div className="title container">Погода сейчас</div>
        <div className="container">
          <div className="weatherwidget">
            <div className="row">
              <div className="part-widget">
                <div className="text-weather">{firstUp(JSON.stringify(weather[0].description).slice(1, -1))}</div>
              </div>
              <div className="part-widget2">
                <div className="text-weather">
                  Температура:
                  {` ${JSON.stringify(main.temp)}°`}
                </div>
              </div>
              <div className="part-widget2">
                <div className="text-weather">
                  Ветер:
                  {` ${JSON.stringify(wind.speed)} м/с`}
                </div>
              </div>
              <div className="part-widget2">
                <div className="text-weather">
                  Давление:
                  {` ${JSON.stringify(main.pressure)} атм`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
