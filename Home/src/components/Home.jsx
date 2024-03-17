import React, { useEffect, useState } from "react";
import Img from "./Bitmap.png";
import ny from "./newyork.avif"
import { MdLocationOn } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { BsClouds } from "react-icons/bs";
import Card from "./Card";
import Additional from "./Additional";
const Home = () => {

    function printCount () {
        let a = [];
        for(let i = 0; i<100000;i++){
            a[i]=i*i
        }
        return function(index){
            console.log(a[index]);
        }
        
    }
    useEffect(()=>{
        console.time("6");
        let closure = printCount();
        closure(6)
        console.timeEnd("6");
    },[])
    
    const [show, setShow] = useState(false);
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ];
    
      const today = new Date();
      const month = months[today.getMonth()];
      const day = today.getDate();
      const year = today.getFullYear();
    
      const formattedDate = `${month} ${day}, ${year}`;
    
    
  return (
     <div className="flex justify-center h-screen">
      {!show && <div
        className="bg-cover bg-no-repeat bg-center h-screen w-full md:w-1/3"
        style={{ backgroundImage: `url(${Img})` }}
      >
        
        <div className="flex justify-between ">
          <div  onClick={()=>setShow(true)} className="m-10">
            <IoCloseOutline
              color="white"
              className="bg-transparent text-4xl cursor-pointer"
            />
          </div>
          <div className="m-12">
            <button className="bg-[#ff2d55] px-4 py-1 rounded-md text-white border-none text-md">
              Live
            </button>
          </div>
        </div>
        <div className="mx-10 mt-10">
          <div className="flex items-center text-xl text-white bg-gray-800 bg-opacity-20 rounded-xl p-4 py-2 mb-10 w-2/3  bg-opacity-1 cursor-pointer">
            <MdLocationOn />
            <button className="ml-2">Current Location</button>
          </div>

          <h1 className="text-white font-semibold text-6xl ">New York,</h1>
          <h1 className="text-white font-semibold text-6xl">United States</h1>
        </div>
      </div> }
      {/* //second screen */}
      {show && <div className="bg-cover bg-no-repeat bg-center h-screen w-full md:w-1/3 bg-white">
        <div className="flex justify-between ">
          <div className="m-10"  onClick={()=>setShow(false)}>
            <HiMiniBars3BottomLeft
              color="black"
              className="bg-transparent text-4xl cursor-pointer"
            />
          </div>
          <div className="m-10">
            <IoSearchOutline
              color="black"
              className="bg-transparent text-4xl cursor-pointer"
            />
          </div>
        </div>
        <div className="ml-5 mt-10 flex">
      <div>
        <h1 className="text-black font-semibold text-3xl">New York,</h1>
        <h1 className="text-black font-semibold text-3xl">United States</h1>
        <h2 className="mt-3 font-semibold text-gray-400">{formattedDate}</h2>
        <div className="flex items-center">
        <BsClouds color="#057bff" className="mt-3 mr-2"/>
        <h2 className="mt-3 font-semibold text-[#057bff]">Cloudy</h2>
        </div>
        
      </div>
      <div className="flex items-center">
        <img src={ny} alt="New York Image" className="rounded-3xl h-32 w-[160px] ml-14 absolute" />
        <button className="bg-[#ff2d55] px-4 py-1 left-36 top-10 rounded-md text-white border-none text-md relative">
              Live
            </button>
      </div>
      
    </div>
    <Card />
    <Additional />
      </div>
      }
    </div>
  );
};

export default Home;