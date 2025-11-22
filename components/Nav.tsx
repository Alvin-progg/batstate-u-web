"use client";

import Image from "next/image";
import Link from "next/link";


export default function Nav() {

  return (
    <header>
      <nav className="fixed top-0 left-0 w-full h-16 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <Link className="flex items-center gap-3 h-full" href="/">
            <Image 
              src="/logo.png" 
              alt="BatStateU Logo" 
              width={40} 
              height={40}
              className="w-10 h-10"
            />
            <div className="flex flex-col">
              <h1 className="font-bold text-base sm:text-lg text-gray-800">
                Information Technology
              </h1>
              <p className="text-xs text-gray-600 hidden sm:block">
                CICS - Mabini Campus
              </p>
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
}
