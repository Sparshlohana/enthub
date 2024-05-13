"use client";

import Loader from '@/components/loader/Loader';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

export default function Page({ params }) {
    const searchParams = useSearchParams();
    const title = searchParams.get('title');
    const [iframeLoaded, setIframeLoaded] = useState(false);

    const handleIframeLoad = () => {
        setIframeLoaded(true);
    };

    return (
        <>
            <div className="flex flex-col gap-8 justify-center items-center h-[90vh] px-3">
                <h1 className={`text-2xl font-bold underline ${!iframeLoaded ? 'hidden' : 'block'}`}>{title}</h1>
                {!iframeLoaded && (
                    <>
                        <Loader />
                    </>
                )}
                <iframe
                    className={`h-[500px] w-full md:w-1/2 ${iframeLoaded ? 'block' : 'hidden'}`}
                    src={`https://vidsrc.in/embed/movie?tmdb=${params.slug}`}
                    allowFullScreen
                    onLoad={handleIframeLoad}
                ></iframe>
                <button class={`download-btn pixel-corners ${!iframeLoaded ? 'hidden' : 'block'}`} onClick={
                    () => {
                        window.open(`https://katmoviehd.boo/?s=${title}`, '_blank');
                    }
                }>
                    <div class="button-content">
                        <div class="svg-container">
                            <svg
                                class="download-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M19.479 10.092c-.212-3.951-3.473-7.092-7.479-7.092-4.005 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408zm-7.479 6.908l-4-4h3v-4h2v4h3l-4 4z"
                                ></path>
                            </svg>
                        </div>
                        <div class="text-container">
                            <div class="text">Download</div>
                        </div>
                    </div>
                </button>
            </div>
        </>
    );
}
