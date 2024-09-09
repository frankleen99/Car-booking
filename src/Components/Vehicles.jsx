import React, { useEffect, useState } from "react";

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

  useEffect(() => {
    const jsonEndpoint = `http://localhost:8000/cars`;

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
    const jsonEndpoint = `http://localhost:8000/cars`;
    
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
      });
  };

  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="text-center">
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl">FIND YOUR DREAM CAR</h1>
      </div>
      <div className="text-center my-4">
        <p className="text-red-600 font-medium text-sm">
          With the click of a button you can find a car that matches your taste
        </p>
      </div>
      <div className="justify-center items-center shadow-lg rounded-md bg-slate-100 md:mx-[20%] lg:mx-[20%] mx-[10%] md:h-[300px] lg:h-[300px] h-[470px]">
        <h1 className="font-bold text-3xl text-center pt-5">SEARCH CARS</h1>
        <div className="self-center grid md:gap-3 lg:gap-3 grid-row md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 p-4">
          <label className="font-bold text-md lg:text-2xl xl:text-2xl" htmlFor="Car Brand">CAR BRAND</label>
          <select className="md:mb-6 lg:mb-6 py-2" onChange={handleCarBrandChange}>
            <option value="">Select Brand</option>
            {carBrand.map(brand => (
              <option key={brand.id} value={brand.brand}>
                {brand.brand}
              </option>
            ))}
          </select>

          <label className="font-bold text-md lg:mt-0 xl:mt-0 mt-4 lg:text-2xl xl:text-2xl" htmlFor="Type of Car">TYPE OF CAR</label>
          <select className="md:mb-6 lg:mb-6 py-2" onChange={handleCarTypeChange}>
            <option value="">Select Car Type</option>
            {carType.map(type => (
              <option key={type.id} value={type.type}>
                {type.type}
              </option>
            ))}
          </select>

          <label className="font-bold text-md md:mt-0 lg:mt-0 mt-4 lg:text-2xl xl:text-2xl" htmlFor="Transmission">TRANSMISSION</label>
          <select className="py-2" onChange={handleCarTransmissionChange}>            
            <option valu e="">Select Transmission</option>
            {transmission.map(trans => (
              <option key={trans.id} value={trans.transmission}>
                {trans.transmission}
              </option>
            ))}
          </select>

          <label className="font-bold text-md lg:mt-0 sm:mt-0 mt-4 lg:text-2xl xl:text-2xl" htmlFor="Year">YEAR</label>
          <select className="py-2" onChange={handleCarYearChange}>
            <option value="">Select Year</option>
            {year.map(carYear => (
              <option key={carYear.id} value={carYear.year}>
                {carYear.year}
              </option> 
            ))}
          </select>
        </div>
        <div className="flex justify-center items-center">
          <button onClick={clickHandler} type="submit" className="bg-slate-400 px-14 py-2 md:mt-6 lg:mt-6 mt-2 rounded-lg font-bold text-black hover:text-white hover:bg-slate-900">
            SEARCH
          </button>
        </div>
      </div>
      
      {/* Displaying Filtered Cars */}
      {noResults ? (
        <div className="mt-10 text-center text-red-600 font-bold">
          No vehicles match your search criteria.
        </div>
      ) : (
        filteredCars.length > 0 && (
          <div className="mt-10">
            <h2 className="text-center text-2xl font-bold mb-6">Search Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCars.map(car => (
                <div key={car.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                  <img src={car.image} alt={car.brand} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-bold">{car.brand}</h3>
                    <p className="text-sm text-gray-600">{car.type}</p>
                    <p className="text-sm text-gray-600">{car.transmission}</p>
                    <p className="text-sm text-gray-600">{car.year}</p>
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