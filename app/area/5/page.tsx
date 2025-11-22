import AreaPageTemplate from "@/components/AreaPageTemplate";
import { areaPageData } from "@/data/areaPageData";

export default async function AreaPage5() {
  const data = areaPageData[5];

  return (
    <AreaPageTemplate
      areaNumber={5}
      title={data.title}
      description={data.description}
      focalPerson={data.focalPerson}
      files={[
        {
          name: "QBAQ Instrument for Level 1",
          href: "https://drive.google.com/file/d/1LF4Gb6gv23qMhRI4uBD9FdrHUB_Lfeti/view?usp=drive_link",
        },
        {
          name: "Program Performance Profile",
          href: "https://drive.google.com/file/d/120C69NATBDB9vp-JaNYl0q6mXb5N2It_/view?usp=drive_link",
        },
        { name: "Self-Survey", href: "https://link-to-file3" },
        { name: "Supplemental Folder", href: "https://link-to-file4" },
      ]}
      titleHref="https://drive.google.com/drive/folders/1CWxlMWCssiEtuJ888l0gT0VCYw12ybNv"
      parameters={[
        {
          letter: "A",
          title: "Priorities and Relevance ",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/1z8L6OIpqF6_oIYQTq5toB05tih_ORNmk",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/1ZW4QLGvIqy7VTbDvW-1tZxwrgnjbycUO",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/1DX2IZ5KHQ3vXh8_EyW5Negh0cmghgc7s",
            },
          ],
        },
        {
          letter: "B",
          title: "Funding and Other Resources",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/1zPinb837s4_9IIUN3DEhvs-MZUere2c_",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/1m4nHRKI1sM02IoBtoafySXOQdrLWJx6e",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/1ILaBkgKjmVsUKdBSnJebqBU5fg0bpccd",
            },
          ],
        },
        {
          letter: "C",
          title:
            "Implementation, Monitoring, Evaluation and Utilization of Research Results/Outputs",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/15xh50zeFrrVxP8rb7293WyZiBuT6buhd",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/18FvFi4YOMvUoEBEESB22SjQWcMDnNj8G",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/13q0MIOYbYRBE3yErUz47VVwurSjeBs1y",
            },
          ],
        },
        {
          letter: "D",
          title: "Publication and Dissemination",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/1sn23NgY8z2dBWDKsg5yTPf99_KkpqHc4",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/1ea2Ha7_BXl1dbfxGZd_mxKl4zfNArZbp",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/1yMeijo6WwgvMaeqmtcU2IFH6N2mFgoW_",
            },
          ],
        },
      ]}
    />
  );
}
