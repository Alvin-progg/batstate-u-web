import AreaPageTemplate from "@/components/AreaPageTemplate";
import { areaPageData, standardFiles } from "@/data/areaPageData";

export default async function AreaPage2() {
  const data = areaPageData[2];
  
  return (
    <AreaPageTemplate
      areaNumber={2}
      title={data.title}
      description={data.description}
      focalPerson={data.focalPerson}
      files={standardFiles}
      titleHref="https://drive.google.com/drive/folders/1FQzjJtcOGZdFasLZvI4PuZS0yalyeHfa"
      parameters={[
        {
          letter: "A",
          title: "Academic Qualifications and Professional Experience",
          items: [
            { name: "SYSTEM. Inputs and Processes", href: "https://drive.google.com/drive/folders/1rpQ1YKASmJBY1Na6DU_wUp-M0YgSzrhA" },
            { name: "IMPLEMENTATION", href: "https://drive.google.com/drive/folders/1Ssvd4DAVTRauUoS83mGM37VV3iKpoflC" },
            { name: "OUTCOMES", href: "https://drive.google.com/drive/folders/1FP28HrmNOqGdXP5OFSkFXX0Gr6EQbqP6" },
          ],
        },
        {
          letter: "B",
          title: "Recruitment, Selection and Orientation",
          items: [
            { name: "SYSTEM. Inputs and Processes", href: "https://drive.google.com/drive/folders/1En7sm5tmBTBXgLMSYz9xszUDlmDw2InI" },
            { name: "IMPLEMENTATION", href: "https://drive.google.com/drive/folders/1-lO4inYHywyPUF-bzLFTRrY9kNOMKAzR" },
            { name: "OUTCOMES", href: "https://drive.google.com/drive/folders/1DK8hfDxgD6MYkKtlpXvpIidPc3Xnwttq" },
          ],
        },
        {
          letter: "C",
          title: "Faculty Adequacy and Loading",
          items: [
            { name: "SYSTEM. Inputs and Processes", href: "https://drive.google.com/drive/folders/1JYqkjBqNDKIWa2G3p22vQwedOU4K7Dx0" },
            { name: "IMPLEMENTATION", href: "https://drive.google.com/drive/folders/12yB1UAQ7aXRyf7jwMqcHiF7JQJgs3sTp" },
            { name: "OUTCOMES", href: "https://drive.google.com/drive/folders/1L42V2URSTI4vkWdBnOQtNcRPwhB-os7_" },
          ],
        },
        {
          letter: "D",
          title: "Rank and Tenure",
          items: [
            { name: "SYSTEM. Inputs and Processes", href: "https://drive.google.com/drive/folders/1V0Akv8uIZZSPYs7dQcbiMWHUfTjf0eKn" },
            { name: "IMPLEMENTATION", href: "https://drive.google.com/drive/folders/1MEU2Nl3XkTuyJtRmBFy6nGW5KzKDuf2B" },
            { name: "OUTCOMES", href: "https://drive.google.com/drive/folders/1InhuaLGDbsd_XcE8wbwk16DRlNf-HlNW" },
          ],
        },
        {
          letter: "E",
          title: "Faculty Development",
          items: [
            { name: "SYSTEM. Inputs and Processes", href: "https://drive.google.com/drive/folders/178T3di23TuyjtBPfD2YHrZnP8Lo5jnxN" },
            { name: "IMPLEMENTATION", href: "https://drive.google.com/drive/folders/1gN_UC1T2YjB7cX1SZrTO5bxCrtRcer3D" },
            { name: "OUTCOMES", href: "https://drive.google.com/drive/folders/1279z5LC2CcW4othkCEcB9Qv7aqgESfTU" },
          ],
        },
        {
          letter: "F",
          title: "Professional Performance and Scholarly Works",
          items: [
            { name: "SYSTEM. Inputs and Processes", href: "https://drive.google.com/drive/folders/1w2p6RBKQT6fzksfFoHHPDDFsXC41JTZb" },
            { name: "IMPLEMENTATION", href: "https://drive.google.com/drive/folders/12xVFQhrHbTauFpOruuO0DRwYw_jsrg4m" },
            { name: "OUTCOMES", href: "https://drive.google.com/drive/folders/1zljLQScamYmLfXe11JAWZKWtpoVdOfa4" },
          ],
        },
        {
          letter: "G",
          title: "Salaries, Fringe Benefits and Incentives",
          items: [
            { name: "SYSTEM. Inputs and Processes", href: "https://drive.google.com/drive/folders/1ytc5neF_Qg4Zy3wiYXmwAZI8Hb7q2qby" },
            { name: "IMPLEMENTATION", href: "https://drive.google.com/drive/folders/1fE57gArrakM-DNAhcs2n0s0-V827sOoV" },
            { name: "OUTCOMES", href: "https://drive.google.com/drive/folders/1DRluX28KlkfECLuiU2s9BeNrjwrZduBy" },
          ],
        },
        {
          letter: "H",
          title: "Professionalism",
          items: [
            { name: "SYSTEM. Inputs and Processes", href: "https://drive.google.com/drive/folders/1XafW-vvz7tUqlyMY14NZvz9-oXGbFc6X" },
            { name: "IMPLEMENTATION", href: "https://drive.google.com/drive/folders/18WUUv8Uf1QaBw9fAbQiqJRYhfbf3VHxU" },
            { name: "OUTCOMES", href: "https://drive.google.com/drive/folders/11Jscjxn7CNpWIHi8LjSg3SNpW5GJGcCN" },
          ],
        },
      ]}
    />
  );
}