import AreaPageTemplate from "@/components/AreaPageTemplate";
import { areaPageData, standardFiles } from "@/data/areaPageData";

export default async function AreaPage3() {
  const data = areaPageData[3];
  
  return (
    <AreaPageTemplate
      areaNumber={3}
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
        {
          letter: "E",
          title: "Parameter E Title",
          items: [
            { name: "SYSTEM. Inputs and Processes", href: "#" },
            { name: "IMPLEMENTATION", href: "#" },
            { name: "OUTCOMES", href: "#" },
          ],
        },
        {
          letter: "F",
          title: "Parameter F Title",
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