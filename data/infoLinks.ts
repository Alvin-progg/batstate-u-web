import {
  BookOpen,
  FolderOpen,
  Download,
  Users,
  ChevronDown,
} from "lucide-react";

export const infoLinks = [
  {
    title: "Program of Activities",
    icon: BookOpen,
    href: "/activity",
    group: "General Information",
  },
  {
    title: "Directory of Accreditation Task Force",
    icon: Users,
    href: "https://drive.google.com/file/d/1UHF8RA-tZBpMFYVZE8C02-3iAXzRJNh0/view?usp=sharing",
    group: "General Information",
  },
  {
    title: "Reference Files",
    icon: FolderOpen,
    group: "Resources",
    dropdown: [
      { name: "Curriculum", href: "https://drive.google.com/file/d/1uS8iI8zV5EwdgqVHEPqkzJCw5hYkfmc9/view?usp=drive_link" },
      { name: "Certificate of Program Compliance", href: "#" },
      {
        name: "CMO 25 s2015. Policies, Standards and Guidelines for BSIT",
        href: "https://drive.google.com/file/d/1cMyrs7ux2rvPO9OJOclowG9T7yjEit9u/view?usp=drive_link",
      },
      {
        name: "AACCUP Technical Review Board Action (PSV)",
        href: "https://docs.google.com/document/d/1mlhuUsQLYlbPqXT6rwSiht66sbbVRMoH/edit?usp=drive_link&ouid=105050822881944852266&rtpof=true&sd=true",
      },
    ],
  },
  {
    title: "Downloads",
    icon: Download,
    href: "https://drive.google.com/drive/folders/1DJYyDG3oAP0hKlhcVSpxsY8J_guBbPmE?usp=drive_link",
    group: "Resources",
  },
];

export { ChevronDown };
