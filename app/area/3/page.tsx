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
      files={[
        {
          name: "QBAQ Instrument for Level 1",
          href: "https://drive.google.com/file/d/1RJFdAKbhsDxjAc7IkDKHDuyMleGdXNCU/view?usp=drive_link",
        },
        {
          name: "Program Performance Profile",
          href: "https://docs.google.com/document/d/11hvt_y7gkE-VX3gNv9x2DWhPTDh9QR8K/edit?usp=drive_link&ouid=116473025810016534374&rtpof=true&sd=true",
        },
        { name: "Self-Survey", href: "https://link-to-file3" },
        { name: "Supplemental Folder", href: "https://link-to-file4" },
      ]}
      titleHref="https://drive.google.com/drive/folders/1Fa9Lm8NnFbqY67RJMbfJl5XS0NZxdIA6"
      parameters={[
        {
          letter: "A",
          title: "Curriculum and Program of Studies",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/17rL4aTsO9E1coRIEC89H9Xll0_0F-HCz",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/17rL4aTsO9E1coRIEC89H9Xll0_0F-HCz",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/17rL4aTsO9E1coRIEC89H9Xll0_0F-HCz",
            },
          ],
        },
        {
          letter: "B",
          title:
            "Instructional Processes, Methodologies and Learning Enhancement Opportunities",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/1IsJpB9tzwv7Fz7-El_VY30MKyeJgs3HO",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/1IsJpB9tzwv7Fz7-El_VY30MKyeJgs3HO",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/1IsJpB9tzwv7Fz7-El_VY30MKyeJgs3HO",
            },
          ],
        },
        {
          letter: "C",
          title: "Assessment of Academic Performance",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/1vwXTtHzHXMtV85QM9MZeDhRKIlkRAi0e",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/1vwXTtHzHXMtV85QM9MZeDhRKIlkRAi0e",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/1vwXTtHzHXMtV85QM9MZeDhRKIlkRAi0e",
            },
          ],
        },
        {
          letter: "D",
          title: "Management of Learning",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/1auyUsekNbtAs5WggeA95qWBBWYwYItqu",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/1auyUsekNbtAs5WggeA95qWBBWYwYItqu",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/1auyUsekNbtAs5WggeA95qWBBWYwYItqu",
            },
          ],
        },
        {
          letter: "E",
          title: "Graduation Requirements",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/1EwpV8PXcx5X38a86P3vYTipSiaeUbMnw",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/1EwpV8PXcx5X38a86P3vYTipSiaeUbMnw",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/1EwpV8PXcx5X38a86P3vYTipSiaeUbMnw",
            },
          ],
        },
        {
          letter: "F",
          title: "Administrative Support for Effective Instruction",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/1m1Hp9aj5KGLEWRTUm8x-q51X1pEd2p7l",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/1m1Hp9aj5KGLEWRTUm8x-q51X1pEd2p7l",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/1m1Hp9aj5KGLEWRTUm8x-q51X1pEd2p7l",
            },
          ],
        },
      ]}
    />
  );
}

