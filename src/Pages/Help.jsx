import React from 'react'
import { Link } from 'react-router-dom'
function Help() {
  return (
    <div>
       <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 shadow">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          <Link to="/" className="hover:text-primary-foreground/80" prefetch={false}>
            Best <span className="font-bold"> Cars</span>
          </Link>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 mt-2 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Purschase</p>
          <p className="p2">Hire</p>
        </div>
      </div>
        </div>
      </header>
      <main className="flex-1 bg-background">
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-4xl font-bold mb-6 text-red-600">Help Center</h1>
            <div className="bg-card p-6 rounded-lg shadow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-red-600">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium mb-2">How do I rent a car?</h3>
                      <p>
                        To rent a car, simply visit our Rent a Car page, select the car you'd like to rent, and follow
                        the steps to complete your reservation.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">What is your cancellation policy?</h3>
                      <p>
                        We offer a flexible cancellation policy. You can cancel your reservation up to 24 hours before
                        your scheduled pickup time for a full refund.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">Do you offer delivery?</h3>
                      <p>
                        Yes, we offer delivery to select locations for an additional fee. Please contact our customer
                        service team to inquire about delivery options.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-red-600">Contact Us</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Phone</h3>
                      <p>234-012-345-678</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">Email</h3>
                      <p>support@bestcarscompany.com</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">Address</h3>
                      <p>123 Main Street, Lekki Lagos</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">Business Hours</h3>
                      <p>Monday - Friday: 9am - 5pm</p>
                      <p>Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 BestCars Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link to="/" className="text-xs hover:underline hover:-red-600 underline-offset-4">
           Home
          </Link>
          <Link to="/bestOnes" className="text-xs hover:underline underline-offset-4">
            Best Ones
          </Link>
          <Link to="/invite" className="text-xs hover:underline underline-offset-4">
            Invite Friends
          </Link>
        </nav>
      </footer>
    </div>
    </div>
  )
}

export default Help