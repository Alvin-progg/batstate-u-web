import AreaPageTemplate from "@/components/AreaPageTemplate";
import { areaPageData, standardFiles } from "@/data/areaPageData";

export default async function AreaPage10() {
  const data = areaPageData[10];

  return (
    <AreaPageTemplate
      areaNumber={10}
      title={data.title}
      description={data.description}
      focalPerson={data.focalPerson}
      files={standardFiles}
      parameters={[
        {
          letter: "A",
          title: "Organization",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/1119qadxeBZkyJpL2g9IeHgAEKK7fti-l",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/1119qadxeBZkyJpL2g9IeHgAEKK7fti-l",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/1119qadxeBZkyJpL2g9IeHgAEKK7fti-l",
            },
          ],
        },
        {
          letter: "B",
          title: "Academic Administration",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/16-RuuECYzzB7w3NUONozXdtPcKNOh9Tt",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/16-RuuECYzzB7w3NUONozXdtPcKNOh9Tt",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/16-RuuECYzzB7w3NUONozXdtPcKNOh9Tt",
            },
          ],
        },
        {
          letter: "C",
          title: "Student Administration",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/1_0blQkRrg_i2zIRSbpGLm7ri51TJ9f-L",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/1_0blQkRrg_i2zIRSbpGLm7ri51TJ9f-L",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/1_0blQkRrg_i2zIRSbpGLm7ri51TJ9f-L",
            },
          ],
        },
        {
          letter: "D",
          title: "Financial Management",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/1x382d7qljKm2pClv8Ewv2j0bbo53Vgq5",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/1x382d7qljKm2pClv8Ewv2j0bbo53Vgq5",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/1x382d7qljKm2pClv8Ewv2j0bbo53Vgq5",
            },
          ],
        },
        {
          letter: "E",
          title: "Supply Management",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/1JbEWCIm_1d6XLiIeRSBmIktSkB8CSEKG",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/1JbEWCIm_1d6XLiIeRSBmIktSkB8CSEKG",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/1JbEWCIm_1d6XLiIeRSBmIktSkB8CSEKG",
            },
          ],
        },
        {
          letter: "F",
          title: "Records Management",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/1Rjcytu96RhefXQX0GnXI-6ft5NrDiEe_",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/1Rjcytu96RhefXQX0GnXI-6ft5NrDiEe_",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/1Rjcytu96RhefXQX0GnXI-6ft5NrDiEe_",
            },
          ],
        },
        {
          letter: "G",
          title: "Institutional Planning and Development",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/1N5pDdhnZ4Nb0z4ICi-bSs3RgFfPBpjib",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/1N5pDdhnZ4Nb0z4ICi-bSs3RgFfPBpjib",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/1N5pDdhnZ4Nb0z4ICi-bSs3RgFfPBpjib",
            },
          ],
        },
        {
          letter: "Performance of Administrative Personnel",
          title: "Food Services/Canteen",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/1_4jc6PKteOrzZjN3A3dHaxmk31At0ZVE",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/1_4jc6PKteOrzZjN3A3dHaxmk31At0ZVE",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/1_4jc6PKteOrzZjN3A3dHaxmk31At0ZVE",
            },
          ],
        },
      ]}
    />
  );
}
