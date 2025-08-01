import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function RepairPage() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const jsonEndpoint = `http://localhost:3000/cars`;

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

  const featuredServices = [
    {
      id: 1,
      name: "Oil Change",
      price: "$49.99",
      image: "https://images.pexels.com/photos/279949/pexels-photo-279949.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Keep your engine running smoothly with regular oil changes",
      duration: "30 mins"
    },
    {
      id: 2,
      name: "Brake Repair",
      price: "$199.99",
      image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Professional brake inspection and repair services",
      duration: "2-3 hours"
    },
    {
      id: 3,
      name: "Engine Repair",
      price: "$599.99",
      image: "https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Complete engine diagnostics and repair solutions",
      duration: "4-6 hours"
    }
  ];

  const allServices = [
    {
      id: 4,
      name: "Tire Rotation",
      price: "$29.99",
      image: "https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Extend tire life with professional rotation service",
      duration: "45 mins"
    },
    {
      id: 5,
      name: "Transmission Service",
      price: "$299.99",
      image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Complete transmission fluid change and inspection",
      duration: "2-4 hours"
    },
    {
      id: 6,
      name: "Battery Replacement",
      price: "$99.99",
      image: "https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Professional battery testing and replacement",
      duration: "1 hour"
    }
  ];

  const handleScheduleClick = (service) => {
    setSelectedService(service);
    // Here you would typically open a booking modal or navigate to booking page
    alert(`Scheduling ${service.name} - ${service.price}`);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading services...</p>
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
              <span className="bg-red-700 text-white rounded-full px-4 py-2 font-medium">Repair</span>
              <span className="px-4 py-2 text-gray-700">Service</span>
            </div>
          </div>
          
          {/* Mobile menu button could go here */}
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
              Professional Car Repair Services
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8">
              Expert technicians, quality parts, and guaranteed workmanship. 
              Get your car back on the road with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="w-full sm:w-auto bg-red-700 hover:bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Schedule Service
              </button>
              <button className="w-full sm:w-auto border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200">
                Get Quote
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
                  
                  {/* Featured Services */}
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800 flex items-center">
                      <span className="w-1 h-8 bg-red-700 mr-4 rounded-full"></span>
                      Featured Services
                    </h2>
                    <div className="space-y-4 sm:space-y-6">
                      {featuredServices.map((service) => (
                        <div key={service.id} className="bg-gray-50 hover:bg-gray-100 p-4 sm:p-6 rounded-xl transition-all duration-300 border border-gray-200 hover:border-red-200 hover:shadow-lg">
                          <div className="flex flex-col sm:flex-row gap-4">
                            <div className="sm:w-32 sm:h-24 w-full h-40 rounded-lg overflow-hidden flex-shrink-0">
                              <img
                                src={service.image}
                                alt={service.name}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                loading="lazy"
                              />
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-0">
                                  {service.name}
                                </h3>
                                <span className="text-xl sm:text-2xl font-bold text-red-700">
                                  {service.price}
                                </span>
                              </div>
                              <p className="text-gray-600 text-sm sm:text-base mb-2">
                                {service.description}
                              </p>
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                                <span className="text-xs sm:text-sm text-gray-500 bg-gray-200 px-3 py-1 rounded-full w-fit">
                                  Duration: {service.duration}
                                </span>
                                <button 
                                  onClick={() => handleScheduleClick(service)}
                                  className="w-full sm:w-auto bg-red-700 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 text-sm sm:text-base"
                                >
                                  Schedule Now
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* All Services */}
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800 flex items-center">
                      <span className="w-1 h-8 bg-blue-500 mr-4 rounded-full"></span>
                      Additional Services
                    </h2>
                    <div className="space-y-4 sm:space-y-6">
                      {allServices.map((service) => (
                        <div key={service.id} className="bg-gray-50 hover:bg-gray-100 p-4 sm:p-6 rounded-xl transition-all duration-300 border border-gray-200 hover:border-blue-200 hover:shadow-lg">
                          <div className="flex flex-col sm:flex-row gap-4">
                            <div className="sm:w-32 sm:h-24 w-full h-40 rounded-lg overflow-hidden flex-shrink-0">
                              <img
                                src={service.image}
                                alt={service.name}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                loading="lazy"
                              />
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-0">
                                  {service.name}
                                </h3>
                                <span className="text-xl sm:text-2xl font-bold text-blue-500">
                                  {service.price}
                                </span>
                              </div>
                              <p className="text-gray-600 text-sm sm:text-base mb-2">
                                {service.description}
                              </p>
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                                <span className="text-xs sm:text-sm text-gray-500 bg-gray-200 px-3 py-1 rounded-full w-fit">
                                  Duration: {service.duration}
                                </span>
                                <button 
                                  onClick={() => handleScheduleClick(service)}
                                  className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 text-sm sm:text-base"
                                >
                                  Schedule Now
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 bg-gradient-to-br from-gray-100 to-gray-200">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center text-gray-800">
              Why Choose Our Service?
            </h2>
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-xl">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">🔧</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-800">
                    Expert Technicians
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Our certified technicians have years of experience and use the latest tools 
                    and equipment to ensure your car is repaired correctly the first time.
                  </p>
                </div>

                <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">✅</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-800">
                    Guaranteed Work
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    We stand behind our work with a comprehensive 12-month/12,000-mile warranty 
                    on all repairs, so you can drive with complete confidence.
                  </p>
                </div>

                <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl md:col-span-2 lg:col-span-1">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">⚡</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-800">
                    Quick Turnaround
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Most services completed same day. Emergency repairs available 24/7. 
                    We respect your time and get you back on the road quickly.
                  </p>
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
              &copy; 2024 Best Cars Repair. All rights reserved.
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

export default RepairPage;