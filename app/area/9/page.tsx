import AreaPageTemplate from "@/components/AreaPageTemplate";
import { areaPageData } from "@/data/areaPageData";

export default async function AreaPage9() {
  const data = areaPageData[9];

  return (
    <AreaPageTemplate
      areaNumber={9}
      title={data.title}
      description={data.description}
      focalPerson={data.focalPerson}
      files={[
        {
          name: "QBAQ Instrument for Level 1",
          href: "https://drive.google.com/file/d/1GHcSZUqlr3wuDxmnZvRG46CYuipec_mj/view?usp=drive_link",
        },
        {
          name: "Program Performance Profile",
          href: "https://docs.google.com/document/d/1AIhbwhjC5TfS79hJpGQyCdB07rZrWYwM/edit?usp=drive_link&ouid=116473025810016534374&rtpof=true&sd=true",
        },
        { name: "Self-Survey", href: "https://link-to-file3" },
        { name: "Supplemental Folder", href: "https://link-to-file4" },
      ]}
      titleHref="https://drive.google.com/drive/folders/1vOjwkZh2PoK34pmTf1wNz-Wpkdvor_qi?usp=drive_link"
      parameters={[
        {
          letter: "A",
          title: "Laboratories, Shops and Facilities",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/1FpTsSMFcR9FKmcF8yIJZOtUDyimXKb1c?usp=drive_link",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/1Q7qYHODPmSl6_41PwNPF-yvonYQ1f8Eg?usp=drive_link",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/1JU0v2gQn76-ZzD1xfH2i8_7Ezyz6C4AA?usp=drive_link",
            },
          ],
        },
        {
          letter: "B",
          title: "Equipment, Supplies and Materials",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/1FpVpcEWrAcsGuGMZtxkznfMof6im0uS5?usp=drive_link",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/11LqCvWwZHsXaJg2sfjVcWsssCEWk5YTC?usp=drive_link",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/1ohb6m7sUUR19FL5xSokp0fZ-mUpCTRVA?usp=drive_link",
            },
          ],
        },
        {
          letter: "C",
          title: "Maintenance",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/1h2mOcqK4bosNkLXC6SC6Xeijmm4gxj7a?usp=drive_link",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/15PTcjzyus2hCcknLbRnwB_dMmCEJbSmt?usp=drive_link",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/1_tJD619wtr7Cai5lNDqKBwYGVkiUnKuU?usp=drive_link",
            },
          ],
        },
        {
          letter: "D",
          title: "Special Provisions",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/13pjUEIApLuHy1NWc6WWd1A6d_IxOrAPD?usp=drive_link",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/1ppM3CWPL8fhYtKwMEWS4-D948upZKAdD?usp=drive_link",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/12iZxL5-gTGjWsRtEZTaRrY5zDmVqF6nR?usp=drive_link",
            },
          ],
        },
      ]}
    />
  );
}
