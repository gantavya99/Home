import React, { PureComponent } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  AreaChart,
  Area,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";

const data = [
  {
    name: "Page A",
    temp: 5,
    prevMonth: 2,
    amt: 2400,
  },
  {
    name: "Page B",
    temp: 6,
    prevMonth: 6,
    amt: 2210,
  },
  {
    name: "Page C",
    temp: 8,
    prevMonth: 10,
    amt: 2290,
  },
  {
    name: "Page D",
    temp: 3,
    prevMonth: 12,
    amt: 2000,
  },
  {
    name: "Page E",
    temp: 4,
    prevMonth: 5,
    amt: 2181,
  },
  {
    name: "Page F",
    temp: 8,
    prevMonth: 8,
    amt: 2500,
  },
  {
    name: "Page G",
    temp: 4,
    prevMonth: 8,
    amt: 2100,
  },
];

export default function Charts(){
 

    return (
      <ResponsiveContainer width="100%" height="25%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 0,
            left: 0,
            bottom: 0,
          }}
          
        >
          <Tooltip />
         
          <Area
            type="monotone"
            dataKey="temp"
            stackId="1"
            stroke="#FFd9b1"
            fill="#FFD9B1"
            
          />
          <Area
            type="monotone"
            dataKey="prevMonth"
            stackId="1"
            stroke="#FF8900"
            fill="#FF8900"
            
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }

