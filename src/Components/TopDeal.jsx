import React, { useState, useEffect } from "react";

const TopDeal = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/cars`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setCars(data);
          setFilteredCars(data);
        } else {
          console.error("API response is not an array:", data);
        }
      })
      .catch((error) => console.error("Error fetching the data:", error));
  }, []);

  const filterType = (brand) => {
    setFilteredCars(brand ? cars.filter((car) => car.brand === brand) : cars);
  };

  const brands = ["All", "Ford", "Acura", "Nissan", "Jeep", "BMW"];

  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="text-center">
        <h3 className="text-red-600 font-bold mb-4">Top Rated Dealer</h3>
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl">
          Explore Our Top Deal
        </h1>
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 lg:gap-7 xl:gap-8 mt-5">
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => filterType(brand === "All" ? "" : brand)}
              className="text-black font-bold shadow-md mb-3 hover:bg-red-600 hover:text-white bg-slate-100 px-5 py-2 rounded-lg"
            >
              {brand}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-8 mt-2 justify-center">
        {filteredCars.map((car) => (
          <div
            key={car.id}
            className="bg-white shadow-2xl hover:scale-105 transition-transform duration-300 rounded-md overflow-hidden"
          >
            <img
              src={car.image}
              alt={car.brand}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h1 className="font-black text-center text-lg">{car.brand}</h1>
              <div className="flex justify-center space-x-5 mt-2">
                <p className="text-red-600 font-semibold">
                  {car.pricePerDay} <span className="text-black text-lg">/Day</span>
                </p>
                <p className="text-red-600 font-semibold">
                  {car.pricePerMonth} <span className="text-black text-lg">/Month</span>
                </p>
              </div>
              <div className="flex justify-center mt-4">
                <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-800 transition-colors duration-300">
                  <a href="#">See more</a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDeal;