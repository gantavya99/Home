import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Home from "./components/Home";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [clouds, setClouds]=useState(null);
  const [pressure, setPressure] = useState(null);
  const [wind, setWind] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const API_KEY = "b4aaa9597cd0f16a37dc617a77fa686f";

 
  useEffect(() => {
  
      axios
        .get(`https://api.openweathermap.org/data/2.5/forecast?q=New York&appid=${API_KEY}&units=metric`)
        .then((response) => {
          setWeatherData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
  }, []);

  useEffect(() => {
    if (weatherData !== null) {
      // console.log(weatherData);
      // console.log(weatherData.list[0].main.temp);
      setClouds(weatherData.list[0].weather[0].description);
      setPressure(weatherData.list[0].main.pressure);
      setWind(weatherData.list[0].wind.speed);
      setHumidity(weatherData.list[0].main.humidity);
      // console.log(wind)
      // console.log("humidity:",humidity)
      // console.log(pressure);
    }
  }, [weatherData]);

  return (
    <>
      <div>
        <Home clouds={clouds} pressure={pressure} humidity={humidity} wind={wind}/>
      </div>
    </>
  );
}

export default App;
