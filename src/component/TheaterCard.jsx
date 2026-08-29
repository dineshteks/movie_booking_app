
import React from "react";
import theaterData from './../data/theaterData';

function TheaterCard({ theater, onSelectShow }) {
  return (
    <>
    <h1 className="text-cyan-700 font-bold">select theater:</h1>
    {theater.map((t)=>
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition duration-300">

      {/* Theater Details */}
      <div className="flex flex-col md:flex-row justify-between gap-4">

        <div>
          <h2 className="text-xl font-bold text-gray-900">
            {t.name}
          </h2>

          <p className="text-gray-600 mt-1">
            📍 {t.location}
          </p>

          <p className="text-sm text-gray-500 mt-1">
            {t.address}
          </p>

          <p className="text-sm text-gray-500 mt-2">
            🚗 {t.distance}
          </p>
        </div>

        {/* Screens */}
        <div>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
            {t.screens} Screens
          </span>
        </div>

      </div>

      {/* Facilities */}
      <div className="flex flex-wrap gap-2 mt-4">
        {t.facilities?.map((facility, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
          >
            {facility}
          </span>
        ))}
      </div>

      {/* Divider */}
      <hr className="my-5" />

      {/* Showtime */}
      <h3 className="font-semibold text-gray-800 mb-3">
        Select Showtime
      </h3>

      <div className="flex flex-wrap gap-3">

        {t.showtimes?.map((showtime) => (
          <button
            key={showtime}
            onClick={() => onSelectShow(theater, showtime)}
            className="border border-red-500 text-red-500 px-4 py-2 rounded-lg
                       hover:bg-red-500 hover:text-white transition duration-300"
          >
            {showtime}
          </button>
        ))}

      </div>

    </div>)}
    </>
  );
}

export default TheaterCard;