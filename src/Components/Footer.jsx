import React from 'react'
import { BsInstagram, BsTwitterX } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Company Name</h2>
            <p className="text-gray-400">123 Street Name, City, State, 12345</p>
            <p className="text-gray-400">Email: info@company.com</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Quick Links</h2>
            <ul>
              <li className="mb-2"><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
              <li className="mb-2"><a href="/help" className="text-gray-400 hover:text-white">Help</a></li>
              <li className="mb-2"><a href="/bestones" className="text-gray-400 hover:text-white">BestOnes</a></li>
              <li className="mb-2"><a href="/invite" className="text-gray-400 hover:text-white">Invite Friends</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-bold mb-2">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><FaFacebook/></a>
              <a href="#" className="text-gray-400 hover:text-white"><BsTwitterX/></a>
              <a href="#" className="text-gray-400 hover:text-white"><BsInstagram/></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4">
          <p className="text-center text-gray-400">&copy; 2024 Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer