import AreaPageTemplate from "@/components/AreaPageTemplate";
import { areaPageData, generateParameters, standardFiles } from "@/data/areaPageData";

export default async function AreaPage3() {
  const data = areaPageData[3];
  
  return (
    <AreaPageTemplate
      areaNumber={3}
      title={data.title}
      description={data.description}
      focalPerson={data.focalPerson}
      files={standardFiles}
      parameters={generateParameters(data.parametersCount)}
    />
  );
}