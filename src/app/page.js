"use client";
import Cards from "@/components/Cards";
import axios from "axios";
import { useEffect, useState } from "react";


export default function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [displayButton, setDisplayButton] = useState(true);

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

  const searchMovies = async () => {
    try {
      setDisplayButton(false)
      const response = await axios.get(`/api/movies/search?query=${search}`);
      setMovies(response.data.results);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="">
        <div className="flex justify-center py-5 mt-5">
          <form class="form shadow-md">
            <button onClick={
              (e) => {
                e.preventDefault();
                searchMovies();
              }
            }>
              <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
                <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>
            <input class="input" placeholder="Search for your movie" required="" type="text" onChange={(e) => {
              setSearch(e.target.value);
            }} />
            <button class="reset" type="reset">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </form>
        </div>
        <h1 className="text-center p-5 font-bold text-3xl underline drop-shadow-md">Popular Movies</h1>
        <div className="flex flex-wrap gap-10 justify-center items-center">
          {movies.map((movie) => (
            <Cards key={movie?.id} movie={movie} />
          )
          )}
        </div>
      </div>
      {/* Pagination button */}
      {displayButton && <>
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
      </>}
    </>
  );
}
