import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function RentPage() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCar, setSelectedCar] = useState(null);
  const [rentalDuration, setRentalDuration] = useState("daily");
  const [sortBy, setSortBy] = useState("name");
  const [filterBy, setFilterBy] = useState("all");

  // Additional rental cars data to supplement the API data
  const additionalRentalCars = [
    {
      id: "rental-1",
      name: "2020 Nissan Altima",
      image:
        "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=600",
      dailyRate: "$45",
      weeklyRate: "$280",
      monthlyRate: "$1,100",
      type: "sedan",
      features: ["Automatic", "AC", "Bluetooth", "4 Seats"],
    },
    {
      id: "rental-2",
      name: "2021 Hyundai Sonata",
      image:
        "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600",
      dailyRate: "$52",
      weeklyRate: "$320",
      monthlyRate: "$1,250",
      type: "sedan",
      features: ["Automatic", "AC", "GPS", "5 Seats"],
    },
    {
      id: "rental-3",
      name: "2022 Subaru Outback",
      image:
        "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600",
      dailyRate: "$65",
      weeklyRate: "$400",
      monthlyRate: "$1,550",
      type: "suv",
      features: ["AWD", "AC", "Roof Rack", "5 Seats"],
    },
  ];

  useEffect(() => {
    const jsonEndpoint = `http://localhost:3000/cars`;

    fetch(jsonEndpoint)
      .then((res) => res.json())
      .then((data) => {
        // Transform API data to include rental rates
        const rentableCars = data.map((car) => ({
          ...car,
          dailyRate: calculateDailyRate(car.price),
          weeklyRate: calculateWeeklyRate(car.price),
          monthlyRate: calculateMonthlyRate(car.price),
          type: car.type || "sedan",
          features: car.features || ["Automatic", "AC", "Bluetooth"],
        }));
        setCars([...rentableCars, ...additionalRentalCars]);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching data", error);
        // Fallback to additional rental cars if API fails
        setCars(additionalRentalCars);
        setLoading(false);
      });
  }, []);

  const calculateDailyRate = (price) => {
    if (!price) return "$40";
    const numPrice = parseFloat(price.replace(/[$,]/g, ""));
    return `$${Math.round(numPrice * 0.003)}`;
  };

  const calculateWeeklyRate = (price) => {
    if (!price) return "$250";
    const numPrice = parseFloat(price.replace(/[$,]/g, ""));
    return `$${Math.round(numPrice * 0.018)}`;
  };

  const calculateMonthlyRate = (price) => {
    if (!price) return "$950";
    const numPrice = parseFloat(price.replace(/[$,]/g, ""));
    return `$${Math.round(numPrice * 0.065)}`;
  };

  const handleRentNow = (car) => {
    setSelectedCar(car);
    alert(
      `Starting rental process for ${car.name} - ${getRentalRate(
        car
      )} per ${rentalDuration.replace("ly", "")}`
    );
  };

  const getRentalRate = (car) => {
    switch (rentalDuration) {
      case "weekly":
        return car.weeklyRate;
      case "monthly":
        return car.monthlyRate;
      default:
        return car.dailyRate;
    }
  };

  const filteredCars = cars
    .filter((car) => filterBy === "all" || car.type === filterBy)
    .sort((a, b) => {
      if (sortBy === "price") {
        return (
          parseFloat(a.dailyRate.replace("$", "")) -
          parseFloat(b.dailyRate.replace("$", ""))
        );
      }
      return (a[sortBy] || "").localeCompare(b[sortBy] || "");
    });

  const featuredCars = filteredCars.slice(0, 2);
  const allCars = filteredCars.slice(2);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-xl font-medium">
            Loading rental cars...
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Finding the perfect ride for your journey
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
       <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-4 px-4 sm:px-6 shadow-xl sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between max-w-7xl">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              <Link to="/" className="hover:text-gray-300 transition-colors duration-200">
                Best <span className="font-bold text-red-700">Cars</span>
              </Link>
            </h1>
            <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-sm">
              <span className="bg-red-700 text-white rounded-full px-4 py-2 font-medium">Rental</span>
              <span className="px-4 py-2 text-gray-700">Hire</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link 
              to="/" 
              className="hidden sm:block bg-red-700 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </header>
      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-50 to-gray-100  py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
          <div className="container mx-auto max-w-7xl text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6">
              Rent Your Perfect Car
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8">
              Choose from our premium fleet of rental vehicles. Whether for
              business or leisure, find the perfect car for your journey at
              competitive rates.
            </p>

            {/* Rental Duration Selector */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 sm:mb-8">
              <div className="flex bg-white rounded-xl p-2 shadow-lg">
                <button
                  onClick={() => setRentalDuration("daily")}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all ${
                    rentalDuration === "daily"
                      ? "bg-red-700 text-white shadow-md"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  Daily
                </button>
                <button
                  onClick={() => setRentalDuration("weekly")}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all ${
                    rentalDuration === "weekly"
                      ? "bg-red-700 text-white shadow-md"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  Weekly
                </button>
                <button
                  onClick={() => setRentalDuration("monthly")}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all ${
                    rentalDuration === "monthly"
                      ? "bg-red-700 text-white shadow-md"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  Monthly
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() =>
                  document
                    .getElementById("cars-section")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full sm:w-auto bg-red-700 hover:bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Browse Cars
              </button>
              <button className="w-full sm:w-auto border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200">
                Quick Quote
              </button>
            </div>
          </div>
        </section>

        {/* Cars Section */}
        <section
          id="cars-section"
          className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6"
        >
          <div className="container mx-auto max-w-7xl">
            {/* Controls */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 sm:mb-8 gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                  Available Rental Cars
                </h2>
                <p className="text-gray-600">
                  {filteredCars.length} vehicles available • Showing{" "}
                  {rentalDuration} rates
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <select
                  value={filterBy}
                  onChange={(e) => setFilterBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-red-500 bg-white text-sm sm:text-base"
                >
                  <option value="all">All Types</option>
                  <option value="sedan">Sedans</option>
                  <option value="suv">SUVs</option>
                  <option value="hatchback">Hatchbacks</option>
                </select>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-red-500 bg-white text-sm sm:text-base"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                  <option value="type">Sort by Type</option>
                </select>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-6 sm:p-8 lg:p-10">
                {/* Featured Cars */}
                {featuredCars.length > 0 && (
                  <div className="mb-10 sm:mb-12">
                    <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-800 flex items-center">
                      <span className="w-1 h-8 bg-red-700 mr-4 rounded-full"></span>
                      Featured Rentals
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                      {featuredCars.map((car, index) => (
                        <div
                          key={car.id || index}
                          className="bg-gradient-to-br from-blue-50 to-gray-50 hover:from-blue-100 hover:to-gray-100 p-4 sm:p-6 rounded-xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-200 hover:shadow-lg group"
                        >
                          <div className="relative overflow-hidden rounded-xl mb-4">
                            <img
                              src={car.image}
                              alt={car.name}
                              className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                            <div className="absolute top-4 right-4 bg-red-700 text-white px-3 py-1 rounded-full text-sm font-bold">
                              Featured
                            </div>
                            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                              {car.type?.charAt(0).toUpperCase() +
                                car.type?.slice(1)}
                            </div>
                          </div>
                          <div className="space-y-3">
                            <h4 className="text-lg sm:text-xl font-bold text-gray-800">
                              {car.name}
                            </h4>
                            <div className="flex flex-wrap gap-2 mb-3">
                              {car.features?.slice(0, 4).map((feature, idx) => (
                                <span
                                  key={idx}
                                  className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full"
                                >
                                  {feature}
                                </span>
                              ))}
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                              <div className="text-center sm:text-left">
                                <span className="text-2xl sm:text-3xl font-bold text-red-700">
                                  {getRentalRate(car)}
                                </span>
                                <span className="text-sm text-gray-500 ml-1">
                                  per {rentalDuration.replace("ly", "")}
                                </span>
                              </div>
                            </div>
                            <button
                              onClick={() => handleRentNow(car)}
                              className="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-bold transition-colors duration-200 shadow-md hover:shadow-lg"
                            >
                              Rent Now
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* All Cars */}
                {allCars.length > 0 && (
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-800 flex items-center">
                      <span className="w-1 h-8 bg-green-500 mr-4 rounded-full"></span>
                      More Rental Options
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                      {allCars.map((car, index) => (
                        <div
                          key={car.id || index}
                          className="bg-gray-50 hover:bg-gray-100 p-4 sm:p-6 rounded-xl transition-all duration-300 border border-gray-200 hover:border-green-200 hover:shadow-lg group"
                        >
                          <div className="relative overflow-hidden rounded-xl mb-4">
                            <img
                              src={car.image}
                              alt={car.name}
                              className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                            <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-800">
                              {car.type?.charAt(0).toUpperCase() +
                                car.type?.slice(1)}
                            </div>
                          </div>
                          <div className="space-y-3">
                            <h4 className="text-lg font-bold text-gray-800">
                              {car.name}
                            </h4>
                            <div className="flex flex-wrap gap-1 mb-2">
                              {car.features?.slice(0, 3).map((feature, idx) => (
                                <span
                                  key={idx}
                                  className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full"
                                >
                                  {feature}
                                </span>
                              ))}
                            </div>
                            <div className="text-center">
                              <span className="text-xl sm:text-2xl font-bold text-red-700">
                                {getRentalRate(car)}
                              </span>
                              <span className="text-sm text-gray-500 ml-1">
                                per {rentalDuration.replace("ly", "")}
                              </span>
                            </div>
                            <button
                              onClick={() => handleRentNow(car)}
                              className="w-full bg-gray-800 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-bold transition-colors duration-200"
                            >
                              Rent Now
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* No Cars Message */}
                {filteredCars.length === 0 && (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">🚗</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      No Cars Available
                    </h3>
                    <p className="text-gray-600">
                      Try adjusting your filters or check back soon!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Rental Information Section */}
        <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 bg-gradient-to-br from-gray-100 to-gray-200">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center text-gray-800">
              Why Choose Our Rental Service?
            </h2>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Flexible Rates */}
                <div className="p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-blue-50 to-blue-100">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-white">📅</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">
                      Flexible Rental Periods
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
                    Choose from daily, weekly, or monthly rental options. Our
                    flexible terms accommodate short trips, extended vacations,
                    or long-term transportation needs.
                  </p>
                  <ul className="text-sm sm:text-base text-gray-600 mb-6 space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-700 rounded-full mr-3"></span>
                      Daily rates starting from $40
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-700 rounded-full mr-3"></span>
                      Weekly discounts available
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-700 rounded-full mr-3"></span>
                      Monthly packages for long stays
                    </li>
                  </ul>
                  <button className="w-full bg-red-700 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-bold transition-colors duration-200 shadow-md hover:shadow-lg">
                    View All Rates
                  </button>
                </div>

                {/* Premium Service */}
                <div className="p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-green-50 to-green-100">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-white">⭐</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">
                      Premium Service
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
                    All our vehicles are thoroughly cleaned, maintained, and
                    inspected. Enjoy 24/7 roadside assistance and comprehensive
                    insurance coverage.
                  </p>
                  <ul className="text-sm sm:text-base text-gray-600 mb-6 space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      24/7 customer support
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      Free roadside assistance
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      Comprehensive insurance included
                    </li>
                  </ul>
                  <button className="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-bold transition-colors duration-200 shadow-md hover:shadow-lg">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-6 sm:py-8 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm sm:text-base text-gray-300">
              &copy; 2024 Best Cars Rental. All rights reserved.
            </p>
            <nav className="flex items-center gap-4 sm:gap-6">
              <Link
                to="/"
                className="hover:text-blue-400 transition-colors duration-200 text-sm sm:text-base font-medium"
              >
                Home
              </Link>
              <Link
                to="/help"
                className="hover:text-blue-400 transition-colors duration-200 text-sm sm:text-base font-medium"
              >
                Help
              </Link>
              <Link
                to="/contact"
                className="hover:text-blue-400 transition-colors duration-200 text-sm sm:text-base font-medium"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default RentPage;
