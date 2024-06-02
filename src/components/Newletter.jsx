import React from "react";

function Newletter() {
  return (
    <div className="w-full bg-black py-16 px-4 ">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 ">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold text-white py-2 pb-4">
            Want tips & tricks to optimize your flow?
          </h1>
          <p className="text-white">Sign up to our new Letter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full"> 
            <input className="p-3 flex w-full rounded-md text-black" type="email" placeholder="Enter Email"/>
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium ml-4 my-6 py-3 text-black">
              Notify Me!
            </button>
          </div>
          <p className="text-white">We care about the protection of your data. Read our <span className="text-[#00df9a]">Privacy Policy.</span></p>
        </div>
        
      </div>
    </div>
  );
}

export default Newletter;
