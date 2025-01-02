'use client';

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="text-white pt-[28px]">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="text-[24px]">VERSUS</span>
                </Link>
                <button
                    onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center  text-gray-500 rounded-lg md:hidden hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                    aria-controls="navbar-default"
                    aria-expanded={isMenuOpen ? "true" : "false"}
                >
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`md:block md:w-auto ${isMenuOpen ? "block" : "hidden"}`} id="navbar-default">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg text-[#999999] text-[11px] tracking-[1px] uppercase md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        <li>
                            <Link href="/"  className=" block hover:text-white hover:duration-200 active:text-[#00d6b4]">
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link href="/about"  className=" active:text-[#00d6b4] block hover:text-white hover:duration-200">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact"  className=" active:text-[#00d6b4] block hover:text-white hover:duration-200">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
