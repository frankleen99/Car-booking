import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BuyPage() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const jsonEndpoint = `http://localhost:8000/buyPage`;

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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 shadow">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
              <Link to="/" className="hover:text-primary-foreground/80">
                Best <span className="font-bold">Cars</span>
              </Link>
            </h1>
            <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 mt-2 text-[14px]">
              <p className="bg-black text-white rounded-full p-2">Purchase</p>
              <p className="p-2">Hire</p>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 bg-background">
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-4xl font-bold mb-6 text-red-600">Buy a Car</h1>
            <div className="bg-card p-6 rounded-lg shadow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Featured Cars</h2>
                  <div className="space-y-4">
                    {cars.slice(0, 2).map((car, index) => (
                      <div key={index} className="bg-muted p-4 rounded-lg">
                        <img
                          src={car.image}
                          alt={car.name}
                          className="rounded-lg mb-4"
                        />
                        <h3 className="text-lg font-medium mb-2">{car.name}</h3>
                        <p className="text-muted-foreground mb-4">
                          {car.price}
                        </p>
                        <button className="p-3 bg-red-600 px-9 text-white rounded-md hover:bg-red-800 transition-colors duration-300">
                          Buy Now
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-red-600">
                    Browse All Cars
                  </h2>
                  <div className="space-y-4">
                    {cars.slice(2).map((car, index) => (
                      <div key={index} className="bg-muted p-4 rounded-lg">
                        <img
                          src={car.image}
                          alt={car.name}
                          className="rounded-lg mb-4"
                        />
                        <h3 className="text-lg font-medium mb-2">{car.name}</h3>
                        <p className="text-muted-foreground mb-4">
                          {car.price}
                        </p>
                        <button className="p-3 bg-red-600 px-9 text-white rounded-md hover:bg-red-800 transition-colors duration-300">
                          Buy Now
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 px-6 bg-muted">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-6">Financing Options</h2>
            <div className="bg-card p-6 rounded-lg shadow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">Financing</h3>
                  <p className="text-muted-foreground mb-4">
                    We offer a variety of financing options to help you purchase
                    your dream car. Our team can work with you to find the best
                    loan terms and rates.
                  </p>
                  <Link
                    to="#"
                    className="bg-primary text-primary-foreground px-4 py-2 hover:underline hover:-red-600 underline-offset-4"
                  >
                    Learn More
                  </Link>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Trade-In</h3>
                  <p className="text-muted-foreground mb-4">
                    Looking to trade in your current vehicle? We offer
                    competitive trade-in values and can apply the credit towards
                    your new car purchase.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-6 px-6 shadow">
        <div className="container mx-auto flex items-center justify-between">
          <p>&copy; 2024 Car Rental. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <Link
              to="/"
              className="hover:underline hover:-red-600 underline-offset-4"
            >
              Home
            </Link>
            <Link
              to="/help"
              className="hover:underline hover:-red-600 underline-offset-4"
            >
              Help
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default BuyPage;
