import React from "react";
import { FileText, ChevronLeft, ChevronRight, Mail, User } from "lucide-react";
import Link from "next/link";

interface Parameter {
  letter: string;
  title: string;
  items: Array<{
    name: string;
    href: string;
  }>;
}

interface AreaPageTemplateProps {
  areaNumber: number;
  title: string;
  description: string;
  focalPerson: {
    name: string;
    email: string;
  };
  files: Array<{
    name: string;
    href: string;
  }>;
  parameters: Parameter[];
  videoUrl?: string;
  titleHref?: string;
}

export default function AreaPageTemplate({
  areaNumber,
  title,
  description,
  focalPerson,
  files,
  parameters,
  videoUrl = "https://www.youtube.com/embed/Pb61NjXrJCg",
  titleHref,
}: AreaPageTemplateProps) {
  const prevArea = areaNumber > 1 ? `/area/${areaNumber - 1}` : "/area";
  const nextArea = areaNumber < 10 ? `/area/${areaNumber + 1}` : null;

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-16">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-red-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/area" className="hover:text-red-600 transition-colors">
              Areas
            </Link>
            <span>/</span>
            <span className="text-red-600 font-semibold">
              Area {areaNumber}
            </span>
          </nav>
        </div>
      </div>

      {/* Header Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Title */}
            <div>
              {titleHref ? (
                <Link
                  href={titleHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-90 transition-opacity"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-5xl font-bold">{areaNumber}</span>
                    <div className="h-12 w-1 bg-white/50"></div>
                    <h1 className="text-3xl font-bold">Area {areaNumber}</h1>
                  </div>
                  <p className="text-xl text-red-100 mt-2">{title}</p>
                </Link>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-5xl font-bold">{areaNumber}</span>
                    <div className="h-12 w-1 bg-white/50"></div>
                    <h1 className="text-3xl font-bold">Area {areaNumber}</h1>
                  </div>
                  <p className="text-xl text-red-100 mt-2">{title}</p>
                </>
              )}
            </div>

            {/* Focal Person Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-sm text-red-100 mb-2 flex items-center gap-2">
                <User className="w-4 h-4" />
                Focal Person
              </p>
              <p className="font-semibold text-lg">{focalPerson.name}</p>
              <a
                href={`mailto:${focalPerson.email}`}
                className="flex items-center gap-2 text-sm text-red-100 hover:text-white transition-colors mt-2"
              >
                <Mail className="w-4 h-4" />
                {focalPerson.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Description */}
          <div className="lg:col-span-2">
            <div className="bg-red-50 border-l-4 border-red-600 rounded-r-xl p-6">
              <p className="text-gray-700 leading-relaxed">{description}</p>
            </div>
          </div>

          {/* Access Files Card */}
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
            <h2 className="text-xl font-semibold text-red-600 flex items-center gap-2 mb-4">
              <FileText className="w-5 h-5" />
              Access Files
            </h2>
            <ul className="space-y-3">
              {files.map((file, index) => (
                <li key={index}>
                  <Link
                    href={file.href}
                    className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors group"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <span className="text-sm">{file.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Parameters Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Video Section - Full Width on Top for Mobile */}
        <div className="lg:hidden mb-8">
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src={videoUrl}
              title="Batangas State University - The National Engineering University"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-center text-sm text-gray-600 mt-4">
            Learn more about Batangas State University
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Parameters Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {parameters.map((param) => (
                <div
                  key={param.letter}
                  className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="border-l-4 border-red-600 pl-4 mb-4">
                    <h3 className="text-xl font-bold text-red-600 uppercase">
                      Parameter {param.letter}
                    </h3>
                    <p className="font-semibold text-gray-800 mt-2 text-sm">
                      {param.title}
                    </p>
                  </div>
                  <ol className="space-y-3">
                    {param.items.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="flex items-start gap-3 text-gray-700 hover:text-red-600 transition-colors group text-sm"
                        >
                          <span className="font-semibold text-red-600 min-w-[1.5rem]">
                            {index + 1}.
                          </span>
                          <span className="group-hover:translate-x-1 transition-transform">
                            {item.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>

          {/* Video - Sticky Sidebar (Desktop Only) */}
          <div className="hidden lg:block lg:w-96">
            <div className="sticky top-24">
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src={videoUrl}
                  title="Batangas State University - The National Engineering University"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-center text-sm text-gray-600 mt-4">
                Learn more about Batangas State University
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="bg-gray-100 border-t border-gray-200 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Previous Button */}
            <Link
              href={prevArea}
              className="flex items-center gap-2 px-6 py-3 bg-white rounded-lg shadow-sm hover:shadow-md border border-gray-200 hover:border-red-600 transition-all group"
            >
              <ChevronLeft className="w-5 h-5 text-red-600 group-hover:-translate-x-1 transition-transform" />
              <span className="text-gray-700 group-hover:text-red-600">
                {areaNumber === 1 ? "Back to Areas" : `Area ${areaNumber - 1}`}
              </span>
            </Link>

            {/* Area Indicator */}
            <div className="text-center">
              <p className="text-sm text-gray-600">Area</p>
              <p className="text-2xl font-bold text-red-600">
                {areaNumber} / 10
              </p>
            </div>

            {/* Next Button */}
            {nextArea && (
              <Link
                href={nextArea}
                className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg shadow-sm hover:shadow-md hover:bg-red-700 transition-all group"
              >
                <span>Area {areaNumber + 1}</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
            {!nextArea && (
              <Link
                href="/area"
                className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg shadow-sm hover:shadow-md hover:bg-red-700 transition-all group"
              >
                <span>Back to Areas</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
