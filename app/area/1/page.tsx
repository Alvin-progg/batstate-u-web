import AreaPageTemplate from "@/components/AreaPageTemplate";
import { areaPageData } from "@/data/areaPageData";

export default async function AreaPage1() {
  const data = areaPageData[1];

  return (
    <AreaPageTemplate
      areaNumber={1}
      title={data.title}
      description={data.description}
      focalPerson={data.focalPerson}
      files={[
        {
          name: "QBAQ Instrument for Level 1",
          href: "https://drive.google.com/file/d/1LN1F1cZnOqxiTSXlLQyvOttP6efXFk6r/view?usp=drive_link",
        },
        {
          name: "Program Performance Profile",
          href: "https://drive.google.com/file/d/1Uqo5y-5Ti-DNEhkv9A1wgdWjwEaLArO4/view?usp=drive_link",
        },
        { name: "Self-Survey", href: "https://drive.google.com/file/d/1zmfgbOv6_UgTj964ktBJbsjzmGOwzMsH/view?usp=drive_link" },
        //{ name: "Supplemental Folder", href: "https://link-to-file4" },
      ]}
      titleHref="https://drive.google.com/drive/folders/1H8GSVQhRoVFZuDRZp_zAd0qS5RB5LnrE"
      parameters={[
        {
          letter: "A",
          title: "Statement of Vision, Mission, Goals and Objectives",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/1BSU6CJE3PEBMEt5L8Mpiyv_xD1Lgd10M",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/1BSU6CJE3PEBMEt5L8Mpiyv_xD1Lgd10M",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/1BSU6CJE3PEBMEt5L8Mpiyv_xD1Lgd10M",
            },
          ],
        },
        {
          letter: "B",
          title: "Dissemination and Acceptability",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/139CjRYksgKnt_nKbvb3lAqloRypk0Dec",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/139CjRYksgKnt_nKbvb3lAqloRypk0Dec",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/139CjRYksgKnt_nKbvb3lAqloRypk0Dec",
            },
          ],
        },
      ]}
    />
  );
}

