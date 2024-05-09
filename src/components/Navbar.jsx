"use client";

import { useState } from 'react';
import Link from 'next/link';
import { CrossIcon, ThreeLines } from './Icons';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between p-6 shadow-lg">
            <Link href="/" className='block mt-4 md:inline-block md:mt-0   mr-4'>
                ENTHUB
            </Link>
            <div className="md:hidden">
                {isOpen ? (
                    <CrossIcon onClick={() => {
                        setIsOpen(false);
                    }} className="w-6 fill-white" />
                ) : (
                    <ThreeLines onClick={() => {
                        setIsOpen(true);
                    }} className="w-6 fill-white" />

                )}

            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:w-auto`}>
                <div className="text-sm">
                    <Link href="/" className='block mt-4 md:inline-block md:mt-0   mr-4'>
                        Home
                    </Link>
                    <Link href="/about" className='block mt-4 md:inline-block md:mt-0   mr-4'>
                        About
                    </Link>
                    {/* Add more links as needed */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
