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
          title: "Parameter A Title",
          items: [
            { name: "SYSTEM. Inputs and Processes", href: "#" },
            { name: "IMPLEMENTATION", href: "#" },
            { name: "OUTCOMES", href: "#" },
          ],
        },
        {
          letter: "B",
          title: "Parameter B Title",
          items: [
            { name: "SYSTEM. Inputs and Processes", href: "#" },
            { name: "IMPLEMENTATION", href: "#" },
            { name: "OUTCOMES", href: "#" },
          ],
        },
        {
          letter: "C",
          title: "Parameter C Title",
          items: [
            { name: "SYSTEM. Inputs and Processes", href: "#" },
            { name: "IMPLEMENTATION", href: "#" },
            { name: "OUTCOMES", href: "#" },
          ],
        },
        {
          letter: "D",
          title: "Parameter D Title",
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
