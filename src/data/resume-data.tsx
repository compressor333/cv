import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  pbl,
  TastyCloudLogo,
  YearProgressLogo,
} from "../images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "../components/icons";

export const RESUME_DATA = {
  name: "Рудакс Антон",
  initials: "РА",
  location: "Санкт-Петербург, Россия, GMT +3",
  locationLink: "https://www.google.com/maps/place/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3,+%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F/@59.9394575,29.4353772,9z/data=!3m1!4b1!4m6!3m5!1s0x4696378cc74a65ed:0x6dc7673fab848eff!8m2!3d59.9310584!4d30.3609096!16zL20vMDZwcjY?e",
  about:
    "Junior Frontend разработчик, разрабатываю продукт с большим вниманием к деталям",
  summary:
    "Как фронтенд разработчик я успешно самообучился с 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 8 years of experience in working remotely with companies all around the world.",
  avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "bartosz.jarocki@hey.com",
    tel: "+48530213401",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/BartoszJarocki",
        icon: GitHubIcon,
      },
    ],
  },
  education: [
    {
      school: "Wrocław University of Technology",
      degree: "Bachelor's Degree in Control systems engineering and Robotics",
      start: "2007",
      end: "2010",
    },
  ],
  work: [
    {
      company: "Parabol",
      link: "https://parabol.co",
      badges: ["Remote"],
      title: "Senior Full Stack Developer",
      logo: pbl,
      start: "2021",
      end: "2024",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Mongoose",
    "Webpack",
    "Express",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
  ],
} as const;
