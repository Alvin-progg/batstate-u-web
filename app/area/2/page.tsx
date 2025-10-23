import AreaPageTemplate from "@/components/AreaPageTemplate";

export default async function AreaPage2() {
  return (
    <AreaPageTemplate
      areaNumber={2}
      title="FACULTY"
      description="The strength of the BSIT program lies in its highly qualified faculty. Our teaching staff comprises professionals with advanced degrees in finance, accounting, and related fields, many of whom bring real-world experience from leading corporations and institutions."
      focalPerson={{
        name: "Mr. Joshua C. Abella",
        email: "joshua.abella@g.batstate-u.edu.ph",
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
        {
          letter: "C",
          title: "Statement of Vision, Mission, Goals and Objectives",
          items: [
            "SYSTEM. Inputs and Processes",
            "IMPLEMENTATION",
            "OUTCOMES",
          ],
        },
        {
          letter: "D",
          title: "Dissemination and Acceptability",
          items: [
            "SYSTEM. Inputs and Processes",
            "IMPLEMENTATION",
            "OUTCOMES",
          ],
        },
        {
          letter: "E",
          title: "Statement of Vision, Mission, Goals and Objectives",
          items: [
            "SYSTEM. Inputs and Processes",
            "IMPLEMENTATION",
            "OUTCOMES",
          ],
        },
        {
          letter: "F",
          title: "Dissemination and Acceptability",
          items: [
            "SYSTEM. Inputs and Processes",
            "IMPLEMENTATION",
            "OUTCOMES",
          ],
        },
        {
          letter: "G",
          title: "Statement of Vision, Mission, Goals and Objectives",
          items: [
            "SYSTEM. Inputs and Processes",
            "IMPLEMENTATION",
            "OUTCOMES",
          ],
        },
        {
          letter: "H",
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