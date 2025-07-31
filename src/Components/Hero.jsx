import React from "react";

function Header() {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">
      <img
        className="w-full max-h-[500px] object-cover bg-contain"
        src="./src/images/pexels-pixabay-210019.jpg"
        alt="car image"
      />
        {/* Overlay*/}
        <div className="absolute h-full top-0 left-0 w-full text-gray-200  max-h-[500px] bg-black/50 flex flex-col">
          <h1 className="px-4 mt-[80px] ml-[20px] text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold"> THE <span className="text-red-700">WIND</span></h1>
          <h1 className="px-4 ml-[20px] text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold">IS NOT EVEN<span className="text-red-700"> CLOSE</span> TO US</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
