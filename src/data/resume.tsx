import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const Data = {
  name: "Lee DongWook",
  location: "PyeongTaek, Gyeonggi",
  description: "향상된 UX를 제공하고자 노력하는 개발자 이동욱입니다.",
  summary: "",
  avatarUrl: "./certificate.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Redux-toolkit",
    "Recoil",
    "React-Query",
    "Tailwindcss",
    "Styled-Components",
    "Storybook",
    "Playwright",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "dlehddnr0713@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Lee-Dongwook",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dong-wook-lee-1095112a0/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
  work: [
    {
      company: "FutureWorkLab",
      badges: [],
      location: "Remote, Seoul",
      title: "Frontend Developer",
      start: "October 2024",
      end: "Current",
      description: "",
    },
    {
      company: "EXEM",
      badges: [],
      href: "https://www.ex-em.com/",
      location: "Seoul",
      title: "Frontend Developer Intern",
      start: "July 2023",
      end: "December 2023",
      description: "",
    },
  ],
  education: [
    {
      school: "Hongik.Univ",
      start: "2018.03",
      end: "2024.08",
    },
  ],
  projects: [
    {
      title: "",
      href: "",
      dates: "",
      active: true,
      description: "",
      technologies: [],
      links: [
        {
          type: "Website",
        },
      ],
    },
  ],
} as const;
