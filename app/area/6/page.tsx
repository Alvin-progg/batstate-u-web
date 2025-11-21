import AreaPageTemplate from "@/components/AreaPageTemplate";
import { areaPageData, standardFiles } from "@/data/areaPageData";

export default async function AreaPage6() {
  const data = areaPageData[6];
  
  return (
    <AreaPageTemplate
      areaNumber={6}
      title={data.title}
      description={data.description}
      focalPerson={data.focalPerson}
      files={standardFiles}
        titleHref="https://drive.google.com/drive/folders/1OdCC4qYGjN5oHz2YAiS6o4E_vknBoGHF?usp=drive_link"
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
