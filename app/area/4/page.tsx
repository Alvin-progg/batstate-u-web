import AreaPageTemplate from "@/components/AreaPageTemplate";
import { areaPageData, standardFiles } from "@/data/areaPageData";

export default async function AreaPage4() {
  const data = areaPageData[4];
  
  return (
    <AreaPageTemplate
      areaNumber={4}
      title={data.title}
      description={data.description}
      focalPerson={data.focalPerson}
      files={standardFiles}
      titleHref="https://drive.google.com/drive/folders/1JgVMnuTU904roLRh-SPxqTxlZckG_mWg"
      parameters={[
        {
          letter: "A",
          title: "Student Services Program (SSP)",
          items: [
            { name: "SYSTEM. Inputs and Processes", href: "https://drive.google.com/drive/folders/1CSD1TUE6PCy8XTdqnfHTbtebUWsPAmul" },
            { name: "IMPLEMENTATION", href: "https://drive.google.com/drive/folders/19Xv4GdSLGeuQXPpCfiueLOsLH9Qr6Txg" },
            { name: "OUTCOMES", href: "https://drive.google.com/drive/folders/17rP2XsG-guVqrGuEIjlGV4AtCG3CfB5W" },
          ],
        },
        {
          letter: "B",
          title: "Student Welfare",
          items: [
            { name: "SYSTEM. Inputs and Processes", href: "https://drive.google.com/drive/folders/1SjRGlydx6xCXtMZ58bpCl0C6s2cWcKJZ" },
            { name: "IMPLEMENTATION", href: "https://drive.google.com/drive/folders/1N5uraQO-qA47ggrlne_dNqcT0inOlDyf" },
            { name: "OUTCOMES", href: "https://drive.google.com/drive/folders/1DolRshuZtODXc8n1c3D7rNpCS0Np4st_" },
          ],
        },
        {
          letter: "C",
          title: "Student Development",
          items: [
            { name: "SYSTEM. Inputs and Processes", href: "https://drive.google.com/drive/folders/10xAeDB1m4xGl95gHlpyYGaXz2X53AGIi" },
            { name: "IMPLEMENTATION", href: "https://drive.google.com/drive/folders/1AhIkhMrPbTLCa4PUM2kgWBunxyB0PtKo" },
            { name: "OUTCOMES", href: "https://drive.google.com/drive/folders/1YmyaYdz93jozNzmApjh1nMwIGJRgs50a" },
          ],
        },
        {
          letter: "D",
          title: "Institutional Student Programs and Services",
          items: [
            { name: "SYSTEM. Inputs and Processes", href: "https://drive.google.com/drive/folders/1YE8qzhCUgVYgGb-g8836mTqqxcGZyidk" },
            { name: "IMPLEMENTATION", href: "https://drive.google.com/drive/folders/1zBYEOmCH-xjvdGIyh5lJrqw75b9yriRO" },
            { name: "OUTCOMES", href: "https://drive.google.com/drive/folders/1IrKhNtbMoFxQPSxgIAHbfXUVPoD2Ibgs" },
          ],
        },
        {
          letter: "E",
          title: "Research, Monitoring and Evaluation",
          items: [
            { name: "SYSTEM. Inputs and Processes", href: "https://drive.google.com/drive/folders/1_NChSWBcOwS3hEHdxUp6M4tgwuOKc7ir" },
            { name: "IMPLEMENTATION", href: "https://drive.google.com/drive/folders/1AEfXg21wSom3fXoiWviclqFWtkOySUQs" },
            { name: "OUTCOMES", href: "https://drive.google.com/drive/folders/1YBZrl1-O_JNbgUk-TvqjRK6xJayLF_dd" },
          ],
        },
      ]}
    />
  );
}
