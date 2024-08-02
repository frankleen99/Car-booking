import React from "react";

export const Cards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid justify-center md:grid-cols-3 gap-6">
         {/*cards*/}
         <div className="rounded-xl relative">
        {/*overlay*/}
        <div className=" absolute w-[380px] md:w-full lg:w-full h-full bg-black/50 rounded-xl text-white ">
          <p className="font-bold text-2xl px-2 pt-4"> Buy A CAR</p>
          <p className="px-2"> New Cars Added daily</p>
          <button className="border-white bg-white p-2 rounded-lg font-bold text-black mx-2 absolute bottom-4 hover:bg-slate-200"><a href="/BuyPage">Order now</a></button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-[430px] md:w-full lg:w-full object-cover rounded-xl"
        src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
      {/*cards*/}
      <div className="rounded-xl relative">
        {/*overlay*/}
        <div className="absolute w-[380px] md:w-full lg:w-full h-full bg-black/50 rounded-xl text-white ">
          <p className="font-bold text-2xl px-2 pt-4"> Repair A Car</p>
          <p className="px-2"> We are available 24/7</p>
          <button className="border-white bg-white p-2 rounded-lg font-bold text-black mx-2 absolute bottom-4 hover:bg-slate-200"><a href="/RepairPage">Order now</a></button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-[430px]  md:w-full lg:w-full object-cover rounded-xl"
        src="https://images.pexels.com/photos/119435/pexels-photo-119435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
         {/*cards*/}
         <div className="rounded-xl relative">
        {/*overlay*/}
        <div className="absolute w-[380px] md:w-full lg:w-full h-full bg-black/50 rounded-xl text-white ">
          <p className="font-bold text-2xl px-2 pt-4"> Rent A Car</p>
          <p className="px-2"> Tap in for Great Offers</p>
          <button className="border-white bg-white p-2 rounded-lg font-bold text-black mx-2 absolute bottom-4 hover:bg-slate-200"><a href="/RentPage">Order now</a></button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-[430px] md:w-full lg:w-full object-cover rounded-xl"
        src="https://images.pexels.com/photos/21014/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>
    </div>
  );
};

export default Cards;