import React from "react";
import Laptop from "../assets/laptop.jpg";

function Analytics() {
  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold md:text-2xl sm:text-xl">
            DATA ANALYTICS DASHBOARD
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-xl font-bold py-3">
            Manage Data Analytics Centerally
          </h1>
          <p>
            Simplify rental management with TenantTrack. Effortless rent
            collection, seamless tenant communication, and actionable data
            empower you to thrive. Focus on what matters most - growing your
            rental business with confidence.
          </p>
          <button className=" text-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 mx-auto md:mx-0 bg-black">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
