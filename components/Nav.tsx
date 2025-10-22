"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Nav() {
  const pathname = usePathname();
  return (
    <header>
      <nav className="fixed top-0 left-0  w-full bg-white shadow-md z-30">
        <div className=" gap-4 px-4 py-2 w-fit">
          <Link className="flex items-center gap-4" href="/">
            <Image src="/logo.png" alt="Logo" width={50} height={50} />
            <h1 className="font-semibold text-xl">
              Information Technology
            </h1>
          </Link>
        </div>
      </nav>
    </header>
  );
}
