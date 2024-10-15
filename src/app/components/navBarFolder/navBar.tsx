"use client";
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import FoodBackground from "../assets/foodbackground.jpg";

const Navbar = () => {
  const [currentWord, setCurrentWord] = useState("taste");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev === "Savory" ? "Delight" : "Savory"));
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col h-screen w-full  bg-amber-400 fixed">
      <div className="  relative ">
        <div className="flex justify-center items-center">
          <div className="font-black text-2xl w-[50%] text-orange-600 align-left flex justify-start m-5 ">
            Food.Co
          </div>
          <div className="flex justify-end w-[50%] mr-5 p-2">
            <div className="font-black text-md text-black align-center m-5 p-2 flex justify-center">
              Home{" "}
            </div>
            <div className="font-black text-md text-black  align-center m-5 p-2 justify-center">
              Menu{" "}
            </div>
            <div className="font-black text-md text-black  align-center m-5 p-2 justify-center">
              Service{" "}
            </div>
            <div>
              <button className="m-5 p-2 align-middle flex justify-middle font-black outline-double  rounded-lg  text-white text-md">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex-grow">
        <img
          src={FoodBackground.src}
          alt="foodImage"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-start justify-between ml-10 mb-13 mt-20">
          <h1 className="font-black text-8xl text-white">
            <span className="block">Explore a</span>
            <span className="block">world of</span>
            <span className="relative inline-flex items-center">
              <span
                className={`relative transition-transform duration-500 ease-in-out ${
                  currentWord === "Delight"
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-5 opacity-0"
                }`}
              >
                <span className="text-red-500">Savory</span>
              </span>
              <span
                className={` absolute transition-transform duration-500 ease-in-out ${
                  currentWord === "Savory"
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-5 opacity-0"
                }`}
              >
                <span className="text-red-500">Delight</span>
              </span>{" "}
              {/* <span className=" relative"> in</span> */}
            </span>
            <span className="block"> in every bite.</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
