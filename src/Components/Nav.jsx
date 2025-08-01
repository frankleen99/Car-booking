import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsFillSaveFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { MdHelp } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";


function Nav() {
  const [nav, setNav] = useState(false);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/*Left side */}
      <div className="flex items-center">
        {/* Hamburger menu - only visible on mobile */}
        <div onClick={() => setNav(!nav)} className="cursor-pointer lg:hidden">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          <a href="/">
            Best <span className="font-bold">Cars</span>
          </a>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Purchase</p>
          <p className="p-2">Hire</p>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-8">
        <nav className="flex items-center space-x-6">
          <a
            href="/Orders"
            className="flex items-center text-gray-500 hover:text-red-600 transition-colors"
          >
            Orders
          </a>
          <a
            href="/BestOnes"
            className="flex items-center text-gray-500 hover:text-red-600 transition-colors"
          >
            Best Ones
          </a>
          <a
            href="/Help"
            className="flex items-center text-gray-500 hover:text-red-600 transition-colors"
          >
            Help
          </a>
          <a
            href="/Invite"
            className="flex items-center text-gray-500 hover:text-red-600 transition-colors"
          >
            Invite Friends
          </a>
        </nav>
        <button className="p-2 sm:w-auto bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600 disabled:from-gray-400 disabled:to-gray-500 text-white px-3 sm:px-5 lg:px-6 rounded-lg font-bold text-sm sm:text-base lg:text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none disabled:cursor-not-allowed">
          <a href="/Login">Login</a>
        </button>
        <button className="p-2 sm:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 disabled:from-gray-400 disabled:to-gray-500 text-white px-3 sm:px-5 lg:px-6 rounded-lg font-bold text-sm sm:text-base lg:text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none disabled:cursor-not-allowed">
          <a href="/signUp">Sign Up</a>
        </button>
      </div>

      {/* Mobile menu overlay */}
      {nav && (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0 lg:hidden"></div>
      )}

      {/* Side drawer menu - only on mobile */}
      <div
        className={`${
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        } lg:hidden`}
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
          <div className="flex space-x-5 ml-4 mb-4">
            <button className="p-2 bg-gray-800 hover:bg-black text-white font-bold rounded-lg px-5">
              <a href="/login">Login</a>
            </button>
          </div>

          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex cursor-pointer hover:bg-slate-300 hover:rounded-md">
              <TbTruckDelivery size={25} className="mr-4" />
              <a href="/Orders">Orders</a>
            </li>
            <li className="text-xl py-4 flex cursor-pointer hover:bg-slate-300 hover:rounded-md">
              <MdHelp size={25} className="mr-4" />
              <a href="/Help">Help</a>
            </li>
            <li className="text-xl py-4 flex cursor-pointer hover:bg-slate-300 hover:rounded-md">
              <BsFillSaveFill size={25} className="mr-4" />
              <a href="/BestOnes">Best Ones</a>
            </li>
            <li className="text-xl py-4 flex cursor-pointer hover:bg-slate-300 hover:rounded-md">
              <FaUserFriends size={25} className="mr-4" />
              <a href="/Invite">Invite Friends</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
