import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

export default function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f68aa602d27118b86366385e97f4bc88`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation('');
    }
  };
  //https://www.youtube.com/watch?v=UjeXpct3p7M
  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Podaj lokalizacje"
          onKeyPress={searchLocation}
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp}</h1> : null}
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">18 °C</p>
            <p>Odczuwalna</p>
          </div>
          <div className="humidity">
            <p className="bold">20%</p>
            <p>Wilgotność</p>
          </div>
          <div className="wind">
            <p className="bold">10 km/h</p>
            <p>Prędskość wiatru</p>
          </div>
        </div>
      </div>
    </div>
  );
}
