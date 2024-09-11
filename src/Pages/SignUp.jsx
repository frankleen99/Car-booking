import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <>
       <header className="bg-primary text-primary-foreground py-4 px-6 shadow">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          <Link to="/" className="hover:text-primary-foreground/80">
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
      <div className="mt-[50px] min-h-[500px] flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
          <h2 className="text-2xl font-bold mb-6 text-red-500">
            Sign up to get started
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="mr-2"
              />
              <label className="text-gray-700">Remember Me</label>
            </div>
            <button
              type="submit"
              className="w-full bg-red-700 text-white py-2 rounded-lg hover:bg-red-800 transition duration-200"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default SignUp;