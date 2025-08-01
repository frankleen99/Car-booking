import { Link } from "react-router-dom";

export const Cards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-3 sm:p-4 lg:p-6 py-8 sm:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-center">
      {/* Card 1 - Buy A Car */}
      <div className="rounded-xl relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white flex flex-col justify-between p-3 sm:p-4 lg:p-5">
          <div className="flex-1 flex flex-col justify-center sm:justify-start">
            <p className="font-bold text-xl sm:text-2xl lg:text-3xl mb-1 sm:mb-2">
              Buy A Car
            </p>
            <p className="text-sm sm:text-base lg:text-lg opacity-90">
              New Cars Added daily
            </p>
          </div>
          <button className="mt-4 sm:mt-6 border-2 border-white bg-white text-black font-bold rounded-lg p-2 sm:p-3 hover:bg-gray-100 hover:border-gray-100 transition-colors duration-200 text-sm sm:text-base">
            <Link to="/BuyPage" className="block w-full h-full">
              Buy now
            </Link>
          </button>
        </div>
        <img
          className="h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] xl:h-[260px] w-full object-cover"
          src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Car for sale"
          loading="lazy"
        />
      </div>

      {/* Card 2 - Repair A Car */}
      <div className="rounded-xl relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white flex flex-col justify-between p-3 sm:p-4 lg:p-5">
          <div className="flex-1 flex flex-col justify-center sm:justify-start">
            <p className="font-bold text-xl sm:text-2xl lg:text-3xl mb-1 sm:mb-2">
              Repair A Car
            </p>
            <p className="text-sm sm:text-base lg:text-lg opacity-90">
              We are available 24/7
            </p>
          </div>
          <button className="mt-4 sm:mt-6 border-2 border-white bg-white text-black font-bold rounded-lg p-2 sm:p-3 hover:bg-gray-100 hover:border-gray-100 transition-colors duration-200 text-sm sm:text-base">
            <Link to="/RepairPage" className="block w-full h-full">
              Repair now
            </Link>
          </button>
        </div>
        <img
          className="h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] xl:h-[260px] w-full object-cover"
          src="https://images.pexels.com/photos/119435/pexels-photo-119435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Car repair service"
          loading="lazy"
        />
      </div>

      {/* Card 3 - Rent A Car */}
      <div className="rounded-xl relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white flex flex-col justify-between p-3 sm:p-4 lg:p-5">
          <div className="flex-1 flex flex-col justify-center sm:justify-start">
            <p className="font-bold text-xl sm:text-2xl lg:text-3xl mb-1 sm:mb-2">
              Rent A Car
            </p>
            <p className="text-sm sm:text-base lg:text-lg opacity-90">
              Tap in for Great Offers
            </p>
          </div>
          <button className="mt-4 sm:mt-6 border-2 border-white bg-white text-black font-bold rounded-lg p-2 sm:p-3 hover:bg-gray-100 hover:border-gray-100 transition-colors duration-200 text-sm sm:text-base">
            <Link to="/RentPage" className="block w-full h-full">
              Rent now
            </Link>
          </button>
        </div>
        <img
          className="h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] xl:h-[260px] w-full object-cover"
          src="https://images.pexels.com/photos/21014/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
          alt="Car rental service"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Cards;