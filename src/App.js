import './App.css';
import React, { useEffect, useState } from "react";
import WeatherDetails from './component/WeatherDetails';

function App() {
  const [place] = useState('Bengaluru');
  const [days] = useState(3);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`http://localhost:8080/weather/get?location=${place}&days=${days}`)
      .then(response => response.json())
      .then(result => {
        setData(result);
        console.log(result);
      }).catch(error => {
        console.error("error while fetching weather data: ", error.stack);
      })
    }
    fetchData();
  }, [place, days]);

  return (
    <div className="App">
      <WeatherDetails weatherData={data} />
    </div>
  );
}

export default App;
