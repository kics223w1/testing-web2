'use client';

import Link from 'next/link';
import { FC } from 'react';

const Navbar: FC = () => {
    return (
        <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
            <div className="flex items-center gap-2">
                {/* Placeholder for Logo - using a simple div for now or an emoji/icon as placeholder if no asset provided. */}
                {/* The user image shows "Proxyman" with a blue icon. I'll use a styled div. */}
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-md flex items-center justify-center text-white font-bold">
                    <div className="w-4 h-4 bg-white/30 rounded-full border-2 border-white/50"></div>
                </div>
                <span className="text-xl font-bold tracking-tight">Proxyman</span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
                <Link href="#" className="hover:text-black transition-colors flex items-center gap-1">
                    Pricing
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
                </Link>
                <div className="group relative">
                    <button className="hover:text-black transition-colors flex items-center gap-1 cursor-pointer">
                        Product
                        <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
                <Link href="#" className="hover:text-black transition-colors">Testimonials</Link>
                <Link href="#" className="hover:text-black transition-colors">Support</Link>
                <div className="group relative">
                    <button className="hover:text-black transition-colors flex items-center gap-1 cursor-pointer">
                        Developer
                        <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
            </div>

            <div>
                <button
                    onClick={() => alert('Download clicked!')}
                    className="bg-[#0f172a] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-black transition-colors flex items-center gap-2 shadow-sm cursor-pointer"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
