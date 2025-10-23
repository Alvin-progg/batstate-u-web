import AreaPageTemplate from "@/components/AreaPageTemplate";
import { areaPageData, generateParameters, standardFiles } from "@/data/areaPageData";

export default async function AreaPage7() {
  const data = areaPageData[7];
  
  return (
    <AreaPageTemplate
      areaNumber={7}
      title={data.title}
      description={data.description}
      focalPerson={data.focalPerson}
      files={standardFiles}
      parameters={generateParameters(data.parametersCount)}
    />
  );
}
