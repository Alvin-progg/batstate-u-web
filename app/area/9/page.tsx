import AreaPageTemplate from "@/components/AreaPageTemplate";
import { areaPageData, generateParameters, standardFiles } from "@/data/areaPageData";

export default async function AreaPage9() {
  const data = areaPageData[9];
  
  return (
    <AreaPageTemplate
      areaNumber={9}
      title={data.title}
      description={data.description}
      focalPerson={data.focalPerson}
      files={standardFiles}
      parameters={generateParameters(data.parametersCount)}
    />
  );
}
