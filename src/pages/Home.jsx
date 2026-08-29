
import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 mt-4">

      {/* Hero Section */}
      <section className="bg-gray-900 text-white min-h-[500px] flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-center w-full">

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to <span className="text-red-500">MovieBook</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Book your favorite movies, choose your theater,
            select your seats and enjoy your movie experience.
          </p>

          <button className="bg-red-500 hover:bg-red-600 px-8 py-3 rounded-lg font-semibold transition">
            Explore Movies
          </button>

        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Book Your Movie Easily
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Feature 1 */}
            <div className="text-center p-6 rounded-xl shadow-md">
              <div className="text-5xl mb-4">
                🎬
              </div>

              <h3 className="text-xl font-bold mb-3">
                Choose Movies
              </h3>

              <p className="text-gray-500">
                Browse and select your favorite movies.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 rounded-xl shadow-md">
              <div className="text-5xl mb-4">
                🏢
              </div>

              <h3 className="text-xl font-bold mb-3">
                Select Theater
              </h3>

              <p className="text-gray-500">
                Choose a theater and your preferred showtime.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 rounded-xl shadow-md">
              <div className="text-5xl mb-4">
                💺
              </div>

              <h3 className="text-xl font-bold mb-3">
                Select Seats
              </h3>

              <p className="text-gray-500">
                Pick your favorite seats and confirm your booking.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Call To Action */}
      <section className="bg-red-500 text-white py-14">

        <div className="text-center px-6">

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Watch a Movie?
          </h2>

          <p className="mb-7 text-lg">
            Find a movie and book your tickets today.
          </p>

          <button className="bg-white text-red-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Book Now
          </button>

        </div>

      </section>

    </div>
  );
}

export default Home;
