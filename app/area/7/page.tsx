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
      parameters={[
        {
          letter: "A",
          title: "Administration",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/1r4x2a6-E3kJXJ5zYpdtmI5EQ5RAIXegD",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/1ABeXLDA0CKFJSxrTGJz8I6UQm44U6Xbq",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/1ePTdsxJs0kQ8OFMlzf3u7jIwuepqd564",
            },
          ],
        },
        {
          letter: "B",
          title: "Administrative Staff",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/12tdmRXDJdG7hLo6HplKO1qpG9iV0HHAy",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/1w42u6IHYXZSzgObZyR-Ksxjqn-q3eeGY",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/1DkwnavCmfbOiftc1xgL1aeBTrbPdNnB8",
            },
          ],
        },
        {
          letter: "C",
          title: "Collection Development, Organization and Perservation",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/1IVZCib63Xqy4TNNKL38X-LC0qNBeAuAk",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/1Kve9sgK6pRoOhhQph64O-_OKDLj6Rbrb",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/1WHLWAJy4BF-oPBOSWXAmrLlKrqpaDZJR",
            },
          ],
        },
        {
          letter: "D",
          title: "Services and Utilization",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/1ie6T90H0MFmV-CHyFf9RyiIz13_dt1vt",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/1LbdzZ9g2mQ1mtJ-Qucisp2V5gNAXxTYt",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/14LBAf8xotEtDrmgGjwzoMNAxbc8JGMXL",
            },
          ],
        },
        {
          letter: "E",
          title: "Physical Set-up and Facilities",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/177ckKMwd1A7W74qGe15_PTJxW-qpI9yU",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/1PI1mKUJr8_xfRG0JbFbBbVymycO-9QbX",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/1RK1qx0FKpBZLm3nENDySbsIjbjVlx1bU",
            },
          ],
        },
        {
          letter: "F",
          title: "Financial Support",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/15rhxqp_CuR_P2weW4ep29hOyRCB3mhz0",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/14TkC0EvfIa5DekHSnwwqavmSlyaoHvMK",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/1pEnStjeS5c3sG0QjQz4uQ2t7H3cSgtAI",
            },
          ],
        },
        {
          letter: "G",
          title: "Linkages",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/1dgPF_TlnEZi2c56QHerbJPgYPAKeMi3E",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/1N6bkzi3EFYrsEuUkJVElZ11VEpWJKu57",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/1bavaJuvGK1Th6vGorWqyo5E7zJclyK1W",
            },
          ],
        },
      ]}
    />
  );
}
