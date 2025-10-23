import AreaPageTemplate from "@/components/AreaPageTemplate";
import { areaPageData, standardFiles } from "@/data/areaPageData";

export default async function AreaPage9() {
  const data = areaPageData[9];

  return (
    <AreaPageTemplate
      areaNumber={9}
      title={data.title}
      description={data.description}
      focalPerson={data.focalPerson}
      files={standardFiles}
      parameters={[
        {
          letter: "A",
          title: "Laboratories, Shops/Facilities",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/1FpTsSMFcR9FKmcF8yIJZOtUDyimXKb1c",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/1Q7qYHODPmSl6_41PwNPF-yvonYQ1f8Eg",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/1JU0v2gQn76-ZzD1xfH2i8_7Ezyz6C4AA",
            },
          ],
        },
        {
          letter: "B",
          title: "Equipment and Supplies",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/1FpVpcEWrAcsGuGMZtxkznfMof6im0uS5",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/11LqCvWwZHsXaJg2sfjVcWsssCEWk5YTC",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/1ohb6m7sUUR19FL5xSokp0fZ-mUpCTRVA",
            },
          ],
        },
        {
          letter: "C",
          title: "Maintenance",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/1h2mOcqK4bosNkLXC6SC6Xeijmm4gxj7a",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/15PTcjzyus2hCcknLbRnwB_dMmCEJbSmt",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/1_tJD619wtr7Cai5lNDqKBwYGVkiUnKuU",
            },
          ],
        },
        {
          letter: "D",
          title: "Special",
          items: [
            {
              name: "SYSTEM. Inputs and Processes",
              href: "https://drive.google.com/drive/folders/13pjUEIApLuHy1NWc6WWd1A6d_IxOrAPD",
            },
            {
              name: "IMPLEMENTATION",
              href: "https://drive.google.com/drive/folders/1ppM3CWPL8fhYtKwMEWS4-D948upZKAdD",
            },
            {
              name: "OUTCOMES",
              href: "https://drive.google.com/drive/folders/12iZxL5-gTGjWsRtEZTaRrY5zDmVqF6nR",
            },
          ],
        },
      ]}
    />
  );
}
