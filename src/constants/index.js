import {
  mobile,
  backend,
  creator,
  web,
  typescript,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  next,
  postman,
  laravel,
  rick,
  ali,
  bilal,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Backend & API Development",
    icon: web,
  },
  {
    title: "Frontend & UI Engineering",
    icon: mobile,
  },
  {
    title: "Full-Stack SaaS Architecture",
    icon: backend,
  },
  {
    title: "AI & Custom API Integration",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Next.js",
    icon: next,
  },
  {
    name: "Jest",
    icon: postman,
  },
  {
    name: "Redis",
    icon: laravel,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];
const experiences = [
  {
    title: "co-founder & CTO",
    company_name: "Smart Gridz  ",
    icon: starbucks,
    iconBg: "#383E56",
    date: "January 2025 - Present",
    points: [
      "Co-founded a clean-energy startup focused on enabling peer-to-peer energy sales for solar owners via a variable-rate platform.",
      "Secured pre-seed funding and partnership with the United Nations Development Programme (UNDP).",
      "Leading the development of the software platform for energy flow management, dynamic pricing, billing, and user transactions.",
      "Developing the IoT integration model (Raspberry Pi/Arduino) to interface with solar systems for real-time energy metering and sales.",
      " Share responsibility for technical business strategy, fundraising, and overall business operations with the co-founder (Bob, Mechanical/Renewable Energy Engineer).",
    ],
  },
  {
    title: "Full-Stack Web Development Bootcamp",
    company_name: "SE FACTORY",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "February 2023 - May 2023",
    points: [
      "Completed an intensive full-stack web development program covering cloud architecture, front-end and back-end development, source control, and web application security over 14 weeks of lectures, workshops, and projects.",
      "Learned Many languages and frameworks including Laravel, react, react native, nodejs with express, and django",
      "Acquired proficiency in using tools and libraries such as Postman, Redux and Redux Toolkit, Bootstrap, Git, Docker, and Figma.",
      "Created a full-stack mobile app about an AI wallet-budget tracker that utilizes AI technology to help the users in their financial decisions.",
    ],
  },
  {
    title: "Founder and Manager",
    company_name: "Bachir Auto Keys",
    icon: shopify,
    iconBg: "#383E56",
    date: "January 2017 – September 2024",
    points: [
      "Owned and managed automotive keys and services shop, overseeing all aspects of the business, including customer service, inventory, and team performance, resulting in increased revenue and profitability.",
      "Furthermore, I successfully implemented streamlined operational processes and trained my team to such a degree that the business now operates efficiently and autonomously, no longer requiring my daily involvement.",
    ],
  },
  {
    title: "Freelance Web Developer",
    company_name: "Freelance",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "January 2020 – Present",
    points: [
      "Developed websites for clients in the automotive industry using a variety of programming languages and technologies.",
      "Worked with clients to gather requirements and create wireframes and prototypes.",
      "Implemented websites that met the needs of the clients and exceeded their expectations.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Hassan is a back-end wizard with an unbeatable work ethic. His coding prowess powers projects effortlessly, and his dedication to excellence is unparalleled.",
    name: "Bilal Fakih",
    designation: "Software Engeneer",
    company: "CME",
    image: bilal,
  },
  {
    testimonial:
      "Hassan is an outstanding front-end developer. His ability to create visually captivating and user-friendly interfaces is impressive. Hassan is an invaluable asset to any project.",

    name: "Ali Khodor",
    designation: "Founder",
    company: "shoghol.org",
    image: ali,
  },
  {
    testimonial:
      "I don't usually waste my time with testimonials, but this one's an exception. His work is like a portal to creativity itself,a portfolio that stands out across the multiverse.  ",
    name: "Rick Sanchez C-137",
    designation: "Smartest man",
    company: "the multiverse",
    image: rick,
  },
];

const projects = [
  {
    name: "CaseCanvas",
    description:
      "A dedicated e-commerce platform that allows customers to fully personalize, preview, and order custom-printed cases for various tech accessories.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "ShadcnUI",
        color: "pink-text-gradient",
      },
      {
        name: "FramerMotion",
        color: "blue-text-gradient",
      },
      {
        name: "TanStackQuery",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://casecanvaslb.vercel.app/",
  },
  {
    name: "AI Wallii",
    description:
      "Mobile app that uses openAI language models in a financial wallet and budget tracker to Help users track and manage their finances with the help of AI.",
    tags: [
      {
        name: "OpenAi",
        color: "blue-text-gradient",
      },
      {
        name: "ReactNative",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/hassan-bachir/Wallii",
  },
  {
    name: "SharePrompts",
    description:
      "Web application that enables users to create and save, search for, edit and delete AI prompts, this app uses google authentication, and the user can seach for all kind of usefull AI prompts.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "GoogleAuth",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/hassan-bachir/share_prompts",
  },
];

export { services, technologies, experiences, testimonials, projects };
