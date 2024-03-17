import React from "react";
import { BsClouds } from "react-icons/bs";
const Card = () => {
  return (
    <div className="bg-[#003339] w-[380px] h-24 mt-12 ml-6 rounded-3xl lg:w-[320px]">
      <div className="flex justify-around font-bold items-center">
        {[...Array(5)].map((_, index) => {
          return (
            <div key={index} className="text-white mt-4">
              <div>12:00</div>
              <div className="ml-2">
                <BsClouds />
              </div>
              <div className="ml-2">24</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
