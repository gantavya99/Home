import React from "react";
import { BsClouds } from "react-icons/bs";

const Card = () => {
  return (
    <div className="flex justify-center mt-12 lg:mt-6">
      <div className="bg-[#003339] w-[380px] lg:w-60 rounded-2xl">
        <div className="flex justify-around text-white h-full lg:text-xs">
          {[...Array(5)].map((_, index) => {
            return (
              <div key={index} className="flex flex-col items-center m-1">
                <div>12:00</div>
                <div className="mt-1">
                  <BsClouds className="text-lg"/>
                </div>
                <div className="mt-1">24</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
