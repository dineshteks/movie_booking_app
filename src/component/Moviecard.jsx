
import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import GenreFilter from "./GenreFilter";
import { useNavigate } from "react-router-dom";

function MovieCard({ movie }) {
    const [searchTerm,setSearchTerm]=useState("")
    const [movies,setMovie]=useState(movie)
    const [selectedGenre,setSelectedGenre]=useState("all")
    const navigate=useNavigate()
    useEffect(()=>{
        let filterdata=movie

        if(searchTerm.trim() !== ""){                                            
            filterdata=filterdata.filter((m)=>m.title.toLowerCase().includes(searchTerm.toLowerCase()))
        }
        if(selectedGenre.toLowerCase() !== "all"){
             filterdata=filterdata.filter((m)=>m.genre.toLowerCase().includes(selectedGenre.toLowerCase()))
        }
       setMovie(filterdata)
    },[searchTerm,movie,selectedGenre])

  return (
    <>
       <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
       <GenreFilter selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre}/>
    <div className="flex flex-wrap gap-[50px] mt-3 justify-center content-center">
    {movies.map((m)=>
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">

      {/* Movie Poster */}
      <div className="relative">
        <img
          src={m.image}
          alt={m.title}
          className="w-full h-80 object-cover"
        />

        {/* Rating */}
        <div className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1 rounded-lg">
          ⭐ {m.rating}
        </div>
      </div>

      {/* Movie Details */}
      <div className="p-5">

        <h2 className="text-xl font-bold text-gray-900 mb-2">
          {m.title}
        </h2>

        <div className="flex justify-between text-sm text-gray-500 mb-3">
          <span>{m.genre}</span>
          <span>{m.language}</span>
        </div>

        <p className="text-gray-500 text-sm mb-5">
          ⏱ {m.duration}
        </p>

        {/* Book Button */}
        <button className="w-full bg-red-500 text-white py-2.5 rounded-lg font-semibold hover:bg-red-600 transition duration-300"
         onClick={()=>navigate('/theaters')}>
          Book Now
        </button>

      </div>
    </div>)}
    </div>
    </>
  );

}

export default MovieCard;
