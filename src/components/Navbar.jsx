"use client";

import { useState } from 'react';
import Link from 'next/link';
import { CrossIcon, ThreeLines } from './Icons';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Function to close the navbar
    const closeNavbar = () => {
        setIsOpen(false);
    };

    return (
        <nav className="flex items-center justify-between p-6 shadow-lg bg-transparent relative">
            <Link href="/" className='block mt-4 md:inline-block md:mt-0   mr-4'>
                ENTHUB
            </Link>
            <div className="md:hidden absolute right-5">
                {isOpen ? (
                    <CrossIcon onClick={() => {
                        setIsOpen(false);
                    }} className="w-5 fill-[#000000b0]" />
                ) : (
                    <ThreeLines onClick={() => {
                        setIsOpen(true);
                    }} className="w-6 fill-black" />
                )}
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:w-auto`}>
                <div className="text-sm">
                    <Link href="/" className='block mt-4 md:inline-block md:mt-0   mr-4' onClick={closeNavbar}>
                        Home
                    </Link>
                    <Link href="/about" className='block mt-4 md:inline-block md:mt-0   mr-4' onClick={closeNavbar}>
                        About
                    </Link>
                    <Link href="/web-series" className='block mt-4 md:inline-block md:mt-0   mr-4' onClick={closeNavbar}>
                        Web Series
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
