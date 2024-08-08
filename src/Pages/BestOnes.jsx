import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function BestOnes() {
  return (
    <div>
      <header className="bg-primary text-primary-foreground py-4 px-6 shadow">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
              <Link to="/" className="hover:text-primary-foreground/80">
                Best <span className="font-bold"> Cars</span>
              </Link>
            </h1>
            <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 mt-2 text-[14px]">
              <p className="bg-black text-white rounded-full p-2">Purchase</p>
              <p className="p-2">Hire</p>
            </div>
          </div>
        </div>
      </header>
      <div className="max-w-[1640px] mx-auto p-4">
        <div className="max-h-[500px] relative">
          <img
            className="w-full max-h-[400px] object-cover bg-contain"
            src="./src/images/bestOnes Hero.jpg"
            alt="Car image"
          />
          {/* Overlay */}
          <div className="absolute h-full top-0 left-0 w-full text-gray-200 py-12 md:py-20 max-h-[500px] bg-black/50 flex items-center justify-center">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                Our <span className="text-red-600">Best</span> Ones
              </h1>
              <p className="text-lg text-white md:text-xl">
                Discover our most <span className="text-red-600">popular</span>{" "}
                and highest-rated cars and services.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 
      <section className="bg-black py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Our <span className='text-red-600'>Best</span> Ones
            </h1>
            <p className="text-lg text-white md:text-xl">
              Discover our most <span className='text-red-600'>popular</span> and highest-rated cars and services.
            </p>
          </div>
        </div>
      </section> */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-background rounded-lg shadow-lg overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Product 1"
                width={400}
                height={300}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Premium Headphones</h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  Experience the ultimate in sound quality and comfort with our
                  premium headphones.
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <FaStar className="w-5 h-5" />
                  <FaStar className="w-5 h-5" />
                  <FaStar className="w-5 h-5" />
                  <FaRegStar className="w-5 h-5" />
                  <FaRegStar className="w-5 h-5" />
                  <span className="text-sm text-muted-foreground">(4.3)</span>
                </div>
              </div>
            </div>
            <div className="bg-background rounded-lg shadow-lg overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Product 2"
                width={400}
                height={300}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Smart Home Hub</h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  Streamline your smart home with our intuitive and
                  feature-packed hub.
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <FaStar className="w-5 h-5" />
                  <FaStar className="w-5 h-5" />
                  <FaStar className="w-5 h-5" />
                  <FaStar className="w-5 h-5" />
                  <FaStarHalfAlt className="w-5 h-5" />
                  <span className="text-sm text-muted-foreground">(4.7)</span>
                </div>
              </div>
            </div>
            <div className="bg-background rounded-lg shadow-lg overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Product 3"
                width={400}
                height={300}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Fitness Tracker</h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  Stay motivated and track your fitness goals with our
                  state-of-the-art tracker.
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <FaStar className="w-5 h-5" />
                  <FaStar className="w-5 h-5" />
                  <FaStar className="w-5 h-5" />
                  <FaStar className="w-5 h-5" />
                  <FaStar className="w-5 h-5" />
                  <span className="text-sm text-muted-foreground">(4.9)</span>
                </div>
              </div>
            </div>
            <div className="bg-background rounded-lg shadow-lg overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Product 4"
                width={400}
                height={300}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Wireless Earbuds</h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  Enjoy uninterrupted, high-quality audio with our cutting-edge
                  wireless earbuds.
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <FaStar className="w-5 h-5" />
                  <FaStar className="w-5 h-5" />
                  <FaStar className="w-5 h-5" />
                  <FaRegStar className="w-5 h-5" />
                  <FaRegStar className="w-5 h-5" />
                  <span className="text-sm text-muted-foreground">(4.2)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
  );
}
export default BestOnes;
