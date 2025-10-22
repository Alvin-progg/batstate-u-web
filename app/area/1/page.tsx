import React from "react";
import { FileText } from "lucide-react";


export default async function AreaPage() {


  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <section className="bg-red text-white px-8 py-10 flex justify-center items-center gap-80">
        <div className="py-4">
          <h1 className="text-2xl font-bold">Area 1</h1>
          <p className="text-lg opacity-90 mt-2">
            Vision, Mission, Goals, and Objectives
          </p>
        </div>
        <div className="mt-6 md:mt-0 text-sm text-left">
          <p className="italic opacity-80">
            for queries and/or assistance, contact the Focal Person
          </p>
          <p className="font-semibold">
            Dr. Sherry Joy A. Del Mundo
          </p>
          <p className="opacity-90">sherry.delmundo@g.batstate-u.edu.ph</p>
        </div>
      </section>
      <section className="px-8 md:px-16 py-10 text-gray-800 leading-relaxed flex justify-center gap-50">
        <p className="italic text-red w-[493px] h-[95px] mr-10">
          The VMGO effectively integrates the university&apos;s aspirations to
          lead in the global knowledge economy, its mission to nurture leaders
          through innovative education and impactful research, and its core
          values that shape the character and vision of the institution and its
          graduates.
        </p>
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
      </section>

      <section className="w-full">
        <div className="flex justify-center gap-56 py-10  items-center">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
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
            <div>
              <h3 className="text-lg font-semibold text-red uppercase">
                Parameter B
              </h3>
              <p className="font-medium mt-1">
                Dissemination and Acceptability
              </p>
              <ol className="mt-2 space-y-1 text-gray-700">
                <li>1. SYSTEM. Inputs and Processes</li>
                <li>2. IMPLEMENTATION</li>
                <li>3. OUTCOMES</li>
              </ol>
            </div>
          </div>
          <div className="flex justify-center items-center my-6">
            <iframe
              className="w-[350px] h-[200px]"
              src="https://www.youtube.com/embed/Pb61NjXrJCg"
              title="Batangas State University - The National Engineering University"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
