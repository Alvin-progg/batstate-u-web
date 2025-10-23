import AreaPageTemplate from "@/components/AreaPageTemplate";

export default async function AreaPage1() {
  return (
    <AreaPageTemplate
      areaNumber={1}
      title="Vision, Mission, Goals, and Objectives"
      description="The VMGO effectively integrates the university's aspirations to lead in the global knowledge economy, its mission to nurture leaders through innovative education and impactful research, and its core values that shape the character and vision of the institution and its graduates."
      focalPerson={{
        name: "Dr. Sherry Joy A. Del Mundo",
        email: "sherry.delmundo@g.batstate-u.edu.ph",
      }}
      files={[
        "OBAQ Instrument for Level 1",
        "Program Performance Profile",
        "Self-Survey",
        "Supplemental Folder",
      ]}
      parameters={[
        {
          letter: "A",
          title: "Statement of Vision, Mission, Goals and Objectives",
          items: [
            "SYSTEM. Inputs and Processes",
            "IMPLEMENTATION",
            "OUTCOMES",
          ],
        },
        {
          letter: "B",
          title: "Dissemination and Acceptability",
          items: [
            "SYSTEM. Inputs and Processes",
            "IMPLEMENTATION",
            "OUTCOMES",
          ],
        },
      ]}
    />
  );
}