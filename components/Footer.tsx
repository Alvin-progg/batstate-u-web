import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-red text-white flex  py-10 items-center justify-center gap-96">
      <div className="w-fit">
        <p className="text-base opacity-90 max-md:text-sm">
          Bachelor of Science in
        </p>
        <p className="text-3xl font-bold tracking-wide max-md:text-2xl max-sm:text-xl">
          Information Technology
        </p>
      </div>

      <div className=" text-start  w-fit ">
        <p className="italic font-medium max-md:text-sm">
          for queries and/or assistance:
        </p>
        <Link
          rel="email"
          href="mailto:mabini@g.batstate-u.edu.ph"
          className="opacity-90 max-md:text-sm"
        >
          mabini@g.batstate-u.edu.ph
        </Link>
      </div>
    </footer>
  );
}
