
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10">

      {/* Footer Main Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold text-red-500 mb-4">
              MovieBook
            </h2>

            <p className="text-gray-400 leading-6">
              Book your favorite movies, choose your theater,
              select your seats and enjoy your movie experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/" className="hover:text-red-500">
                  Home
                </a>
              </li>

              <li>
                <a href="/movies" className="hover:text-red-500">
                  Movies
                </a>
              </li>

              <li>
                <a href="/theaters" className="hover:text-red-500">
                  Theaters
                </a>
              </li>

              <li>
                <a href="/bookings" className="hover:text-red-500">
                  My Bookings
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Support
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-red-500">
                  Help Center
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-red-500">
                  Contact Us
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-red-500">
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-red-500">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Contact Us
            </h3>

            <p className="text-gray-400 mb-2">
              📧 support@moviebook.com
            </p>

            <p className="text-gray-400 mb-2">
              📞 +91 98765 43210
            </p>

            <p className="text-gray-400">
              📍 Hyderabad, India
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">

          <p className="text-gray-400 text-sm">
            © 2026 MovieBook. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;

