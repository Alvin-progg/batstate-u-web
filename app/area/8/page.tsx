import AreaPageTemplate from "@/components/AreaPageTemplate";
import { areaPageData, standardFiles } from "@/data/areaPageData";

export default async function AreaPage8() {
  const data = areaPageData[8];

  return (
    <AreaPageTemplate
      areaNumber={8}
      title={data.title}
      description={data.description}
      focalPerson={data.focalPerson}
      files={standardFiles}
      parameters={[
        {
          letter: "A",
          title: "Campus",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/1Iez_FwTHzeFuGKeHSqzA-NcRe_EZK5Bj",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/1EDpNuw26Qj75pEwKaVV6bcjWwLzKFKPQ",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/119g5yhvj4xcmtdyW_AVnThkt8M8nqgZs",
            },
          ],
        },
        {
          letter: "B",
          title: "Buildings",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/1bRbGUDmm0bhdEUO1YBuCVAY_wAWlTEg9",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/11XbAHQCKy3WZvbxcp83-yhOotGC0sdYp",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/1-5O_qYFl1Hi_bjTubb4EQhmSe7KphYp5",
            },
          ],
        },
        {
          letter: "C",
          title: "Classrooms",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/1qCpiZRkDWMlAN3XhC1QuTYM8n6ZtZ4to",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/1cTjTrkA3Dn1wCZ4S5gDp_rTgTR5Bxkc_",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/1_SwsRYPSMdmtfdjDGBxV1MIFqO_opTaX",
            },
          ],
        },
        {
          letter: "D",
          title: "Office, Staff, and Function Rooms",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/1JxOGoSz9iw0JkVaoIzHMNUjVVWUMYJAt",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/1jCdr4lztcinW1i2lrLPCnLuFL_4Q8ILD",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/1Yqa0eVRD6UOYoNBi9hP4tFF0RGU7FbKT",
            },
          ],
        },
        {
          letter: "E",
          title: "Physical Set-up and Facilities",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/1JwskY5owmoYMf37R5J1IQUSqu4ULphJl",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/1d8PU2TUK7N_sXNZK_4uvWTA_2lycpYJi",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/1LpQcfbkb78VPMOqyYFNGVe2W5HzUy49j",
            },
          ],
        },
        {
          letter: "F",
          title: "Medical and Dental Clinic",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/1csVjrUreOThEyek-epO0jpR_yV_TmSCR",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/171JRxARLiMy3BFtXh0--BPB2NlKKcHFF",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/1hNiQwIn5Fi8Y8yRT2b_fOIHobeBC21um",
            },
          ],
        },
        {
          letter: "G",
          title: "Student Center",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/1OPZ0ZD-6aPlo-EpNoewS4bhe6p890wMx",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/1V-ZNgTQoWPDrxa8SRDhjsNpZxRtm1lmi",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/1GqDRB2b1nAxPYZrAgKXLJYYNzQ8W3Qh7",
            },
          ],
        },
        {
          letter: "H",
          title: "Food Services/Canteen",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/1uimxQ1CR77P5ApbW6Jm9UAqxMmlPNPet",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/1g9v24mAsHh3_6uwmYRyH4J8l3f8TRbHL",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/1wNQ5oww6Ohj_PTiqGaK9h9oqW6mlicct",
            },
          ],
        },
        {
          letter: "I",
          title: "Accredation Center",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/1mJlvQiS7eiH2qFA9eBGBRXJwrGJsaBLw",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/1EO6EjW8X9XVdu2TIY3knSgUIK55CA5LS",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/1kGnR91Xs-hROKA-blB9LenNQG2Do0ALK",
            },
          ],
        },
        {
          letter: "J",
          title: "Housing",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/1a2_rJp6Yu7xrT4oGCr4Hr9shZKX4yNIF",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/1PjeT8yFG4Qlux0Z4vG-2BUE7khRRkDtR",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/1_dAGgVkmNzZj_232nrmlx6KNALJxeouj",
            },
          ],
        },
      ]}
    />
  );
}
