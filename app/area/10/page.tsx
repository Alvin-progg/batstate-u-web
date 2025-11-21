import AreaPageTemplate from "@/components/AreaPageTemplate";
import { areaPageData, standardFiles } from "@/data/areaPageData";

export default async function AreaPage10() {
  const data = areaPageData[10];
  
  return (
    <AreaPageTemplate
      areaNumber={10}
      title={data.title}
      description={data.description}
      focalPerson={data.focalPerson}
      files={standardFiles}
       titleHref="https://drive.google.com/drive/folders/1faAn0sCqSDs2ZsF0OOlj4UtcdyZy8Wmj?usp=drive_link"
      parameters={[
        {
          letter: "A",
          title: "Organization",
          items: [
            { name: "SYSTEM. Inputs and Processes", href: "https://drive.google.com/drive/folders/1sBmfG7uqdqsACSkR7KVdfQ-1wJwlFeBd?usp=drive_link" },
            { name: "IMPLEMENTATION", href: "https://drive.google.com/drive/folders/1-CrnkxjjXyXuO6W4p4DHfpsIAPq5jYN5?usp=drive_link" },
            { name: "OUTCOMES", href: "https://drive.google.com/drive/folders/16Cv0O2w44RzUzdKnncnAYHCZ6r6NrqQJ?usp=drive_link" },
          ],
        },
        {
          letter: "B",
          title: "Academic Administration",
          items: [
            { name: "SYSTEM. Inputs and Processes", href: "https://drive.google.com/drive/folders/1xNz6Oys20MEX3nbcAo7zXzVIQK_PFcyG?usp=drive_link" },
            { name: "IMPLEMENTATION", href: "https://drive.google.com/drive/folders/1IyDsRj9GAAcNTq07midxYi1R33b5cAVd?usp=drive_link" },
            { name: "OUTCOMES", href: "https://drive.google.com/drive/folders/1dhJnUJGE4N27_mVuM7OQUSuryZzRQPFo?usp=drive_link" },
          ],
        },
        {
          letter: "C",
          title: "Student Administration",
          items: [
            { name: "SYSTEM. Inputs and Processes", href: "https://drive.google.com/drive/folders/1JBpUFaKPFoG7PpyOnSSXv9A8EGKZ5tOp?usp=drive_link" },
            { name: "IMPLEMENTATION", href: "https://drive.google.com/drive/folders/1W_-PXX5iNa9vpMpFxSH1xlKmNyaIwCZv?usp=drive_link" },
            { name: "OUTCOMES", href: "https://drive.google.com/drive/folders/1o4kO55un8D0cW78SeRxHD7zcdbsSVmiM?usp=drive_link" },
          ],
        },
        {
          letter: "D",
          title: "Financial Management",
          items: [
            { name: "SYSTEM. Inputs and Processes", href: "https://drive.google.com/drive/folders/1KiNTMUv5wJN_hHvWgCHwZLAVAQLfQXC4?usp=drive_link" },
            { name: "IMPLEMENTATION", href: "https://drive.google.com/drive/folders/19sqOtEmhebS-vOFsT6ERaVHf0MjFGD4N?usp=drive_link" },
            { name: "OUTCOMES", href: "https://drive.google.com/drive/folders/1bX5XcuJzBcBhzHRhbfjnsl6xx9vTw8XG?usp=drive_link" },
          ],
        },
        {
          letter: "E",
          title: "Supply Management",
          items: [
            { name: "SYSTEM. Inputs and Processes", href: "https://drive.google.com/drive/folders/1Hb4FMzkSRyn3z0tJXpHLsMhJMKn7_SzG?usp=drive_link" },
            { name: "IMPLEMENTATION", href: "https://drive.google.com/drive/folders/12L989qxkMkpg4zY8YjqMiyja_SE0I7_I?usp=drive_link" },
            { name: "OUTCOMES", href: "https://drive.google.com/drive/folders/1uWNa5vxDPtiGO3fTlaOT4vuxUv5xA0t2?usp=drive_link" },
          ],
        },
        {
          letter: "F",
          title: "Record Management",
          items: [
            { name: "SYSTEM. Inputs and Processes", href: "https://drive.google.com/drive/folders/1bqL2yi7o2BalYeFm4gUOs5O90fFNkxa9?usp=drive_link" },
            { name: "IMPLEMENTATION", href: "https://drive.google.com/drive/folders/1N7DT-6VrBsP-TF9zqDLBvm3a_bnduIaB?usp=drive_link" },
            { name: "OUTCOMES", href: "https://drive.google.com/drive/folders/1z3N9S04Yb-wAEFdQGweD2zeablVwFCTn?usp=drive_link" },
          ],
        },
        {
          letter: "G",
          title: "Institutional Plannng and Development",
          items: [
            { name: "SYSTEM. Inputs and Processes", href: "https://drive.google.com/drive/folders/1a1CNE2nJcYdbmAMrw5hK9ynQBROsWJCd?usp=drive_link" },
            { name: "IMPLEMENTATION", href: "https://drive.google.com/drive/folders/14N_SJgQFCXIEXwLf0Hm_RFwEgaX6yKo9?usp=drive_link" },
            { name: "OUTCOMES", href: "https://drive.google.com/drive/folders/1NzoRSB6UycwZySBscEv2J7vx5P6q7-Fm?usp=drive_link" },
          ],
        },
        {
          letter: "H",
          title: "Performance of Administrative Personnel",
          items: [
            { name: "SYSTEM. Inputs and Processes", href: "https://drive.google.com/drive/folders/1dtaon3B6BC5xO6Lxxp7lZ510lxKNXc5E?usp=drive_link" },
            { name: "IMPLEMENTATION", href: "https://drive.google.com/drive/folders/1dWLWMRzcFvNJPLDfNzsemHUtyVejIPGn?usp=drive_link" },
            { name: "OUTCOMES", href: "https://drive.google.com/drive/folders/1xhHC9NgiM8TkZlWrAq0FEEw8mO3lMNbz?usp=drive_link" },
          ],
        },
      ]}
    />
  );
}
