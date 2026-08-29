
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 md:px-10 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-red-500">
            MovieBook
          </h1>
        </div>

        {/* Navigation Links */}
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

          <a
            href="/bookings"
            className="hover:text-red-500 transition duration-300"
          >
            My Bookings
          </a>
        </div>

        {/* Login Button */}
        <button className="bg-red-500 px-5 py-2 rounded-lg hover:bg-red-600 transition duration-300">
          Login
        </button>

      </div>
    </nav>
  );
}

export default Navbar;

