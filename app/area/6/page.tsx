import AreaPageTemplate from "@/components/AreaPageTemplate";
import { areaPageData } from "@/data/areaPageData";

export default async function AreaPage6() {
  const data = areaPageData[6];

  return (
    <AreaPageTemplate
      areaNumber={6}
      title={data.title}
      description={data.description}
      focalPerson={data.focalPerson}
      files={[
        {
          name: "QBAQ Instrument for Level 1",
          href: "https://drive.google.com/file/d/1R8S9n1CeZGwaCQmDu1--XOYCLclDneRX/view?usp=drive_link",
        },
        {
          name: "Program Performance Profile",
          href: "https://drive.google.com/file/d/1KTpm-Dnvo8yAthagxPh2z6w8FiI_VR_5/view?usp=drive_link",
        },
        { name: "Self-Survey", href: "https://link-to-file3" },
        //{ name: "Supplemental Folder", href: "https://link-to-file4" },
      ]}
      titleHref="https://drive.google.com/drive/folders/1OdCC4qYGjN5oHz2YAiS6o4E_vknBoGHF?usp=drive_link"
      parameters={[
        {
          letter: "A",
          title: "Priorities and Relevance",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/1_Po_jATMEbD63URXmlsJBMBqDeh7zO8F",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/1_Po_jATMEbD63URXmlsJBMBqDeh7zO8F",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/1_Po_jATMEbD63URXmlsJBMBqDeh7zO8F",
            },
          ],
        },
        {
          letter: "B",
          title: "Planning, Implementation, Monitoring and Evaluation",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/1mtlwKwwobosxsVXvW47E81GxEffyMnN7",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/1mtlwKwwobosxsVXvW47E81GxEffyMnN7",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/1mtlwKwwobosxsVXvW47E81GxEffyMnN7",
            },
          ],
        },
        {
          letter: "C",
          title: "Funding and Other Resources",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/1JHvjVI3ypOpSjBxY8w91UnQWPP_BLato",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/1JHvjVI3ypOpSjBxY8w91UnQWPP_BLato",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/1JHvjVI3ypOpSjBxY8w91UnQWPP_BLato",
            },
          ],
        },
        {
          letter: "D",
          title: "Community Involvement and Participation",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/11k0nbSUrpbOvhZqYWG9Pr2d-bG4WiwOZ",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/11k0nbSUrpbOvhZqYWG9Pr2d-bG4WiwOZ",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/11k0nbSUrpbOvhZqYWG9Pr2d-bG4WiwOZ",
            },
          ],
        },
      ]}
    />
  );
}
