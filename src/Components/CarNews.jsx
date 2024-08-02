import React from "react";

const CarNews = () => {
  return (
    <section className="relative max-w-[1640px] mx-auto p-4">
      <div className="relative max-h-[500px]">
        <img
          src="https://images.pexels.com/photos/937668/pexels-photo-937668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Car News"
          className="w-full max-h-[500px] object-cover bg-contain"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center text-gray-200">
          <div className="text-center px-4">
            <h3 className="text-4xl font-bold mb-4">CAR NEWS</h3>
            <p className="mb-8">
              More than 5000 car owners are selling and
              effectively renting on bestcar.<br/> Register to become our partner today.
            </p>
            <button className="p-3 bg-red-500 px-9 rounded-md hover:bg-red-800 transition-colors duration-300">
              <a href="/login">Register</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarNews;