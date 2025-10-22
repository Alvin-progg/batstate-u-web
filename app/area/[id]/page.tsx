import React from "react";
import { FileText } from "lucide-react";
interface Props {
  params: { id: string };
}

export default async function AreaPage({ params }: Props) {
  const { id } = await params;

  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      {/* === Header === */}
      <section className="bg-red text-white px-8 py-10 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl font-bold">Area {id}</h1>
          <p className="text-lg opacity-90 mt-2">
            Vision, Mission, Goals, and Objectives
          </p>
        </div>
        <div className="mt-6 md:mt-0 text-sm text-right">
          <p className="italic opacity-80">
            for queries and/or assistance, contact the Focal Person
          </p>
          <p className="font-semibold">
            Asst. Prof. ALVIN C. ANDULAN, MBA, CPA
          </p>
          <p className="opacity-90">alvin.andulan@g.batstate-u.edu.ph</p>
        </div>
      </section>

      {/* === Intro Section === */}
      <section className="px-8 md:px-16 py-10 text-gray-800 leading-relaxed">
        <p className="italic text-red">
          The VMGO effectively integrates the university&apos;s aspirations to
          lead in the global knowledge economy, its mission to nurture leaders
          through innovative education and impactful research, and its core
          values that shape the character and vision of the institution and its
          graduates.
        </p>
      </section>

      {/* === Access Files + Video === */}
      <section className="px-8 md:px-16 grid md:grid-cols-2 gap-10 items-start border-t border-gray-300 pt-10">
        <div>
          <h2 className="text-xl font-semibold text-red flex items-center gap-2">
            <FileText className="w-5 h-5" /> Access Files
          </h2>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>• OBAQ Instrument for Level 1</li>
            <li>• Program Performance Profile</li>
            <li>• Self-Survey</li>
            <li>• Supplemental Folder</li>
          </ul>
        </div>

        <div className="flex justify-center">
          <iframe
            className="rounded-lg shadow-md w-full h-64 md:h-72"
            src="https://www.youtube.com/embed/cKlrxxd19C8"
            title="Batangas State University Vision Mission"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* === Parameters === */}
      <section className="px-8 md:px-16 py-12 space-y-10 border-t border-gray-200">
        {/* Parameter A */}
        <div>
          <h3 className="text-lg font-semibold text-red uppercase">
            Parameter A
          </h3>
          <p className="font-medium mt-1">
            Statement of Vision, Mission, Goals and Objectives
          </p>
          <ol className="mt-2 space-y-1 text-gray-700">
            <li>1. SYSTEM. Inputs and Processes</li>
            <li>2. IMPLEMENTATION</li>
            <li>3. OUTCOMES</li>
          </ol>
        </div>

        {/* Parameter B */}
        <div>
          <h3 className="text-lg font-semibold text-red uppercase">
            Parameter B
          </h3>
          <p className="font-medium mt-1">Dissemination and Acceptability</p>
          <ol className="mt-2 space-y-1 text-gray-700">
            <li>1. SYSTEM. Inputs and Processes</li>
            <li>2. IMPLEMENTATION</li>
            <li>3. OUTCOMES</li>
          </ol>
        </div>
      </section>
    </main>
  );
}
