import { areaInfo } from "@/data/areaInfo";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function Area() {
  return (
    <section className="py-16 bg-gradient-to-b from-red-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-red-600 uppercase tracking-wide">
            Accreditation Areas
          </h2>
          <h3 className="text-4xl font-bold text-red-700 mt-2">
            BSIT Program Areas
          </h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore the comprehensive areas of the Bachelor of Science in Information Technology program
          </p>
        </div>

        {/* Area Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {areaInfo.map((area) => (
            <Link
              key={area.id}
              href={area.href}
              className="group relative bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Area Number Badge */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                {area.number}
              </div>

              <div className="p-6">
                {/* Title */}
                <h3 className="text-lg font-bold text-gray-800 mb-3 pr-12 group-hover:text-red-600 transition-colors">
                  {area.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {area.description}
                </p>

                {/* Read More Link */}
                <div className="flex items-center text-red-600 font-semibold text-sm group-hover:gap-2 transition-all">
                  <span>Explore Area</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </Link>
          ))}
        </div>

        {/* University Info Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: Logo and Text */}
            <Link
              href="https://batstateu.edu.ph/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="flex flex-col items-center lg:items-start">
                <Image
                  src="/area-logo.png"
                  alt="Batangas State University Logo"
                  width={200}
                  height={200}
                  className="w-48 h-auto mb-6 group-hover:scale-105 transition-transform"
                />
                <h2 className="text-2xl font-bold text-red-600 text-center lg:text-left mb-4">
                  Batangas State University
                  <span className="block text-lg text-gray-700 mt-1">
                    The National Engineering University
                  </span>
                </h2>
                <p className="text-gray-600 text-center lg:text-left leading-relaxed">
                  Welcome to Batangas State University! The National Engineering University that develops leaders in the global knowledge economy.
                </p>
              </div>
            </Link>

            {/* Right: Video */}
            <div className="flex justify-center items-center">
              <div className="w-full max-w-md aspect-video rounded-xl overflow-hidden shadow-md">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/Pb61NjXrJCg"
                  title="Batangas State University - The National Engineering University"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}