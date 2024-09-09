import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

function Invite() {
  return (
    <>
      <header className="bg-primary text-primary-foreground py-4 px-6 shadow">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
              <Link to="/" className="hover:text-primary-foreground/80">
                Best <span className="font-bold"> Cars</span>
              </Link>
            </h1>
            <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 mt-2 text-[14px]">
              <p className="bg-black text-white rounded-full p-2">Purschase</p>
              <p className="p2">Hire</p>
            </div>
          </div>
        </div>
      </header>
      <div className="container mx-auto max-w-md py-12 px-4">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold">Invite Friends</h1>
          <p className="text-muted-foreground">
            Share this app with your friends and family.
          </p>
        </div>
        <form className="mt-8 space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Friend's Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your friend's name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Friend's Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your friend's email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send Invite
          </button>
        </form>
        <div className="mt-8 flex justify-center space-x-4">
          <Link to="#">
            <FaFacebook className="h-6 w-6" />
            <span className="sr-only">Share on Facebook</span>
          </Link>
          <Link to="#">
            <BsTwitterX className="h-6 w-6" />
            <span className="sr-only">Share on Twitter</span>
          </Link>
          <Link to="#">
            <FaWhatsapp className="h-6 -6" />
            <span className="sr-only">Share on WhatsApp</span>
          </Link>
        </div>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 bestCars Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            to="/"
            className="text-xs hover:underline hover:-red-600 underline-offset-4"
          >
            Home
          </Link>
          <Link
            to="/help"
            className="text-xs hover:underline underline-offset-4"
          >
            Help
          </Link>
        </nav>
      </footer>
      </div>
    </>
  );
}

export default Invite;
