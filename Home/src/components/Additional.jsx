import React from "react";

const Additional = () => {
  return (
    <div>
    <div className="m-6 pb-8 border border-gray-300 border-r-0 border-l-0 lg:mb-0 lg:mt-2 lg:h-20">
      <h2 className="text-[#003339] mt-5 text-xl font-semibold lg:mt-1 lg:text-sm">
        Additional Info
      </h2>
      <div className="flex justify-between mt-4 lg:mt-1 lg:mb-0 lg:text-xs">
        <div>
          <div className="text-gray-400">Precipitation</div>
          <div className="text-[#003339] font-semibold">3%</div>
        </div>
        <div>
          <div className="text-gray-400">Humidity</div>
          <div className="text-[#003339] font-semibold">74%</div>
        </div>
        <div>
          <div className="text-gray-400">Windy</div>
          <div className="text-[#003339] font-semibold ">18km/h</div>
        </div>
      </div>
    </div>
    <h3 className="text-sm ml-6 mt-1 text-[#003339] font-semibold">Temperature</h3>
    </div>
  );
};

export default Additional;
