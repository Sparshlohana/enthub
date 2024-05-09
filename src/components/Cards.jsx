import React from 'react';
import Link from 'next/link';

const Cards = ({ movie }) => {
    return (
        <Link href={`/movie/${movie.id}`} className='w-[300px] h-fit flex flex-col justify-center items-center shadow-md rounded-md'>
            <img
                className="w-[300px] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
            />
            <div className="">
                <div className="font-bold text-xl p-3">{movie.title}</div>
            </div>
        </Link>
    );
};

export default Cards;
