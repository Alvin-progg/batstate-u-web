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
    href: "#",
    group: "General Information",
  },
  {
    title: "Directory of Accreditation Task Force",
    icon: Users,
    href: "#",
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
    href: "#",
    group: "Resources",
  },
];

export { ChevronDown };
