"use client";
import Cards from "@/components/Cards";
import axios from "axios";
import { useEffect, useState } from "react";


export default function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);


  useEffect(() => {
    getMovies();
  }, [page]);

  const getMovies = async () => {
    try {
      const response = await axios.get(`/api/movies?page=${page}`);
      setMovies(response.data.results);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div>
        <h1 className="text-center p-10 font-bold text-3xl underline drop-shadow-md">Popular Movies</h1>
        <div className="flex flex-wrap gap-10 justify-center items-center">
          {movies.map((movie) => (
            <Cards key={movie?.id} movie={movie} />
          )
          )}
        </div>
      </div>
      {/* Pagination button */}
      <div className="my-10 flex justify-center  items-center">
        <button onClick={() => {
          setPage(page - 1);
        }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Prev
        </button>
        <span className="font-bold text-lg py-2 px-4 rounded">
          {page}
        </span>
        <button onClick={() => {
          setPage(page + 1);
        }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Next
        </button>
      </div>
    </>
  );
}
