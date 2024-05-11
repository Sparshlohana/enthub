"use client";

import Loader from '@/components/loader/Loader';
import React, { useState } from 'react';

export default function Page({ params }) {
    const [iframeLoaded, setIframeLoaded] = useState(false);

    const handleIframeLoad = () => {
        setIframeLoaded(true);
    };

    return (
        <div className="flex justify-center items-center h-[80vh]">
            {!iframeLoaded && (
                <>
                    <Loader />
                </>
            )}
            <iframe
                className={`h-[500px] md:w-1/2 ${iframeLoaded ? 'block' : 'hidden'}`}
                src={`https://vidsrc.to/embed/tv/${params.slug}`}
                frameborder="0"
                allowFullScreen
                onLoad={handleIframeLoad}
            ></iframe>
        </div>
    );
}
