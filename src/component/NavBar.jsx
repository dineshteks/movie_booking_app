
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 md:px-10 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <div>
          <Link to="/">
            <h1 className="text-2xl font-bold text-red-500">
              MovieBook
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="hover:text-red-500 transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/movies"
            className="hover:text-red-500 transition duration-300"
          >
            Movies
          </Link>

          {/* <Link
            to="/theaters"
            className="hover:text-red-500 transition duration-300"
          >
            Theaters
          </Link> */}

          <Link
            to="/bookings"
            className="hover:text-red-500 transition duration-300"
          >
            My Bookings
          </Link>
        </div>

        {/* Desktop Login Button */}
        <button className="hidden md:block bg-red-500 px-5 py-2 rounded-lg hover:bg-red-600 transition duration-300">
          Login
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-4 border-t border-gray-700 pt-4">
          <div className="flex flex-col gap-4">

            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-red-500 transition duration-300"
            >
              Home
            </Link>

            <Link
              to="/movies"
              onClick={() => setIsOpen(false)}
              className="hover:text-red-500 transition duration-300"
            >
              Movies
            </Link>

            <Link
              to="/theaters"
              onClick={() => setIsOpen(false)}
              className="hover:text-red-500 transition duration-300"
            >
              Theaters
            </Link>

            <Link
              to="/bookings"
              onClick={() => setIsOpen(false)}
              className="hover:text-red-500 transition duration-300"
            >
              My Bookings
            </Link>

            {/* Mobile Login */}
            <button className="bg-red-500 px-5 py-2 rounded-lg hover:bg-red-600 transition duration-300 w-full">
              Login
            </button>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
