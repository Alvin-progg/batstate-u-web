import AreaPageTemplate from "@/components/AreaPageTemplate";
import { areaPageData, generateParameters, standardFiles } from "@/data/areaPageData";

export default async function AreaPage4() {
  const data = areaPageData[4];
  
  return (
    <AreaPageTemplate
      areaNumber={4}
      title={data.title}
      description={data.description}
      focalPerson={data.focalPerson}
      files={standardFiles}
      parameters={generateParameters(data.parametersCount)}
    />
  );
}
