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
      parameters={[
        {
          letter: "A",
          title: "Statement of Vision, Mission, Goals and Objectives",
          items: [
            { name: "SYSTEM. Inputs and Processes", href: "#" },
            { name: "IMPLEMENTATION", href: "#" },
            { name: "OUTCOMES", href: "#" },
          ],
        },
        {
          letter: "B",
          title: "Dissemination and Acceptability",
          items: [
            { name: "SYSTEM. Inputs and Processes", href: "#" },
            { name: "IMPLEMENTATION", href: "#" },
            { name: "OUTCOMES", href: "#" },
          ],
        },
      ]}
    />
  );
}