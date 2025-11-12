import React from "react";
import type{ CardType } from "../types/card";

const Card: React.FC<CardType> = ({ image, aname, cardimage }) => {
  return (
    <div className="flex-col m-10 border border-gray-100 p-2 rounded-2xl gap-2">
      <img src={image} alt="name" />
      <div className="text-white mt-4">
        <span className="text-[14px] bg-[#4B6BFB] rounded-md p-2 ">
          Technology
        </span>

        <h1 className="font-bold font-sans text-[24px] mt-4 text text-black">
          The Impact of Technology on the Workplace: How Technology is Changing
        </h1>
        <div className="flex justify-around items-start gap-5 text-black m-1 w=[332px]">
          <img src={cardimage} alt="Person Image" className="w-9" />
          <span className="w-full">{aname}</span>
          <span className="w-full ">August 20,2022</span>
        </div>
      </div>

    </div>
  );
};

export default Card;
