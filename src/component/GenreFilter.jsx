
import React from "react";

function GenreFilter({ selectedGenre, setSelectedGenre }) {

  const genres = [
    "All",
    "Action",
    "Comedy",
    "Horror",
    "Sci-Fi",
    "Drama",
    "Romance"
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 mt-6">

      {genres.map((genre) => (
        <button
          key={genre}
          onClick={() => setSelectedGenre(genre)}
          className={`px-5 py-2 rounded-full font-medium transition duration-300
            ${
              selectedGenre === genre
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-red-500 hover:text-white"
            }
          `}
        >
          {genre}
        </button>
      ))}

    </div>
  );
}

export default GenreFilter;
