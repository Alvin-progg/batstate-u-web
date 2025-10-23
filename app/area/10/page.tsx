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
          title: "Organzation",
          items: [
            { name: "SYSTEM. Inputs and Processes", href: "#" },
            { name: "IMPLEMENTATION", href: "#" },
            { name: "OUTCOMES", href: "#" },
          ],
        },
        {
          letter: "B",
          title: "Academic Administration",
          items: [
            { name: "SYSTEM. Inputs and Processes", href: "#" },
            { name: "IMPLEMENTATION", href: "#" },
            { name: "OUTCOMES", href: "#" },
          ],
        },
        {
          letter: "C",
          title: "Student Administration",
          items: [
            { name: "SYSTEM. Inputs and Processes", href: "#" },
            { name: "IMPLEMENTATION", href: "#" },
            { name: "OUTCOMES", href: "#" },
          ],
        },
        {
          letter: "D",
          title: "Financial Management",
          items: [
            { name: "SYSTEM. Inputs and Processes", href: "#" },
            { name: "IMPLEMENTATION", href: "#" },
            { name: "OUTCOMES", href: "#" },
          ],
        },
        {
          letter: "E",
          title: "Supply Management",
          items: [
            { name: "SYSTEM. Inputs and Processes", href: "#" },
            { name: "IMPLEMENTATION", href: "#" },
            { name: "OUTCOMES", href: "#" },
          ],
        },
        {
          letter: "F",
          title: "Records Management",
          items: [
            { name: "SYSTEM. Inputs and Processes", href: "#" },
            { name: "IMPLEMENTATION", href: "#" },
            { name: "OUTCOMES", href: "#" },
          ],
        },
        {
          letter: "G",
          title: " Institutional Planning and Development",
          items: [
            { name: "SYSTEM. Inputs and Processes", href: "#" },
            { name: "IMPLEMENTATION", href: "#" },
            { name: "OUTCOMES", href: "#" },
          ],
        },
        {
          letter: "H",
          title: "Performance of Administrative Personnel",
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
