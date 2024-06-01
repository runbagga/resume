import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  Ankush_Kalia_Me,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ankush Kalia",
  initials: "AK",
  location: "Noida, India",
  locationLink: "https://www.google.com/maps/place/Noida,+Uttar+Pradesh",
  about:
    "A seasoned Full Stack Developer with 12+ years of experience, specializing in delivering superior user experiences through expertly crafted, scalable web applications.",
  summary:
    "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Angular, Node.js. I have over 12 years of experience in  the development of numerous web applications across diverse domains, leveraging expertise in frontend technologies and full-stack development practices. Committed to creating high-quality, scalable, and user-friendly web solutions.",
  avatarUrl: "./IMG_0479.png",
  personalWebsiteUrl: "",
  contact: {
    email: "ankushkalia274@rocketmail.com",
    tel: "+918146748625",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ak274",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ankush-k-15b3b0237/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/ankushkalia274",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Punjab Technical University",
      degree: "Bachelor of Computer Science & Technology",
      start: "2007",
      end: "2010",
    },
  ],
  work: [
    {
      company: "S&P Global",
      link: "https://www.spglobal.com/en/",
      badges: [],
      title: "Lead 1, Software Engineer",
      start: "Mar 2019",
      end: "Present",
      description: [
        "Designed and documented an aesthetically pleasing and brand-compliant user interface for web applications in Angular and React, leveraging Bootstrap 4/Tailwind CSS and adhering to the organization's branding guidelines.",
        "Developed and documented a comprehensive design system npm package (private repository), comprising reusable generic components, directives, and pipes, promoting code consistency and maintainability.",
        "Facilitated the transition of our applications to a micro-frontend architecture, enabling independent development and deployment of features by different product teams. This approach fostered a frictionless and scalable environment, ensuring seamless integration and decoupling of components across the application landscape. By embracing micro-frontends, we empowered teams to work autonomously, accelerating the delivery of new features while minimizing conflicts and dependencies.",
        "Managed and mentored a team of  developers, facilitating their onboarding process and knowledge transfer of existing features, fostering a collaborative and productive work environment.",
        "Implemented and documented an Auth npm package, utilizing OpenID Connect for secure single sign-on authentication, enabling users to seamlessly authenticate via the organization's Identity Server.",
        "Contributed to the development of numerous business features and common utility functions within web applications, enhancing functionality and user experience. ",
        "Established code linting, commit linting, and formatting practices for web applications, ensuring consistent coding standards and improving overall code quality.",
        "Conducted comprehensive code reviews within the team to maintain coding standards and ensure adherence to best practices. ",
        "Designed and documented a comprehensive Git branching strategy and release flow, streamlining the development lifecycle and enabling seamless production releases.",
        "Implemented and documented a Continuous Integration and Continuous Deployment (CI/CD) pipeline using GitLab runners, automating the processes of linting, formatting, testing, building, and deploying applications, thereby improving efficiency and reducing manual effort.",
        "Developed and maintained Terraform scripts for provisioning and managing AWS resources, enabling streamlined deployment across QA and production environments.",
      ],
      techStack: [
        "Lead Frontend Developer",
        "React",
        "Angular",
        "Typescript",
        "AWS",
        "Terraform",
        "Git",
        "Tailwind CSS",
        "Bootstrap 4/5",
        "Vite",
        "Webpack",
        "Jest",
        "Vitest",
        "Micro Frontends",
        "Nx Devtools",
        "CI/CD",
      ],
    },
    {
      company: "Taazaa Inc.",
      link: "https://www.taazaa.com/",
      badges: [],
      title: "Senior Software Engineer",
      start: "Oct 2016",
      end: "Feb 2019",
      description: [
        "Developed RESTful APIs using Node.js, following industry best practices for scalability, performance, and maintainability.",
        "Contributed to the implementation of microservice architectures for several applications, ensuring proper service decomposition, communication, load balancing, and caching strategies.",
        "Optimized microservices performance through caching techniques, database indexing, and load balancing strategies, ensuring high availability and responsiveness.",
        "Developed responsive and visually appealing user interfaces from client-provided mockups, adhering to Bootstrap 4 guidelines for consistency and maintainability.",
        "Integrated RESTful APIs with the frontend UI, utilizing the Data Transfer Object (DTO) pattern to map server data seamlessly.",
        "Implemented an authentication interceptor to securely handle API calls by binding Bearer Tokens and managing responses.",
        "Developed robust logging and error-handling services for server-side error logging and graceful error management on the UI.",
        "Crafted reusable generic components, directives, and pipes to enhance code modularity and promote best practices.",
        "Collaborated closely with UI/UX designers, backend developers, and stakeholders to ensure seamless integration and alignment with project requirements.",
      ],
      techStack: [
        "Fullstack Developer",
        "TypeScript",
        "Angular",
        "Node.js",
        "MySQL",
        "Express.js",
        "Micro Services",
        "AWS",
      ],
    },
    {
      company: "ILMP Technologies",
      link: "",
      badges: [],
      title: "Software Engineer",
      start: "Jul 2015",
      end: "Sep 2016",
      description: [
        "Contributed to the development of a SaaS-based ERP system for fleet management, encompassing many modules like: Dispatch Management, Fleet and Asset Management, HR Management for Drivers and Dispatchers, Staff Scheduling, Accounting, Billing and Invoicing.",
        "Developed RESTful APIs using the MEAN (MySQL, Express.js, Angular, Node.js) stack to support various modules within the application, ensuring seamless integration and data exchange.",
      ],
      techStack: [
        "Fullstack Developer",
        "TypeScript",
        "Angular.js",
        "Node.js",
        "MySQL",
        "Express.js",
      ],
    },
    {
      company: "Freelance Web Developer",
      link: "",
      badges: ["Remote"],
      title: "Web Developer (PHP/Javascript)",
      logo: NSNLogo,
      start: "Feb 2012",
      end: "Jun 2015",
      description: [
        "Collaborated with over 50 clients globally, ranging from small to mid-size companies, delivering custom web applications across diverse domains, including Hospitality, Social Media Market Research, eCommerce, Transportation, and Healthcare.",
        "Proficient in PHP, JavaScript, jQuery, and various PHP frameworks such as CodeIgniter, Zend, and Laravel.",
        "Leveraged expertise in front-end and back-end technologies to develop user-friendly and scalable web solutions tailored to client requirements.",
        "Demonstrated strong problem-solving skills and the ability to work independently while adhering to project timelines and budgets.",
      ],
      techStack: [
        "PHP",
        "Javascript",
        "jQuery",
        "LAMP",
        "MySQL",
        "HTML",
        "Bootstrap 2/3",
        "Zend",
        "Codeigniter",
        "Wordpress",
        "Joomla",
      ],
    },
  ],
  skills: ["JavaScript", "TypeScript", "React", "Angular", "Node.js"],
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
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: Ankush_Kalia_Me,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
