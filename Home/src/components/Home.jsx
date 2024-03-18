import React, { useEffect, useState } from "react";
import Img from "../assets/Bitmap.png";
import ny from "../assets/newyork.avif";
import { MdLocationOn } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { BsClouds } from "react-icons/bs";
import Card from "./Card";
import Additional from "./Additional";
import Chart from "./Chart";
const Home = ({clouds,pressure,humidity,wind}) => {


  const [show, setShow] = useState(false);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const today = new Date();
  const month = months[today.getMonth()];
  const day = today.getDate();
  const year = today.getFullYear();

  const formattedDate = `${month} ${day}, ${year}`;

  return (
    <div className="flex justify-center h-screen">
      {!show && (
        <div
          className="bg-cover bg-no-repeat bg-center w-full lg:w-1/4"
          style={{ backgroundImage: `url(${Img})` }}
        >
          <div className="flex justify-between ">
            <div onClick={() => setShow(true)} className="m-10 lg:m-6">
              <IoCloseOutline
                color="white"
                className="bg-transparent text-4xl cursor-pointer lg:text-2xl"
              />
            </div>
            <div className="m-12 lg:m-7">
              <button className="bg-[#ff2d55] px-4 py-1 rounded-md text-white border-none text-md lg:px-2 lg:py-0">
                Live
              </button>
            </div>
          </div>
          <div className="mx-8 mt-10 lg:mt-14 lg:mx-6">
            <div className="flex items-center text-xl text-white bg-gray-800 bg-opacity-20 rounded-xl p-4 py-2 mb-10 w-2/3  bg-opacity-1 cursor-pointer lg:p-2 lg:text-base lg:w-[170px] lg:mb-5">
              <MdLocationOn />
              <button className="ml-2">Current Location</button>
            </div>

            <h1 className="text-white font-semibold text-6xl lg:text-3xl lg:mb-3">New York,</h1>
            <h1 className="text-white font-semibold text-6xl lg:text-3xl">United States</h1>
          </div>
        </div>
      )}
      {/* //second screen */}
      {show && (
        <div className="bg-cover bg-no-repeat bg-center h-full w-full md:w-1/4 bg-white">
          <div className="flex justify-between">
            <div className="m-10 lg:m-6" onClick={() => setShow(false)}>
              <HiMiniBars3BottomLeft
                color="black"
                className="bg-transparent text-4xl cursor-pointer lg:text-2xl"
              />
            </div>
            <div className="m-10 lg:m-6">
              <IoSearchOutline
                color="black"
                className="bg-transparent text-4xl cursor-pointer lg:text-2xl"
              />
            </div>
          </div>
          <div className="ml-5 mt- flex lg:mt-0 lg:ml-7">
            <div>
              <h1 className="text-black font-semibold text-3xl lg:text-lg">New York,</h1>
              <h1 className="text-black font-semibold text-3xl lg:text-lg">
                United States
              </h1>
              <h2 className="mt-3 font-semibold text-gray-400 lg:text-xs lg:mt-1">
                {formattedDate}
              </h2>
              <div className="flex items-center">
                <BsClouds color="#057bff" className="mt-3 mr-2 lg:text-sm lg:mt-1" />
                <h2 className="mt-3 font-semibold text-[#057bff] lg:text-xs lg:mt-1">{clouds}</h2>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src={ny}
                alt="New York Image"
                className="rounded-3xl h-32 w-[160px] ml-10 absolute lg:ml-4 lg:h-20 lg:w-[120px] lg:rounded-xl"
              />
              <button className="bg-[#ff2d55] px-4 py-1 left-32 top-10 rounded-md text-white border-none text-md relative lg:left-24 lg:top-5 lg:text-xs lg:px-2 ">
                Live
              </button>
            </div>
          </div>
          <Card />
          <Additional Pressure={pressure} Humidity={humidity} Wind={wind} />
          <Chart />
        </div>
      )}
    </div>
  );
};

export default Home;
