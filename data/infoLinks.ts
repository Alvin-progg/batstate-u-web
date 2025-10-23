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
    href: "https://drive.google.com/file/d/1fHI9w5f-ZSax8rBvVmgNHc3Y7t-gWb9U/view?usp=sharing",
    group: "General Information",
  },
  {
    title: "Reference Files",
    icon: FolderOpen,
    group: "Resources",
    dropdown: [
      { name: "Curriculum", href: "#" },
      { name: "Certificate of Program Compliance", href: "#" },
      {
        name: "CMO 17 s2017. Policies, Standards and Guidelines for BSIT",
        href: "#",
      },
      {
        name: "AACCUP Technical Review Board Action (PSV)",
        href: "#",
      },
    ],
  },
  {
    title: "Downloads",
    icon: Download,
    href: "https://drive.google.com/drive/folders/1ye1I7yYH7S8jV-xTdV6v3uFmQJlMbP3x",
    group: "Resources",
  },
];

export { ChevronDown };
