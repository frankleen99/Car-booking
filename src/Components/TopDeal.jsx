import { useState, useEffect } from "react";

const TopDeal = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mock data for demonstration since localhost API won't work in this environment
  const mockCars = [
    {
      id: 1,
      brand: "Ford",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&h=300&fit=crop",
      pricePerDay: "$45",
      pricePerMonth: "$1,200"
    },
    {
      id: 2,
      brand: "BMW",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop",
      pricePerDay: "$85",
      pricePerMonth: "$2,400"
    },
    {
      id: 3,
      brand: "Acura",
      image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&h=300&fit=crop",
      pricePerDay: "$65",
      pricePerMonth: "$1,800"
    },
    {
      id: 4,
      brand: "Nissan",
      image: "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      pricePerDay: "$40",
      pricePerMonth: "$1,100"
    },
    {
      id: 5,
      brand: "Bugatti",
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop",
      pricePerDay: "$55",
      pricePerMonth: "$1,500"
    },
    {
      id: 6,
      brand: "Ford",
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=300&fit=crop",
      pricePerDay: "$50",
      pricePerMonth: "$1,350"
    }
  ];

  useEffect(() => {
    // Simulate API call
    const fetchData = async () => {
      try {
        setLoading(true);
        // Replace this with your actual API call
        // const response = await fetch(`http://localhost:3000/cars`);
        // const data = await response.json();
        
        // Using mock data for demonstration
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate loading
        setCars(mockCars);
        setFilteredCars(mockCars);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the data:", error);
        setError("Failed to load cars");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filterType = (brand) => {
    setActiveFilter(brand);
    if (brand === "All") {
      setFilteredCars(cars);
    } else {
      setFilteredCars(cars.filter((car) => car.brand === brand));
    }
  };

  const brands = ["All", "Ford", "Acura", "Nissan", "Bugatti", "BMW"];

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-red-600 text-lg">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-8 lg:mb-12">
        <h3 className="text-red-600 font-bold text-sm sm:text-base mb-2 sm:mb-4">
          Top Rated Dealer
        </h3>
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 sm:mb-8 text-gray-900">
          Explore Our Top Deal
        </h1>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => filterType(brand)}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${
                activeFilter === brand
                  ? "bg-red-600 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-red-600 hover:text-white"
              }`}
            >
              {brand}
            </button>
          ))}
        </div>
      </div>

      {/* Cars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
            >
              {/* Car Image */}
              <div className="relative overflow-hidden">
                <img
                  src={car.image}
                  alt={`${car.brand} car`}
                  className="w-full h-48 sm:h-52 md:h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Car Details */}
              <div className="p-4 sm:p-6">
                <h2 className="font-bold text-xl sm:text-2xl text-center text-gray-900 mb-4">
                  {car.brand}
                </h2>
                
                {/* Pricing */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6 mb-6">
                  <div className="text-center">
                    <span className="text-red-600 font-bold text-lg sm:text-xl">
                      {car.pricePerDay}
                    </span>
                    <span className="text-gray-600 text-sm sm:text-base ml-1">
                      /Day
                    </span>
                  </div>
                  <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
                  <div className="text-center">
                    <span className="text-red-600 font-bold text-lg sm:text-xl">
                      {car.pricePerMonth}
                    </span>
                    <span className="text-gray-600 text-sm sm:text-base ml-1">
                      /Month
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-600 text-lg">No cars found for the selected brand.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopDeal;