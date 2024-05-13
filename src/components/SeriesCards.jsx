import React from 'react';
import Link from 'next/link';

const SeriesCards = ({ webSeries }) => {
    return (
        <Link href={`/web-series/${webSeries.id}`} className='w-[300px] h-fit flex flex-col justify-center items-center shadow-md rounded-md bg-white'>
            <img
                className="w-[300px] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/w500/${webSeries.poster_path}`}
                alt={webSeries.title}
            />
            <div className="">
                <div className="font-bold text-xl p-3">{webSeries.original_name}</div>
            </div>
        </Link>
    );
};

export default SeriesCards;
