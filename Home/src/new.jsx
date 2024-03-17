import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [coordinates, setCoordinates] = useState({ lat: null, lon: null });
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = "b4aaa9597cd0f16a37dc617a77fa686f";

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/geo/1.0/direct?q=Tokyo&limit=1&appid=${API_KEY}`
      )
      .then((response) => {
        if (response.data && response.data.length > 0) {
          const { lat, lon } = response.data[0];
          setCoordinates({ lat, lon }); 
          if(coordinates)
          console.log(coordinates);
        } else {
          console.error("No data received for coordinates.");
        }
      })
      .catch((error) => {
        console.error("Error fetching coordinates:", error);
      });
  }, []);

  useEffect(() => {
    if (coordinates) {
      axios
        // .get(
        //   `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=hourly,daily&appid=${API_KEY}`
        // )
        .get(`api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=${API_KEY}`)
        .then((response) => {
          setWeatherData(response.data);
          console.log(weatherData)
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
    }
  }, []);

  return (
    <>
      <h1>Weather Data</h1>
      <div>
        <p>
          Latitude: {coordinates.lat !== null ? coordinates.lat : "Loading..."}
        </p>
        <p>
          Longitude: {coordinates.lon !== null ? coordinates.lon : "Loading..."}
        </p>
        {weatherData && (
          <p>Temperature: {weatherData.current.temp} Kelvin</p>
        )}
      </div>
    </>
  );
}

export default App;
