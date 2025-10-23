import AreaPageTemplate from "@/components/AreaPageTemplate";
import { areaPageData, generateParameters, standardFiles } from "@/data/areaPageData";

export default async function AreaPage5() {
  const data = areaPageData[5];
  
  return (
    <AreaPageTemplate
      areaNumber={5}
      title={data.title}
      description={data.description}
      focalPerson={data.focalPerson}
      files={standardFiles}
      parameters={generateParameters(data.parametersCount)}
    />
  );
}
