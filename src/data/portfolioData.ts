export const personalInfo = {
  name: "Joederico T. Arevalo",
  nickname: "Judi",
  title: "IT Systems Administrator & Web Developer",
  tagline: "Building reliable systems. Crafting seamless experiences.",
  summary: `Systems Administrator and Web Developer with extensive experience managing scalable technology infrastructure. 
  Adept at automating workflows, optimizing server performance, and ensuring 99.9% uptime across distributed systems. 
  Uniquely positioned to align IT strategy with business objectives while delivering custom web solutions tailored to client needs.`,
  location: "Silay City, Negros Occidental, PH",
  email: "judithekuletz.ja@gmail.com",
  phone: "+63 930 393 0875",
  github: "https://github.com/makuletz17",
  linkedin: "https://www.linkedin.com/in/judi-arevalo-992b19187/",
  facebook: "https://www.facebook.com/judithekuletz",
};

export const expertise = [
  "IT Operations & Service Delivery",
  "System Management",
  "Server Performance Optimization",
  "IT Strategy",
  "Leadership & Development",
  "Web & Mobile App Development",
  "Workflow Automation",
  "Network Administration",
];
export const skills = [
  {
    category: "Frontend",
    icon: "",
    items: [
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "JavaScript (ES6/Modular)",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "React.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "React Native",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
    ],
  },
  {
    category: "Backend",
    icon: "",
    items: [
      {
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      },
      {
        name: "REST API Integration",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      },
      {
        name: "EFT/EFTPOS Integration",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ssh/ssh-original.svg",
      },
    ],
  },
  {
    category: "Database",
    icon: "",
    items: [
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "Database Design",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "Query Optimization",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqldeveloper/sqldeveloper-original.svg",
      },
    ],
  },
  {
    category: "Infrastructure",
    icon: "",
    items: [
      {
        name: "Linux Server Admin",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      },
      {
        name: "Network Management",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
      },
      {
        name: "Server Deployment",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg",
      },
    ],
  },
  {
    category: "Tools",
    icon: "",
    items: [
      {
        name: "Git / Version Control",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "NPM",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
      },
      {
        name: "Microsoft Office Suite",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
      },
    ],
  },
];
export const projects = [
  {
    title: "POS System",
    subtitle: "BIR Licensed — Powertouch Technology",
    description:
      "Web-based Point of Sale System designed for retail operations with EFT/EFTPOS bank integration.",
    highlights: [
      "Built scalable POS platform handling real-time retail transactions",
      "Optimized DB queries to improve transaction processing speed",
      "Modular JavaScript (ECMAScript) architecture for maintainability",
      "REST API integration for secure POS terminal communication",
      "EFT/EFTPOS bank integration for electronic payment processing",
    ],
    tech: ["PHP", "MySQL", "JavaScript", "REST API", "EFT/EFTPOS"],
    type: "Web App",
    color: "#64ffda",
  },
  {
    title: "Sugar+",
    subtitle: "Sugarcane Planter Monitoring App",
    description:
      "Mobile application for sugarcane planters to monitor daily pesada (weighing) records in real time.",
    highlights: [
      "Built mobile interface for real-time production data monitoring",
      "Integrated secure API communication with backend database",
      "Streamlined daily record-keeping for agricultural operations",
    ],
    tech: ["React Native", "MySQL", "REST API"],
    type: "Mobile App",
    color: "#a78bfa",
  },
  {
    title: "Lopue's Rewards",
    subtitle: "Customer Loyalty App",
    description:
      "Customer loyalty mobile application for tracking SUKI card reward points and managing customer accounts.",
    highlights: [
      "Developed features for customer account access and reward tracking",
      "API services for seamless app-to-backend synchronization",
      "Improved customer retention through digital loyalty program",
    ],
    tech: ["React Native", "MySQL", "REST API", "PHP"],
    type: "Mobile App",
    color: "#f472b6",
  },
  {
    title: "Print Talker",
    subtitle: "Retail Price Label Generator",
    description:
      "Mobile app to generate and print price talkers with item descriptions, pricing, and QR codes for retail displays.",
    highlights: [
      "Automated generation and printing of retail price labels",
      "Real-time product/pricing data retrieval via REST API",
      "Operates within company local network for secure DB access",
      "Improved store efficiency by automating label workflows",
    ],
    tech: ["React Native", "MySQL", "REST API", "PHP"],
    type: "Mobile App",
    color: "#fb923c",
  },
];

export const experience = [
  {
    role: "Back Office Dept. Head / POS & Server Admin",
    company: "Lopue's San Sebastian Corp.",
    location: "Bacolod City",
    period: "Feb 2017 – Present",
    current: true,
    responsibilities: [
      "Manage and maintain POS infrastructure and enterprise servers supporting retail operations",
      "Ensure system uptime, performance monitoring, and data security across business systems",
      "Lead back-office IT operations including troubleshooting and infrastructure maintenance",
      "Develop and maintain web and mobile applications used across the retail chain",
    ],
  },
  {
    role: "Customer Service Representative",
    company: "Munsterific",
    location: "Bacolod City",
    period: "Feb 2016 – Nov 2016",
    current: false,
    responsibilities: [
      "Provided customer support and handled inquiries regarding products and services",
      "Assisted in resolving customer issues to maintain high service satisfaction",
    ],
  },
  {
    role: "IT Assistant",
    company: "Merzci",
    location: "Bacolod City",
    period: "May 2015 – Nov 2015",
    current: false,
    responsibilities: [
      "Provided IT support and assistance for company systems",
    ],
  },
];

export const education = [
  {
    degree: "Programming National Certification IV (PNC-IV)",
    field: "Information Technology Programming (ITP)",
    school: "STI-West Negros University",
    location: "Bacolod City",
    year: "2014–2015",
  },
  {
    degree: "High School Diploma",
    field: "",
    school: "Doña Hortencia Salas Benedicto National High School",
    location: "La Carlota City",
    year: "2012–2013",
  },
];
