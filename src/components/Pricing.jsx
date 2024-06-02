import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

function Pricing() {
  return (
    <div className="w-full py-[10rem] px-4 bg-white text-center">
      <h2 className="text-5xl font-bold mb-4 text-[#00df9a] pb-12">
        Pricing
      </h2>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[3rem]"
            src={Single}
            alt="Single Image"
          />
          <h2 className="text-2xl font-bold text-center py-8">Small Package</h2>
          <p className="text-center text-4xl font-bold">$15/<span className="text-sm">Per Month</span></p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">200GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">24/7 Response</p>
            <p className="py-12 mx-8"></p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 mx-auto text-black">
            Start Trail
          </button>
        </div>

        
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[3rem]"
            src={Double}
            alt="Double Image"
            bg-transparent="true"
          />
          <h2 className="text-2xl font-bold text-center py-8">Medium Package</h2>
          <p className="text-center text-4xl font-bold">$13/<span className="text-xl">Per Month</span></p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500GB Storage</p>
            <p className="py-2 border-b mx-8">3 Granted User</p>
            <p className="py-2 border-b mx-8">24/7 Response</p>
            <p className="py-2 border-b mx-8">API Integration</p>
            <p className="py-6 mx-8"></p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 mx-auto text-black">
            Start Trail
          </button>
        </div>

        
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[3rem]"
            src={Triple}
            alt="Third Image"
          />
          <h2 className="text-2xl font-bold text-center py-8">Large Package</h2>
          <p className="text-center text-4xl font-bold">$10/<span className="text-sm">Per Month</span></p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">2T Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">24/7 Response</p>
            <p className="py-2 border-b mx-8">API Integration</p>
            <p className="py-2 border-b mx-8">Daily Marketing</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 mx-auto text-black">
            Start Trail
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
