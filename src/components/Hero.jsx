import React from "react";
import { ReactTyped } from "react-typed";
function Hero() {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="md:text-5xl sm:text-5xl text-3xl font-bold md:py-4 text-[#00df9a]">
          Streamline Your Rentals.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-3xl sm:text-3xl text-xl font-bold py-4">
            Fast, Flexible Rent Collection
          </p>
          <ReactTyped
            className="md:text-4xl sm:text-4xl text-xl font-bold pl-2 md:pl-4"
            strings={["Space", "Apartments", "Homes", "Office"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500 ">
          Unlock Hidden Insights: Streamline Operations & Boost Revenue.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 mx-auto text-black">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
