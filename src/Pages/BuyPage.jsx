import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BuyPage() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCar, setSelectedCar] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [sortBy, setSortBy] = useState('name'); // 'name', 'price', 'year'

  useEffect(() => {
    const jsonEndpoint = `http://localhost:3000/buyPage`;

    fetch(jsonEndpoint)
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching data", error);
        setLoading(false);
      });
  }, []);

  const handleBuyNow = (car) => {
    setSelectedCar(car);
    // Here you would typically navigate to checkout or open a purchase modal
    alert(`Starting purchase process for ${car.name} - ${car.price}`);
  };

  const handleFinanceClick = () => {
    alert("Redirecting to financing application...");
  };

  const handleTradeInClick = () => {
    alert("Starting trade-in evaluation process...");
  };

  const sortedCars = [...cars].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return parseFloat(a.price.replace(/[$,]/g, '')) - parseFloat(b.price.replace(/[$,]/g, ''));
      case 'year':
        return (b.year || 0) - (a.year || 0);
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const featuredCars = sortedCars.slice(0, 2);
  const allCars = sortedCars.slice(2);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-red-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-xl font-medium">Loading our amazing cars...</p>
          <p className="text-gray-500 text-sm mt-2">Finding the perfect ride for you</p>
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
              <span className="bg-red-700 text-white rounded-full px-4 py-2 font-medium">Purchase</span>
              <span className="px-4 py-2 text-gray-700">Buy</span>
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
        <section className="bg-gradient-to-br from-red-50 to-gray-100 py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
          <div className="container mx-auto max-w-7xl text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6">
              Find Your Dream Car
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8">
              Discover our premium collection of quality vehicles. From luxury sedans to rugged SUVs, 
              find the perfect car that matches your lifestyle and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => document.getElementById('cars-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Browse Cars
              </button>
              <button 
                onClick={handleFinanceClick}
                className="w-full sm:w-auto border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200"
              >
                Get Financing
              </button>
            </div>
          </div>
        </section>

        {/* Cars Section */}
        <section id="cars-section" className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
          <div className="container mx-auto max-w-7xl">
            {/* Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                  Available Cars
                </h2>
                <p className="text-gray-600">
                  {cars.length} vehicles available
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white text-sm sm:text-base"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                  <option value="year">Sort by Year</option>
                </select>
                
                <div className="flex bg-gray-200 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      viewMode === 'grid' 
                        ? 'bg-white text-gray-800 shadow-sm' 
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    Grid
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      viewMode === 'list' 
                        ? 'bg-white text-gray-800 shadow-sm' 
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    List
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-6 sm:p-8 lg:p-10">
                
                {/* Featured Cars */}
                {featuredCars.length > 0 && (
                  <div className="mb-10 sm:mb-12">
                    <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-800 flex items-center">
                      <span className="w-1 h-8 bg-red-500 mr-4 rounded-full"></span>
                      Featured Cars
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                      {featuredCars.map((car, index) => (
                        <div key={index} className="bg-gradient-to-br from-red-50 to-gray-50 hover:from-red-100 hover:to-gray-100 p-4 sm:p-6 rounded-xl transition-all duration-300 border-2 border-red-100 hover:border-red-200 hover:shadow-lg group">
                          <div className="relative overflow-hidden rounded-xl mb-4">
                            <img
                              src={car.image}
                              alt={car.name}
                              className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                              Featured
                            </div>
                          </div>
                          <div className="space-y-3">
                            <h4 className="text-lg sm:text-xl font-bold text-gray-800">
                              {car.name}
                            </h4>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                              <span className="text-2xl sm:text-3xl font-bold text-red-500">
                                {car.price}
                              </span>
                              {car.year && (
                                <span className="text-sm text-gray-500 bg-gray-200 px-3 py-1 rounded-full w-fit">
                                  {car.year}
                                </span>
                              )}
                            </div>
                            <button 
                              onClick={() => handleBuyNow(car)}
                              className="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-bold transition-colors duration-200 shadow-md hover:shadow-lg"
                            >
                              Buy Now
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
                      <span className="w-1 h-8 bg-blue-500 mr-4 rounded-full"></span>
                      All Cars
                    </h3>
                    <div className={
                      viewMode === 'grid' 
                        ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                        : "space-y-6"
                    }>
                      {allCars.map((car, index) => (
                        <div key={index} className={
                          viewMode === 'grid'
                            ? "bg-gray-50 hover:bg-gray-100 p-4 sm:p-6 rounded-xl transition-all duration-300 border border-gray-200 hover:border-blue-200 hover:shadow-lg group"
                            : "bg-gray-50 hover:bg-gray-100 p-4 sm:p-6 rounded-xl transition-all duration-300 border border-gray-200 hover:border-blue-200 hover:shadow-lg flex flex-col sm:flex-row gap-4 sm:gap-6"
                        }>
                          <div className={
                            viewMode === 'grid'
                              ? "relative overflow-hidden rounded-xl mb-4"
                              : "sm:w-64 sm:h-48 w-full h-48 rounded-xl overflow-hidden flex-shrink-0"
                          }>
                            <img
                              src={car.image}
                              alt={car.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                          </div>
                          <div className={viewMode === 'grid' ? "space-y-3" : "flex-1 flex flex-col justify-between"}>
                            <div>
                              <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                                {car.name}
                              </h4>
                              <div className={
                                viewMode === 'grid'
                                  ? "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4"
                                  : "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 mb-4"
                              }>
                                <span className="text-xl sm:text-2xl font-bold text-blue-500">
                                  {car.price}
                                </span>
                                {car.year && (
                                  <span className="text-sm text-gray-500 bg-gray-200 px-3 py-1 rounded-full w-fit">
                                    {car.year}
                                  </span>
                                )}
                              </div>
                            </div>
                            <button 
                              onClick={() => handleBuyNow(car)}
                              className={
                                viewMode === 'grid'
                                  ? "w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-bold transition-colors duration-200"
                                  : "w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-bold transition-colors duration-200"
                              }
                            >
                              Buy Now
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* No Cars Message */}
                {cars.length === 0 && (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">🚗</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">No Cars Available</h3>
                    <p className="text-gray-600">Check back soon for new arrivals!</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Financing Options Section */}
        <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 bg-gradient-to-br from-gray-100 to-gray-200">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center text-gray-800">
              Financing & Trade-In Options
            </h2>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Financing */}
                <div className="p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-green-50 to-green-100">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-white">💰</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">
                      Flexible Financing
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
                    We offer a variety of financing options to help you purchase your dream car. 
                    Our team can work with you to find the best loan terms and rates that fit your budget.
                  </p>
                  <ul className="text-sm sm:text-base text-gray-600 mb-6 space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      Competitive interest rates
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      Flexible payment terms
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      Quick approval process
                    </li>
                  </ul>
                  <button 
                    onClick={handleFinanceClick}
                    className="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-bold transition-colors duration-200 shadow-md hover:shadow-lg"
                  >
                    Apply for Financing
                  </button>
                </div>

                {/* Trade-In */}
                <div className="p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-blue-50 to-blue-100">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-white">🔄</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">
                      Vehicle Trade-In
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
                    Looking to trade in your current vehicle? We offer competitive trade-in values 
                    and can apply the credit towards your new car purchase, making it easier than ever.
                  </p>
                  <ul className="text-sm sm:text-base text-gray-600 mb-6 space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      Free vehicle appraisal
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      Competitive trade values
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      Instant credit application
                    </li>
                  </ul>
                  <button 
                    onClick={handleTradeInClick}
                    className="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-bold transition-colors duration-200 shadow-md hover:shadow-lg"
                  >
                    Get Trade-In Value
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
              &copy; 2024 Best Cars Sales. All rights reserved.
            </p>
            <nav className="flex items-center gap-4 sm:gap-6">
              <Link 
                to="/" 
                className="hover:text-red-400 transition-colors duration-200 text-sm sm:text-base font-medium"
              >
                Home
              </Link>
              <Link 
                to="/help" 
                className="hover:text-red-400 transition-colors duration-200 text-sm sm:text-base font-medium"
              >
                Help
              </Link>
              <Link 
                to="/contact" 
                className="hover:text-red-400 transition-colors duration-200 text-sm sm:text-base font-medium"
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

export default BuyPage;