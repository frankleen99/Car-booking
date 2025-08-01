import { useState, useEffect } from "react";
import { Users, Car, Smile } from "lucide-react";

const WriteUp = () => {
  const [counts, setCounts] = useState({
    clients: 0,
    cars: 0,
    happy: 0
  });

  const targetValues = {
    clients: 9874,
    cars: 7894,
    happy: 4784
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60; // Number of animation steps
    const stepDuration = duration / steps;

    const intervals = [];

    // Animate each counter
    Object.keys(targetValues).forEach(key => {
      const target = targetValues[key];
      const increment = target / steps;
      let current = 0;
      let step = 0;

      const interval = setInterval(() => {
        step++;
        current = Math.min(Math.ceil(increment * step), target);
        
        setCounts(prev => ({
          ...prev,
          [key]: current
        }));

        if (current >= target) {
          clearInterval(interval);
        }
      }, stepDuration);

      intervals.push(interval);
    });

    // Cleanup intervals on component unmount
    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        
        {/* Worldwide Clients Card */}
        <div className="flex flex-col bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
          <div className="flex justify-center mb-4">
            <Users className="text-red-500" size={64} />
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-gray-800 mb-2">{counts.clients.toLocaleString()}+</h1>
          <h2 className="text-gray-600 font-medium text-sm md:text-base">Worldwide Clients</h2>
        </div>

        {/* Car Rented Card */}
        <div className="flex flex-col bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
          <div className="flex justify-center mb-4">
            <Car className="text-red-500" size={64} />
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-gray-800 mb-2">{counts.cars.toLocaleString()}+</h1>
          <h2 className="text-gray-600 font-medium text-sm md:text-base">Cars Rented</h2>
        </div>

        {/* Happy Clients Card */}
        <div className="flex flex-col bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
          <div className="flex justify-center mb-4">
            <Smile className="text-red-500" size={64} />
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-gray-800 mb-2">{counts.happy.toLocaleString()}+</h1>
          <h2 className="text-gray-600 font-medium text-sm md:text-base">Happy Clients</h2>
        </div>

      </div>
    </div>
  );
};

export default WriteUp;