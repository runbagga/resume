import { LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Arun Bagga",
  initials: "AB",
  location: "Victoria, Texas US",
  locationLink: "https://www.google.com/maps/place/Victoria,+Texas",
  about:
    "Experienced sales leader with a decade-long track record in driving brand success, operational efficiency, and team performance.",
  summary:
    "Highly motivated and well-rounded professional with over a decade of sales experience and strong communication, interpersonal, and management skills. Proven ability to boost brand visibility, contribute to organizational success in competitive marketplaces, and drive continuous improvement. Seeking opportunities with a growth-oriented organization to leverage expertise in customer service, operational efficiency, and team leadership.",
  avatarUrl: "./IMG_04797.png",
  personalWebsiteUrl: "",
  contact: {
    email: "getintouchwithmeasap@yahoo.com",
    tel: "+1 (361) 541-2665",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ankush-k-15b3b0237/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Houston-Victoria, Victoria, TX",
      degree: "Bachelor of Business Administration, Management",
      start: "Aug-2021",
      end: "Dec-2023",
      gpa: "3.63/4.0",
      description:
        "Managerial Communication, Professional Writing, Organizational Change, Entrepreneurship, Legal Environment of Business, Human Resource Management, Organizational Behavior, Principles of Management, Principles of Marketing, Strategic Management, Staffing, Project Management, International Management.",
    },
    {
      school: "Victoria College, Victoria, TX",
      degree: "General Education",
      start: "",
      end: "",
      gpa: "",
      description: "",
    },
    {
      school: "Victoria Beauty College, Inc., Victoria, TX",
      degree: "Diploma in Cosmetology",
      start: "",
      end: "",
      gpa: "",
      description: "",
    },
  ],
  professional: [
    {
      description: [
        "Jaguar Externship Program (Vocational Rehab Department), December 2023",
        "Caterpillar/The Victoria College Production Assemblers 1 and 2 Training, March 2013",
        "Victoria Beauty College and Texas Cosmetologist License, 2012 - 2024",
        "Sales Seminars and Training Sessions. 2002-2009",
        "Ziegler Supersystems, Inc. Automobile Training Program Certified",
      ],
    },
  ],
  activities: [
    {
      description: [
        "The Interact Club of Victoria High School (Northside [Victoria] Rotary Club)",
        "Sub Varsity Track (Athletic Award)",
        "Multiple Honor Roll and Perfect Attendance Awards (Victoria Beauty College)",
        "Basic First Aid & CPR for Healthcare Providers Certification (Expired)",
        "Multiple Certificates of Recognition for Perfect Attendance (Caterpillar Inc.)",
        "Occupational Skills Award - Business Relationship Building Certificate (Victoria College)",
        "Multiple President's and Dean's List mentions, Cum Laude (Honor Roll) at University of Houston-Victoria",
      ],
    },
  ],
  work: [
    {
      company: "Caterpillar Incorporated",
      link: "https://www.caterpillar.com/en.html",
      badges: [],
      title: "Production Technician 1 & 2 Victoria, TX",
      start: "Mar 2013",
      end: "Jan 2024",
      description: [
        "Collaborated with internal and external partners to deliver world-class products, ensuring safety, efficiency, and value creation.",
        "Empowered co-workers through transformational leadership, promoting a safety-oriented, efficiency-driven, and value-driven culture.",
        "Drove continuous improvement projects, adding value to operations processes.",
        "Facilitated Engineering and Upper Management in implementing robust operational changes.",
      ],
    },
    {
      company: "Regis Corporation (MasterCuts)",
      link: "https://www.regiscorp.com/",
      badges: [],
      title: "Cosmetologist",
      start: "Oct 2016",
      end: "Feb 2019",
      description: [
        "Utilized hard and soft skills to attract and retain clientele, maintaining high professional and hygiene standards.",
        "Increased sales revenue by offering additional products and services to clients during and after requested services.",
      ],
    },
  ],
  skills: [
    "Sales",
    "Communication",
    "Leadership",
    "Management",
    "Customer Service",
    "Computer Proficiency",
  ],
  languages: ["English", "Hindi", "Punjabi", "French (Basic)"],
} as const;
