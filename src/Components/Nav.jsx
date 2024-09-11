import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillSaveFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { MdHelp } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

function Nav() {
  const [nav, setNav] = useState(false);

  return (
    <div
      className="max-w-[1640px] mx-auto flex justify-between 
    p-4"
    >
      {/*Left side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          <a href="/">
          Best <span className="font-bold"> Cars</span>
          </a>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Purschase</p>
          <p className="p2">Hire</p>
        </div>
      </div>
      <div className="hidden lg:flex space-x-5 justify-end mr-[40px]">
      <button className="p-2 bg-red-700 hover:bg-black text-white font-bold rounded-lg pl-7 pr-7 ">
        <a href="/Login"> Login</a> 
      </button>
      </div>
      {/* mobile menu */}
      {/* overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          <a href="/">
          Best <span className="font-bold">Cars</span>
          </a>
        </h2>
        <nav>
          <div className="lg:hidden flex space-x-5 ml-4">
              <button className="p-2 bg-slate-600 hover:bg-black text-white font-bold rounded-lg pl-5 pr-5 ">
              <a href ="/login"> Login</a> 
              </button>
          </div>

          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex cursor-pointer hover:bg-slate-300 hover:rounded-md">
              <TbTruckDelivery size={25} className="mr-4" />
              <a href="/Orders">Orders</a>
            </li>
            <li className="text-xl py-4 flex cursor-pointer hover:bg-slate-300 hover:rounded-md">
              <MdHelp size={25} className="mr-4" />
              <a href="/Help"> Help</a>
            </li>
            <li className="text-xl py-4 flex cursor-pointer hover:bg-slate-300 hover:rounded-md">
              <BsFillSaveFill size={25} className="mr-4" />
              <a href="/BestOnes"> Best Ones</a>
            </li>
            <li className="text-xl py-4 flex cursor-pointer hover:bg-slate-300 hover:rounded-md">
              <FaUserFriends size={25} className="mr-4" />
              <a href="/Invite"> Invite Friends </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
