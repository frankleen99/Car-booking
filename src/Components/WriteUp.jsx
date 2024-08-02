import React from "react";
import { FaUsers } from "react-icons/fa";
import { ImHappy } from "react-icons/im";
import { MdCarRental } from "react-icons/md";
const WriteUp = () => {
  return (
    <div className="hidden md:max-w-[1640px] lg:max-w-[1640px] xl:max-w-[1640px] mx-auto justify-center p-4 md:flex lg:flex">
      <div className="felx flex-col bg-white rounded-lg shadow-md w-[50%] h-[40%] m-2 overflow-hidden sm:w-50">
        <div className="flex justify-center mt-5">
        <FaUsers color="red" size={80}/>
        </div>
      <h1 className="text-center px-2 pt-3 pb-3 font-black text-xl ">9874+</h1>
      <h2 className="text-center px-2 pt-2 pb-5 font-medium"> Worldwide Clients</h2>
      </div>

      <div className="flex flex-col bg-white rounded-lg shadow-md w-[50%] h-[40%] m-2 overflow-hidden sm:w-50">
        <div className="flex justify-center mt-5">
        <MdCarRental color="red" size={80}/>
        </div>
      <h1 className="text-center px-2 pt-3 pb-3 font-black text-xl ">7894+</h1>
      <h2 className="text-center px-2 pt-2 pb-5 font-medium"> Car Rented</h2>
      </div>

      <div className="flex flex-col bg-white rounded-lg shadow-md w-[50%] h-[40%] m-2 overflow-hidden sm:w-50">
        <div className="flex justify-center mt-5">
        <ImHappy color="red" size={80}/>
        </div>
      <h1 className="text-center px-2 pt-3 pb-3 font-black text-xl ">4784+</h1>
      <h2 className="text-center px-2 pt-2 pb-5 font-medium"> Happy Clients</h2>
      </div>
    </div>
  );
};

export default WriteUp;
