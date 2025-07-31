import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsFillSaveFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { MdHelp} from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { Link } from "react-router-dom";

function Nav() {
  const [nav, setNav] = useState(false);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left side */}
      <div className="flex items-center">
        {/* Hamburger - mobile only */}
        <div onClick={() => setNav(!nav)} className="cursor-pointer lg:hidden">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          <a href="/">
            Best <span className="font-bold">Cars</span>
          </a>
        </h1>

        {/* Purchase/Hire - large screens only */}
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] ml-4">
          <p className="bg-black text-white rounded-full p-2 px-4">Purchase</p>
          <p className="p-2 px-4">Hire</p>
        </div>
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden lg:flex items-center space-x-8 text-xl text-gray-700 font-medium">
        <Link to="/Orders" className="hover:text-black">Orders</Link>
        <Link to="/Help" className="hover:text-black">Help</Link>
        <Link to="/BestOnes" className="hover:text-black">Best Ones</Link>
        <Link to="/Invite" className="hover:text-black">Invite Friends</Link>
      </div>

      {/* Desktop Login button */}
      <div className="hidden lg:flex space-x-5 justify-end">
        <Link to="/Login">
          <button className="p-2 bg-red-700 hover:bg-black text-white font-bold rounded-lg px-7">
            Login
          </button>
        </Link>
          <Link to="/Signup">
          <button className="p-2 bg-red-700 hover:bg-black text-white font-bold rounded-lg px-7">
            SignUp
          </button>
        </Link>
      </div>

      {/* Mobile overlay */}
      {nav && <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0" />}

      {/* Mobile Side Drawer */}
      <div
        className={`fixed top-0 left-0 w-[300px] h-screen bg-white z-20 duration-300 ${
          nav ? "left-0" : "-left-full"
        }`}
      >
        <AiOutlineClose
          onClick={() => setNav(false)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          <a href="/">
            Best <span className="font-bold">Cars</span>
          </a>
        </h2>

        {/* Mobile login button */}
        <div className="lg:hidden flex space-x-5 ml-4 mb-4">
          <Link to="/login">
            <button className="p-2 bg-slate-600 hover:bg-black text-white font-bold rounded-lg px-5">
              Login
            </button>
          </Link>
        </div>

        {/* Mobile nav items */}
        <ul className="flex flex-col p-4 text-gray-800">
          <li className="text-xl py-4 flex items-center cursor-pointer hover:bg-slate-300 hover:rounded-md">
            <TbTruckDelivery size={25} className="mr-4" />
            <Link to="/Orders">Orders</Link>
          </li>
          <li className="text-xl py-4 flex items-center cursor-pointer hover:bg-slate-300 hover:rounded-md">
            <MdHelp size={25} className="mr-4" />
            <Link to="/Help">Help</Link>
          </li>
          <li className="text-xl py-4 flex items-center cursor-pointer hover:bg-slate-300 hover:rounded-md">
            <BsFillSaveFill size={25} className="mr-4" />
            <Link to="/BestOnes">Best Ones</Link>
          </li>
          <li className="text-xl py-4 flex items-center cursor-pointer hover:bg-slate-300 hover:rounded-md">
            <FaUserFriends size={25} className="mr-4" />
            <Link to="/Invite">Invite Friends</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
