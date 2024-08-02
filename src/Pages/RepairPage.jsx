import React from "react";
import { Link } from "react-router-dom";

function RepairPage() {
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
              <h1 className="text-4xl font-bold mb-6">Car Repair Services</h1>
              <div className="bg-card p-6 rounded-lg shadow">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      Featured Services
                    </h2>
                    <div className="space-y-4">
                      <div className="bg-muted p-4 rounded-lg">
                        <img
                          src="/placeholder.svg"
                          alt="Oil Change"
                          className="rounded-lg mb-4"
                        />
                        <h3 className="text-lg font-medium mb-2">Oil Change</h3>
                        <p className="text-muted-foreground mb-4">$49.99</p>
                        <button className="p-3 bg-red-500 px-9 text-white rounded-md hover:bg-red-800 transition-colors duration-300">
                          Schedule Now
                        </button>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <img
                          src="/placeholder.svg"
                          alt="Brake Repair"
                          className="rounded-lg mb-4"
                        />
                        <h3 className="text-lg font-medium mb-2">
                          Brake Repair
                        </h3>
                        <p className="text-muted-foreground mb-4">$199.99</p>
                        <button className="p-3 bg-red-500 px-9 text-white rounded-md hover:bg-red-800 transition-colors duration-300">
                          Schedule Now
                        </button>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <img
                          src="/placeholder.svg"
                          alt="Engine Repair"
                          className="rounded-lg mb-4"
                        />
                        <h3 className="text-lg font-medium mb-2">
                          Engine Repair
                        </h3>
                        <p className="text-muted-foreground mb-4">$599.99</p>
                        <button className="p-3 bg-red-500 px-9 text-white rounded-md hover:bg-red-800 transition-colors duration-300">
                          Schedule Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">All Services</h2>
                    <div className="space-y-4">
                      <div className="bg-muted p-4 rounded-lg">
                        <img
                          src="/placeholder.svg"
                          alt="Tire Rotation"
                          className="rounded-lg mb-4"
                        />
                        <h3 className="text-lg font-medium mb-2">
                          Tire Rotation
                        </h3>
                        <p className="text-muted-foreground mb-4">$29.99</p>
                        <button className="p-3 bg-red-500 px-9 text-white rounded-md hover:bg-red-800 transition-colors duration-300">
                          Schedule Now
                        </button>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <img
                          src="/placeholder.svg"
                          alt="Transmission Service"
                          className="rounded-lg mb-4"
                        />
                        <h3 className="text-lg font-medium mb-2">
                          Transmission Service
                        </h3>
                        <p className="text-muted-foreground mb-4">$299.99</p>
                        <button className="p-3 bg-red-500 px-9 text-white rounded-md hover:bg-red-800 transition-colors duration-300">
                          Schedule Now
                        </button>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <img
                          src="/placeholder.svg"
                          alt="Battery Replacement"
                          className="rounded-lg mb-4"
                        />
                        <h3 className="text-lg font-medium mb-2">
                          Battery Replacement
                        </h3>
                        <p className="text-muted-foreground mb-4">$99.99</p>
                        <button className="p-3 bg-red-500 px-9 text-white rounded-md hover:bg-red-800 transition-colors duration-300">
                          Schedule Now
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
              <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
              <div className="bg-card p-6 rounded-lg shadow">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4">
                      Expert Technicians
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Our team of certified technicians have years of experience
                      and use the latest tools and equipment to ensure your car
                      is repaired correctly.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Guaranteed Work</h3>
                    <p className="text-muted-foreground mb-4">
                      We stand behind our work with a 12-month/12,000-mile
                      warranty on all repairs, so you can drive with confidence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="bg-primary text-primary-foreground py-6 px-6 shadow">
          <div className="container mx-auto flex items-center justify-between">
            <p>&copy; 2024 Car Repair. All rights reserved.</p>
            <nav className="flex items-center gap-4">
              <Link to="/">
                <a className="hover:text-primary-foreground/80">Home</a>
              </Link>
              <Link to="/help">
                <a className="hover:text-primary-foreground/80">Help</a>
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default RepairPage;
