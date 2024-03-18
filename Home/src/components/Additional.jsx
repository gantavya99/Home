import React from "react";

const Additional = ({Pressure, Humidity, Wind}) => {
  return (
    <div>
    <div className="m-6 pb-8 border border-gray-300 border-r-0 border-l-0 lg:mb-0 lg:mt-2 lg:h-20">
      <h2 className="text-[#003339] mt-5 text-xl font-semibold lg:mt-1 lg:text-sm">
        Additional Info
      </h2>
      <div className="flex justify-between mt-4 lg:mt-1 lg:mb-0 lg:text-xs">
        <div>
          <div className="text-gray-400">Pressure</div>
          <div className="text-[#003339] font-semibold">{Pressure}</div>
        </div>
        <div>
          <div className="text-gray-400">Humidity</div>
          <div className="text-[#003339] font-semibold">{Humidity/10} %</div>
        </div>
        <div>
          <div className="text-gray-400">Windy</div>
          <div className="text-[#003339] font-semibold ">{Wind}km/h</div>
        </div>
      </div>
    </div>
    <h3 className="text-sm ml-6 mt-1 text-[#003339] font-semibold">Temperature</h3>
    </div>
  );
};

export default Additional;
