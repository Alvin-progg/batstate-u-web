import Image from "next/image";
import Link from "next/link";
export default function Nav() {

    return (
        <nav className="fixed top-0 left-0  w-full bg-white shadow-md z-10">
            <div className=" gap-4 p-4">
                <Link className="flex items-center gap-4" href="/">
                    <Image src="/logo.png" alt="Logo" width={50} height={50} />
                    <h1 className="font-semibold text-xl">Information Technology</h1>   
                </Link>
            </div>
        </nav>
    );
}
