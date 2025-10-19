import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-red text-white py-8 px-12 flex justify-center items-center  h-40 space-x-30 max-lg:flex-col max-lg:items-start max-lg:gap-6">
      <div className="max-md:w-full">
        <p className="text-base opacity-90 max-md:text-sm">
          Bachelor of Science Information Technology
        </p>
        <p className="text-3xl font-bold tracking-wide max-md:text-2xl max-sm:text-xl">
          Business Analitycs
        </p>
      </div>

      <div className="text-right max-lg:text-left max-md:w-full">
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
