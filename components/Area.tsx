import { areaInfo } from "@/data/areaInfo";
import Link from "next/link";
import Image from "next/image";

export default function Area() {
  return (
    <section className="flex items-center justify-center w-full overflow-hidden px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row my-8 gap-6 lg:gap-2.5">
        <ul className="flex flex-col gap-6 lg:gap-8">
          {areaInfo.map((area) => (
            <li key={area.id} className="flex flex-col gap-1">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-red-600">
                  {area.number}
                </span>
                <h2 className="text-md text-red-600 font-bold">{area.title}</h2>
              </div>
              <div className="px-10">
                <p className="text-gray-700 text-sm w-full lg:w-[560px] italic">
                  {area.description}
                </p>
                <Link
                  href="#"
                  className="w-fit text-sm italic text-gray-600 font-semibold"
                >
                  Read more...
                </Link>
              </div>
            </li>
          ))}
        </ul>
        <div className="w-full lg:w-[380px]">
          <Link
            href="https://batstateu.edu.ph/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/area-logo.png"
              alt="Area Image"
              width={380}
              height={380}
              className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:w-full h-auto mx-auto lg:mx-0"
            />
            <div className="flex flex-col items-center justify-center gap-5 mt-4">
              <h2 className="text-xl font-bold text-red-600 text-center lg:text-left">
                Batangas State University The National Engineering University
              </h2>
              <p className="tracking-wider text-gray-700 text-center lg:text-left">
                Welcome to Batangas State University! The National Engineering University that develops leaders in the global knowledge economy.
              </p>
            </div>
          </Link>
          <div className="flex justify-center items-center my-6">
            <iframe
              className="w-full max-w-[560px] h-[214px]"
              src="https://www.youtube.com/embed/Pb61NjXrJCg"
              title="Batangas State University - The National Engineering University"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}