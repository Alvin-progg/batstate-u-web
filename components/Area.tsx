import { areaInfo } from "@/data/areaInfo";
import Link from "next/link";
import Image from "next/image";

export default function Area() {
  return (
    <section className="flex items-center justify-center w-full overflow-hidden">
      <div className="flex my-8 gap-2.5">
        <ul className="flex flex-col gap-8 p-2 ">
          {areaInfo.map((area) => (
            <li key={area.id} className="flex flex-col gap-1">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-red-600">
                  {area.number}
                </span>
                <h2 className="text-md text-red-600 font-bold">{area.title}</h2>
              </div>
              <div className="px-10">
                <p className="text-gray-600  text-sm w-[560px] italic">
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
        <div>
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
              className="ml-12 mt-4"
              loading="lazy"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
