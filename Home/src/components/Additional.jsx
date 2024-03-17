import React from "react";

const Additional = () => {
  return (
    <div className="m-8 h-36 border border-gray-300 border-r-0 border-l-0">
      <h2 className="text-[#003339] mt-5 text-2xl font-semibold">
        Additional Info
      </h2>
      <div className="flex justify-between mt-4">
        <div>
          <div className="text-gray-400">Precipitation</div>
          <div className="text-[#003339] font-semibold ml-7">3%</div>
        </div>
        <div>
          <div className="text-gray-400">Humidity</div>
          <div className="text-[#003339] font-semibold ml-3">74%</div>
        </div>
        <div>
          <div className="text-gray-400">Windy</div>
          <div className="text-[#003339] font-semibold ">18km/h</div>
        </div>
      </div>
    </div>
  );
};

export default Additional;
