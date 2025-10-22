import React from "react";
import { FileText } from "lucide-react";

export default async function AreaPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      {/* === HEADER === */}
      <section className="bg-red text-white py-10">
        <div className="max-w-[1200px] mx-auto px-8 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Area 6</h1>
            <p className="text-lg opacity-90 mt-2">
              EXTENSION AND COMMUNITY INVOLVEMENT
            </p>
          </div>

          <div className="text-sm text-left">
            <p className="italic opacity-80">
              for queries and/or assistance, contact the Focal Person
            </p>
            <p className="font-semibold">Dr. Sherry Joy A. Del Mundo</p>
            <p className="opacity-90">sherry.delmundo@g.batstate-u.edu.ph</p>
          </div>
        </div>
      </section>

      {/* === VMGO, ACCESS FILES & PARAMETERS === */}
      <section className="py-10">
        <div className="max-w-[1200px] mx-auto px-8 grid grid-cols-2 gap-x-96 gap-y-16 items-start w-full">
          {/* === VMGO TEXT === */}
          <p className="italic text-red leading-relaxed">
            The VMGO effectively integrates the university&apos;s aspirations to
            lead in the global knowledge economy, its mission to nurture leaders
            through innovative education and impactful research, and its core
            values that shape the character and vision of the institution and
            its graduates.
          </p>

          {/* === ACCESS FILES === */}
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

          {/* === PARAMETER A === */}
          <div>
            <h3 className="text-lg font-semibold text-red uppercase">
              Parameter A
            </h3>
            <p className="font-medium mt-1">Dissemination and Acceptability</p>
            <ol className="mt-2 space-y-1 text-gray-700">
              <li>
                <a href="https://drive.google.com/drive/folders/1_Po_jATMEbD63URXmlsJBMBqDeh7zO8F">
                  1. SYSTEM. Inputs and Processes
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1_Po_jATMEbD63URXmlsJBMBqDeh7zO8F">
                  2. IMPLEMENTATION
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1_Po_jATMEbD63URXmlsJBMBqDeh7zO8F">
                  3. OUTCOMES
                </a>
              </li>
            </ol>
          </div>
          {/* === PARAMETER B === */}
          <div>
            <h3 className="text-lg font-semibold text-red uppercase">
              Parameter B
            </h3>
            <p className="font-medium mt-1">Dissemination and Acceptability</p>
            <ol className="mt-2 space-y-1 text-gray-700">
              <li>
                <a href="https://drive.google.com/drive/folders/1mtlwKwwobosxsVXvW47E81GxEffyMnN7">
                  1. SYSTEM. Inputs and Processes
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1mtlwKwwobosxsVXvW47E81GxEffyMnN7">
                  2. IMPLEMENTATION
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1mtlwKwwobosxsVXvW47E81GxEffyMnN7">
                  3. OUTCOMES
                </a>
              </li>
            </ol>
          </div>
          {/* === PARAMETER C === */}
          <div>
            <h3 className="text-lg font-semibold text-red uppercase">
              Parameter C
            </h3>
            <p className="font-medium mt-1">Dissemination and Acceptability</p>
            <ol className="mt-2 space-y-1 text-gray-700">
              <li>
                <a href="https://drive.google.com/drive/folders/1JHvjVI3ypOpSjBxY8w91UnQWPP_BLato">
                  1. SYSTEM. Inputs and Processes
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1JHvjVI3ypOpSjBxY8w91UnQWPP_BLato">
                  2. IMPLEMENTATION
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1JHvjVI3ypOpSjBxY8w91UnQWPP_BLato">
                  3. OUTCOMES
                </a>
              </li>
            </ol>
          </div>
          {/* === PARAMETER D === */}
          <div>
            <h3 className="text-lg font-semibold text-red uppercase">
              Parameter D
            </h3>
            <p className="font-medium mt-1">Dissemination and Acceptability</p>
            <ol className="mt-2 space-y-1 text-gray-700">
              <li>
                <a href="https://drive.google.com/drive/folders/11k0nbSUrpbOvhZqYWG9Pr2d-bG4WiwOZ">
                  1. SYSTEM. Inputs and Processes
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/11k0nbSUrpbOvhZqYWG9Pr2d-bG4WiwOZ">
                  2. IMPLEMENTATION
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/11k0nbSUrpbOvhZqYWG9Pr2d-bG4WiwOZ">
                  3. OUTCOMES
                </a>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}
