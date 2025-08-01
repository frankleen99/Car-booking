import { useEffect, useState } from "react";

const Vehicles = () => {
  const [carBrand, setCarBrand] = useState([]);
  const [carType, setCarType] = useState([]);
  const [transmission, setTransmission] = useState([]);
  const [year, setYear] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedTransmission, setSelectedTransmission] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [filteredCars, setFilteredCars] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const jsonEndpoint = `http://localhost:3000/cars`;

    fetch(jsonEndpoint)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setCarBrand([...new Set(data.map(item => ({ id: item.id, brand: item.brand })))]); // unique values
          setCarType([...new Set(data.map(item => ({ id: item.id, type: item.type })))]); // unique values
          setTransmission([...new Set(data.map(item => ({ id: item.id, transmission: item.transmission })))]); // unique values
          setYear([...new Set(data.map(item => ({ id: item.id, year: item.year })))]); // unique values
        } else {
          console.error('API response is not an array:', data);
        }
      })
      .catch((error) => {
        console.error('Error fetching the data:', error);
      });
  }, []);

  const handleCarBrandChange = (e) => {
    setSelectedBrand(e.target.value);
  };
  const handleCarTypeChange = (e) => {
    setSelectedType(e.target.value);
  };
  const handleCarTransmissionChange = (e) => {
    setSelectedTransmission(e.target.value);
  };
  const handleCarYearChange = (e) => {
    setSelectedYear(e.target.value);
  };
  
  const clickHandler = () => {
    setLoading(true);
    const jsonEndpoint = `http://localhost:3000/cars`;
    
    fetch(jsonEndpoint)
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(car => 
          (selectedBrand ? car.brand === selectedBrand : true) &&
          (selectedType ? car.type === selectedType : true) &&
          (selectedTransmission ? car.transmission === selectedTransmission : true) &&
          (selectedYear ? car.year === selectedYear : true)
        );
        setFilteredCars(filtered);
        setNoResults(filtered.length === 0);
      })
      .catch((error) => {
        console.error('Error fetching the filtered data:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const clearFilters = () => {
    setSelectedBrand("");
    setSelectedType("");
    setSelectedTransmission("");
    setSelectedYear("");
    setFilteredCars([]);
    setNoResults(false);
  };

  return (
    <div className="max-w-[1640px] mx-auto p-3 sm:p-4 lg:p-6 min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-6 sm:mb-8 lg:mb-10">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-3 sm:mb-4 text-gray-800">
          FIND YOUR DREAM CAR
        </h1>
        <p className="text-red-600 font-medium text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-4">
          With the click of a button you can find a car that matches your taste
        </p>
      </div>

      {/* Search Form */}
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 shadow-xl rounded-2xl mx-2 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-32 mb-8 sm:mb-12 overflow-hidden">
        <div className="bg-gradient-to-r from-slate-600 to-slate-700 text-white p-4 sm:p-6">
          <h2 className="font-bold text-xl sm:text-2xl md:text-3xl text-center">
            SEARCH CARS
          </h2>
        </div>
        
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-4 xl:gap-6">
            {/* Car Brand */}
            <div className="flex flex-col space-y-2">
              <label className="font-bold text-sm sm:text-base lg:text-lg text-gray-700" htmlFor="carBrand">
                CAR BRAND
              </label>
              <select 
                id="carBrand"
                className="w-full py-2 sm:py-3 px-3 sm:px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-colors text-sm sm:text-base bg-white shadow-sm"
                onChange={handleCarBrandChange}
                value={selectedBrand}
              >
                <option value="">Select Brand</option>
                {carBrand.map(brand => (
                  <option key={brand.id} value={brand.brand}>
                    {brand.brand}
                  </option>
                ))}
              </select>
            </div>

            {/* Car Type */}
            <div className="flex flex-col space-y-2">
              <label className="font-bold text-sm sm:text-base lg:text-lg text-gray-700" htmlFor="carType">
                TYPE OF CAR
              </label>
              <select 
                id="carType"
                className="w-full py-2 sm:py-3 px-3 sm:px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-colors text-sm sm:text-base bg-white shadow-sm"
                onChange={handleCarTypeChange}
                value={selectedType}
              >
                <option value="">Select Car Type</option>
                {carType.map(type => (
                  <option key={type.id} value={type.type}>
                    {type.type}
                  </option>
                ))}
              </select>
            </div>

            {/* Transmission */}
            <div className="flex flex-col space-y-2">
              <label className="font-bold text-sm sm:text-base lg:text-lg text-gray-700" htmlFor="transmission">
                TRANSMISSION
              </label>
              <select 
                id="transmission"
                className="w-full py-2 sm:py-3 px-3 sm:px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-colors text-sm sm:text-base bg-white shadow-sm"
                onChange={handleCarTransmissionChange}
                value={selectedTransmission}
              >            
                <option value="">Select Transmission</option>
                {transmission.map(trans => (
                  <option key={trans.id} value={trans.transmission}>
                    {trans.transmission}
                  </option>
                ))}
              </select>
            </div>

            {/* Year */}
            <div className="flex flex-col space-y-2">
              <label className="font-bold text-sm sm:text-base lg:text-lg text-gray-700" htmlFor="year">
                YEAR
              </label>
              <select 
                id="year"
                className="w-full py-2 sm:py-3 px-3 sm:px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-colors text-sm sm:text-base bg-white shadow-sm"
                onChange={handleCarYearChange}
                value={selectedYear}
              >
                <option value="">Select Year</option>
                {year.map(carYear => (
                  <option key={carYear.id} value={carYear.year}>
                    {carYear.year}
                  </option> 
                ))}
              </select>
            </div>
          </div>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <button 
              onClick={clickHandler} 
              disabled={loading}
              className="w-full sm:w-auto bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 disabled:from-gray-400 disabled:to-gray-500 text-white px-8 sm:px-12 lg:px-16 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base lg:text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none disabled:cursor-not-allowed"
            >
              {loading ? 'SEARCHING...' : 'SEARCH'}
            </button>
            
            <button 
              onClick={clearFilters}
              className="w-full sm:w-auto bg-gray-300 hover:bg-gray-400 text-gray-700 px-8 sm:px-12 lg:px-16 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base lg:text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              CLEAR FILTERS
            </button>
          </div>
        </div>
      </div>
      
      {/* Results Section */}
      {noResults ? (
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 sm:p-8 mx-2 sm:mx-4 text-center">
          <div className="text-red-600 text-4xl sm:text-5xl mb-4">🚗</div>
          <h3 className="text-red-700 font-bold text-lg sm:text-xl mb-2">
            No vehicles found
          </h3>
          <p className="text-red-600 text-sm sm:text-base">
            No vehicles match your search criteria. Try adjusting your filters.
          </p>
        </div>
      ) : (
        filteredCars.length > 0 && (
          <div className="mx-2 sm:mx-4">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                Search Results
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Found {filteredCars.length} vehicle{filteredCars.length !== 1 ? 's' : ''} matching your criteria
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {filteredCars.map(car => (
                <div key={car.id} className="bg-white shadow-lg hover:shadow-xl rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <div className="relative overflow-hidden">
                    <img 
                      src={car.image} 
                      alt={`${car.brand} ${car.type}`} 
                      className="w-full h-40 sm:h-48 md:h-52 object-cover transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                      <span className="text-xs font-semibold text-gray-700">{car.year}</span>
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-5">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 truncate">
                      {car.brand}
                    </h3>
                    <div className="space-y-1 text-sm sm:text-base">
                      <p className="text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        <span className="font-medium">Type:</span> 
                        <span className="ml-1">{car.type}</span>
                      </p>
                      <p className="text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        <span className="font-medium">Transmission:</span> 
                        <span className="ml-1">{car.transmission}</span>
                      </p>
                      <p className="text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                        <span className="font-medium">Year:</span> 
                        <span className="ml-1">{car.year}</span>
                      </p>
                    </div>
                    
                    {car.price && (
                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <p className="text-lg sm:text-xl font-bold text-green-600">
                          ${car.price?.toLocaleString()}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Vehicles;