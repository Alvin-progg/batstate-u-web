import AreaPageTemplate from "@/components/AreaPageTemplate";
import { areaPageData, standardFiles } from "@/data/areaPageData";

export default async function AreaPage1() {
  const data = areaPageData[1];
  
  return (
    <AreaPageTemplate
      areaNumber={1}
      title={data.title}
      description={data.description}
      focalPerson={data.focalPerson}
      files={standardFiles}
      titleHref="https://drive.google.com/drive/folders/1H8GSVQhRoVFZuDRZp_zAd0qS5RB5LnrE"
      parameters={[
        {
          letter: "A",
          title: "Statement of Vision, Mission, Goals and Objectives",
          items: [
            { name: "SYSTEM. Inputs and Processes", href: "https://drive.google.com/drive/folders/1BSU6CJE3PEBMEt5L8Mpiyv_xD1Lgd10M" },
            { name: "IMPLEMENTATION", href: "https://drive.google.com/drive/folders/1BSU6CJE3PEBMEt5L8Mpiyv_xD1Lgd10M" },
            { name: "OUTCOMES", href: "https://drive.google.com/drive/folders/1BSU6CJE3PEBMEt5L8Mpiyv_xD1Lgd10M" },
          ],
        },
        {
          letter: "B",
          title: "Dissemination and Acceptability",
          items: [
            { name: "SYSTEM. Inputs and Processes", href: "https://drive.google.com/drive/folders/139CjRYksgKnt_nKbvb3lAqloRypk0Dec" },
            { name: "IMPLEMENTATION", href: "https://drive.google.com/drive/folders/139CjRYksgKnt_nKbvb3lAqloRypk0Dec" },
            { name: "OUTCOMES", href: "https://drive.google.com/drive/folders/139CjRYksgKnt_nKbvb3lAqloRypk0Dec" },
          ],
        },
      ]}
    />
  );
}