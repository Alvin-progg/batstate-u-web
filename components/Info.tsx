"use client";

import { useState } from "react";
import { infoLinks, ChevronDown } from "@/data/infoLinks";

export const Info = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-red-50 text-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <header className="text-center mb-12">
          <h2 className="text-sm font-semibold text-red-600 uppercase tracking-wide">
            Bachelor of Science in Business Administration
          </h2>
          <h1 className="text-4xl font-bold text-red-700 mt-2">
            Financial Management
          </h1>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {infoLinks.map((item) =>
            item.dropdown ? (
              <div
                key={item.title}
                className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() => setOpen((prev) => !prev)}
                  className="flex flex-col items-center w-full"
                >
                  <item.icon className="w-10 h-10 mb-4 text-red-600" />
                  <h3 className="text-lg font-semibold text-gray-800 text-center">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">{item.group}</p>
                  <ChevronDown
                    className={`mt-3 w-4 h-4 text-red-600 transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`w-full overflow-hidden transition-all duration-300 ${
                    open ? "max-h-96 mt-4" : "max-h-0"
                  }`}
                >
                  <ul className="w-full text-sm text-gray-700 space-y-2">
                    {item.dropdown.map((link) => (
                      <li
                        key={link.name}
                        className="border-t border-gray-100 pt-2 first:border-none"
                      >
                        <a
                          href={link.href}
                          className="block hover:text-red-600 transition-colors"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <a
                key={item.title}
                href={item.href}
                className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <item.icon className="w-10 h-10 mb-4 text-red-600" />
                <h3 className="text-lg font-semibold text-gray-800 text-center">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{item.group}</p>
              </a>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Info;
