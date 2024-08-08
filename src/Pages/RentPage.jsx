import React from "react";
import { Link } from "react-router-dom";

function RentPage() {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <header className="bg-primary text-primary-foreground py-4 px-6 shadow">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
                <Link to="/" className="hover:text-primary-foreground/80">
                  Best <span className="font-bold"> Cars</span>
                </Link>
              </h1>
              <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 mt-2 text-[14px]">
                <p className="bg-black text-white rounded-full p-2">Purchase</p>
                <p className="p2">Hire</p>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 bg-background">
          <section className="py-12 px-6">
            <div className="container mx-auto max-w-6xl">
              <h1 className="text-4xl font-bold mb-6">Rent a Car</h1>
              <div className="bg-card p-6 rounded-lg shadow">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Featured Cars</h2>
                    <div className="space-y-4">
                      <div className="bg-muted p-4 rounded-lg">
                        <img
                          src="/placeholder.svg"
                          alt="Car 1"
                          className="rounded-lg mb-4"
                        />
                        <h3 className="text-lg font-medium mb-2">
                          2022 Toyota Camry
                        </h3>
                        <p className="text-muted-foreground mb-4">$25,000</p>
                        <button className="p-3 bg-red-600 px-9 text-white rounded-md hover:bg-red-800 transition-colors duration-300">
                          Rent Now
                        </button>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <img
                          src="/placeholder.svg"
                          alt="Car 2"
                          className="rounded-lg mb-4"
                        />
                        <h3 className="text-lg font-medium mb-2">
                          2021 Honda Civic
                        </h3>
                        <p className="text-muted-foreground mb-4">$20,000</p>
                        <button className="p-3 bg-red-600 px-9 text-white rounded-md hover:bg-red-800 transition-colors duration-300">
                          Rent Now
                        </button>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <img
                          src="/placeholder.svg"
                          alt="Car 3"
                          className="rounded-lg mb-4"
                        />
                        <h3 className="text-lg font-medium mb-2">
                          2023 Ford Mustang
                        </h3>
                        <p className="text-muted-foreground mb-4">$35,000</p>
                        <button className="p-3 bg-red-600 px-9 text-white rounded-md hover:bg-red-800 transition-colors duration-300">
                          Rent Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Browse All Cars</h2>
                    <div className="space-y-4">
                      <div className="bg-muted p-4 rounded-lg">
                        <img
                          src="/placeholder.svg"
                          alt="Car 4"
                          className="rounded-lg mb-4"
                        />
                        <h3 className="text-lg font-medium mb-2">
                          2020 Nissan Altima
                        </h3>
                        <p className="text-muted-foreground mb-4">$18,000</p>
                        <button className="p-3 bg-red-600 px-9 text-white rounded-md hover:bg-red-800 transition-colors duration-300">
                          Rent Now
                        </button>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <img
                          src="/placeholder.svg"
                          alt="Car 5"
                          className="rounded-lg mb-4"
                        />
                        <h3 className="text-lg font-medium mb-2">
                          2021 Hyundai Sonata
                        </h3>
                        <p className="text-muted-foreground mb-4">$22,000</p>
                        <button className="p-3 bg-red-600 px-9 text-white rounded-md hover:bg-red-800 transition-colors duration-300">
                          Rent Now
                        </button>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <img
                          src="/placeholder.svg"
                          alt="Car 6"
                          className="rounded-lg mb-4"
                        />
                        <h3 className="text-lg font-medium mb-2">
                          2022 Subaru Outback
                        </h3>
                        <p className="text-muted-foreground mb-4">$28,000</p>
                        <button className="p-3 bg-red-600 px-9 text-white rounded-md hover:bg-red-800 transition-colors duration-300">
                          Rent Now
                        </button>
                      </div>
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
                      We offer a variety of financing options to help you
                      purchase your dream car. Our team can work with you to
                      find the best loan terms and rates.
                    </p>
                    <Link href="#">
                      <a className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary-foreground hover:text-primary">
                        Learn More
                      </a>
                    </Link>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Trade-In</h3>
                    <p className="text-muted-foreground mb-4">
                      Looking to trade in your current vehicle? We offer
                      competitive trade-in values and can apply the credit
                      towards your new car purchase.
                    </p>
                    <Link href="#">
                      <a className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary-foreground hover:text-primary">
                        Get a Quote
                      </a>
                    </Link>
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
            <Link to="/" className="hover:underline hover:-red-600 underline-offset-4">Home</Link>
            <Link to="/help" className="hover:underline hover:-red-600 underline-offset-4">Help</Link>
            </nav>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default RentPage;
