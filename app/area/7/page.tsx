import AreaPageTemplate from "@/components/AreaPageTemplate";
import { areaPageData, standardFiles } from "@/data/areaPageData";

export default async function AreaPage7() {
  const data = areaPageData[7];
  
  return (
    <AreaPageTemplate
      areaNumber={7}
      title={data.title}
      description={data.description}
      focalPerson={data.focalPerson}
      files={standardFiles}
      titleHref="https://drive.google.com/drive/folders/18M4xW76V_7OiwqhBk-PQnABu9Opc6F8D?usp=drive_link"
      parameters={[
        {
          letter: "A",
          title: "Administration",
          items: [
            { name: "SYSTEM. Inputs and Processes", href: "https://drive.google.com/drive/folders/1ABeXLDA0CKFJSxrTGJz8I6UQm44U6Xbq?usp=drive_link" },
            { name: "IMPLEMENTATION", href: "https://drive.google.com/drive/folders/1r4x2a6-E3kJXJ5zYpdtmI5EQ5RAIXegD?usp=drive_link" },
            { name: "OUTCOMES", href: "https://drive.google.com/drive/folders/1ePTdsxJs0kQ8OFMlzf3u7jIwuepqd564?usp=drive_link" },
          ],
        },
        {
          letter: "B",
          title: "Administrative Staff",
          items: [
            { name: "SYSTEM. Inputs and Processes", href: "https://drive.google.com/drive/folders/12tdmRXDJdG7hLo6HplKO1qpG9iV0HHAy?usp=drive_link" },
            { name: "IMPLEMENTATION", href: "https://drive.google.com/drive/folders/1w42u6IHYXZSzgObZyR-Ksxjqn-q3eeGY?usp=drive_link" },
            { name: "OUTCOMES", href: "https://drive.google.com/drive/folders/1DkwnavCmfbOiftc1xgL1aeBTrbPdNnB8?usp=drive_link" },
          ],
        },
        {
          letter: "C",
          title: "Collection Development, Organization and Preservation",
          items: [
            { name: "SYSTEM. Inputs and Processes", href: "https://drive.google.com/drive/folders/1IVZCib63Xqy4TNNKL38X-LC0qNBeAuAk?usp=drive_link" },
            { name: "IMPLEMENTATION", href: "https://drive.google.com/drive/folders/1Kve9sgK6pRoOhhQph64O-_OKDLj6Rbrb?usp=drive_link" },
            { name: "OUTCOMES", href: "https://drive.google.com/drive/folders/1WHLWAJy4BF-oPBOSWXAmrLlKrqpaDZJR?usp=drive_link" },
          ],
        },
        {
          letter: "D",
          title: "Service and Utilization",
          items: [
            { name: "SYSTEM. Inputs and Processes", href: "https://drive.google.com/drive/folders/1ie6T90H0MFmV-CHyFf9RyiIz13_dt1vt?usp=drive_link" },
            { name: "IMPLEMENTATION", href: "https://drive.google.com/drive/folders/1LbdzZ9g2mQ1mtJ-Qucisp2V5gNAXxTYt?usp=drive_link" },
            { name: "OUTCOMES", href: "https://drive.google.com/drive/folders/14LBAf8xotEtDrmgGjwzoMNAxbc8JGMXL?usp=drive_link" },
          ],
        },
      
        {
          letter: "E",
          title: "Physical Set-up and Facilities",
          items: [
            { name: "SYSTEM. Inputs and Processes", href: "https://drive.google.com/drive/folders/177ckKMwd1A7W74qGe15_PTJxW-qpI9yU?usp=drive_link" },
            { name: "IMPLEMENTATION", href: "https://drive.google.com/drive/folders/1PI1mKUJr8_xfRG0JbFbBbVymycO-9QbX?usp=drive_link" },
            { name: "OUTCOMES", href: "https://drive.google.com/drive/folders/1RK1qx0FKpBZLm3nENDySbsIjbjVlx1bU?usp=drive_link" },
          ],
        },
        {
          letter: "F",
          title: "Financial Support",
          items: [
            { name: "SYSTEM. Inputs and Processes", href: "https://drive.google.com/drive/folders/15rhxqp_CuR_P2weW4ep29hOyRCB3mhz0?usp=drive_link" },
            { name: "IMPLEMENTATION", href: "https://drive.google.com/drive/folders/14TkC0EvfIa5DekHSnwwqavmSlyaoHvMK?usp=drive_link" },
            { name: "OUTCOMES", href: "https://drive.google.com/drive/folders/1pEnStjeS5c3sG0QjQz4uQ2t7H3cSgtAI?usp=drive_link" },
          ],
        },
        {
          letter: "G",
          title: "Linkages",
          items: [
            { name: "SYSTEM. Inputs and Processes", href: "https://drive.google.com/drive/folders/1dgPF_TlnEZi2c56QHerbJPgYPAKeMi3E?usp=drive_link" },
            { name: "IMPLEMENTATION", href: "https://drive.google.com/drive/folders/1N6bkzi3EFYrsEuUkJVElZ11VEpWJKu57?usp=drive_link" },
            { name: "OUTCOMES", href: "https://drive.google.com/drive/folders/1bavaJuvGK1Th6vGorWqyo5E7zJclyK1W?usp=drive_link" },
          ],
        },
      ]}
    />
  );
}
