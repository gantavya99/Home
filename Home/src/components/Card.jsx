import { React, useState, useEffect } from "react";
import { BsClouds } from "react-icons/bs";
import axios from "axios";

const Card = () => {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = "b4aaa9597cd0f16a37dc617a77fa686f";
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=New York&appid=${API_KEY}&units=metric`
      )
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, []);

  useEffect(() => {
    if (weatherData !== null) {
      // console.log(weatherData.list.slice(0, 5));
    }
  }, [weatherData]);

  return (
    <div className="flex justify-center mt-10 lg:mt-6">
      <div className="bg-[#003339] w-[380px] lg:w-60 rounded-2xl">
        <div className="flex justify-around text-white h-full lg:text-[10px]">
          {weatherData &&
            weatherData.list.slice(0, 5).map((data, index) => {
              const dt = data.dt_txt.slice(11, 16);
              return (
                <div key={index} className="flex flex-col items-center m-1">
                  <div>{dt}</div>
                  <div className="mt-1">
                    <BsClouds className="text-lg" />
                  </div>
                  <div className="mt-1">{data.main.temp.toFixed(0)}°C</div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Card;
