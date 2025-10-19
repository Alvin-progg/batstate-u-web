import { areaInfo } from "@/data/areaInfo";
import Link from "next/link";

export default function Area() {
  return (
    <section className="flex items-center justify-center w-full">
      <div className="">
        <ul className="flex flex-col gap-8 my-8">
          {areaInfo.map((area) => (
            <li key={area.id} className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-red-600">
                  {area.number}
                </span>
                <h2 className="text-md text-red-600 font-bold">{area.title}</h2>
              </div>
              <p className="text-gray-700 text-sm w-[560px] italic">{area.description}</p>
              <Link 
                href="#" 
                className="w-fit text-sm italic text-gray-600 font-semibold"
              >
                Read more...
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}