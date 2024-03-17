import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Home from "./components/Home";

function App() {
  const [weatherData, setWeatherData] = useState(null);
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
      console.log(weatherData);
      console.log(weatherData.list[0].main.temp);
    }
  }, [weatherData]);

  return (
    <>
      <div>
        <Home />
      </div>
    </>
  );
}

export default App;
