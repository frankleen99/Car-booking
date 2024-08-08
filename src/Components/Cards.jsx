import React from "react";

export const Cards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
      {/* Card */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white flex flex-col justify-between p-4">
          <div>
            <p className="font-bold text-2xl">Buy A Car</p>
            <p>New Cars Added daily</p>
          </div>
          <button className="border-white bg-white text-black font-bold rounded-lg p-2 hover:bg-slate-200">
            <a href="/BuyPage">Buy now</a>
          </button>
        </div>
        <img
          className="h-[160px] sm:h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Car"
        />
      </div>
      {/* Card */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white flex flex-col justify-between p-4">
          <div>
            <p className="font-bold text-2xl">Repair A Car</p>
            <p>We are available 24/7</p>
          </div>
          <button className="border-white bg-white text-black font-bold rounded-lg p-2 hover:bg-slate-200">
            <a href="/RepairPage">Repair now</a>
          </button>
        </div>
        <img
          className="h-[160px] sm:h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/119435/pexels-photo-119435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Car Repair"
        />
      </div>
      {/* Card */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white flex flex-col justify-between p-4">
          <div>
            <p className="font-bold text-2xl">Rent A Car</p>
            <p>Tap in for Great Offers</p>
          </div>
          <button className="border-white bg-white text-black font-bold rounded-lg p-2 hover:bg-slate-200">
            <a href="/RentPage">Rent now</a>
          </button>
        </div>
        <img
          className="h-[160px] sm:h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/21014/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
          alt="Car Rental"
        />
      </div>
    </div>
  );
};

export default Cards;