// All site content lives here. Edit this file to update the website.

import { Power } from "lucide-react";

export const site = {
  name: "Ibrahim Byiringiro",
  shortName: "Ibrahim",
  initials: "IB",
  title: "Senior Data Analyst & Statistical Research Leader",
  // These phrases are typed out one by one in the hello ("I'm a ...")
  roles: ["Data Scientist", "Senior Data Analyst", "Project Manager", "Statistical Research Leader", "Automation Specialist"],
  tagline:
    "I turn complex data into decisions. 15+ years applying statistics, data science, and automation to solve real-world challenges across education, government, and international development.",
  location: "Boston, MA",
  email: "Ibrahim.byiringiro@gmail.com",
  // TODO: replace with your real profile URLs (the resume only shows "Link")
  linkedin: "https://www.linkedin.com/in/ibrahim-byiringiro",
  github: "https://github.com/IbrahimByiringiro",
  resume: "/resume.pdf",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  description:
    "Personal website of Ibrahim Byiringiro: senior data analyst, statistician and data scientist in Boston. Portfolio, resume and blog.",
};

export const about = {
  heading: "Statistics, data and the stories they tell",
  paragraphs: [
    "I'm a data enthusiast with 15+ years of experience applying statistics, data science and quantitative research to complex challenges in education, government and international development.",
    "I've led data modernization initiatives, built automated reporting systems and interactive dashboards, and led teams of statisticians and analysts. I enjoy pairing deep methodological rigor with hands-on tooling: SQL, R, Python, Stata and workflow automation.",
    "Outside of data, I enjoy volunteering, running, playing basketball and soccer, and exploring the outdoors.",
  ],
  stats: [
    { value: "15+", label: "Years of experience" },
    { value: "10 Countries", label: "Worked in 7, visited/lived in 3" },
    { value: "$10M+", label: "Projects delivered" },
    { value: "4", label: "Languages spoken" },
  ],
};

export type Job = {
  title: string;
  org: string;
  short: string; // 2-4 letters shown in the tile (replace with a logo later if you like)
  type: string; // badge, e.g. "Full time", "Consulting", "Leadership"
  place: string;
  dates: string;
  tags: string[];
  bullets: string[];
};

export const experience: Job[] = [
  {
    title: "Research & Data Analyst",
    org: "City Of Boston, BPS - Office of Data & Accountability",
    place: "Boston, MA",
    short: "BPS",
    type: "Full time: Technician",
    dates: "2021 – Present",
    tags: ["SQL", "R", "STATA", "Google Apps Script", "Dashboards", "PowerBI", "Looker Studio"],
    bullets: [
      "Lead analytics, reporting and automation initiatives supporting programs serving 100+ schools and 50,000+ students, staff and families.",
      "Built automated operations trackers and interactive dashboards giving leaders real-time operational insight.",
      "Modernized compliance reporting with SQL, R, Stata and Google Apps Script, cutting manual processing time.",
      "Trained analysts and cross-functional teams on automation tools and best practices.",
    ],
  },
  {
    title: "Statistical Consultant/Resource Person",
    org: "United Nations Statistics Division (UNSD) & PARIS21 (OECD)",
    place: "Rwanda, Uganda, Tanzania, Ethiopia, Jordan, Philippines",
    short: "UN",
    type: "Part-time: Consulting & Training",
    dates: "2016 – 2019 (3 years)",
    tags: ["Official statistics", "Data storytelling", "User Engagement", "Training"],
    bullets: [
      "Supported national statistical offices in the Philippines, Jordan, Ethiopia, Uganda and Rwanda in developing Data User Engagement Strategies.",
      "Designed and delivered workshops on data storytelling, communication and effective use of official statistics.",
      "Advised on data dissemination practices to increase the impact of national statistical systems.",
    ],
  },
  {
    title: "Director of Statistical Methods, Research & Publications",
    org: "National Institute of Statistics of Rwanda (NISR)",
    place: "Kigali, Rwanda",
    short: "NISR",
    type: "Full time: Leadership",
    dates: "2018 – 2019 (2 years)",
    tags: ["Project Management", "Povery Survey", "Survey methodology", "KPI frameworks", "Team leadership"],
    bullets: [
      "Directed statistical methodology, research and publications supporting national surveys and evidence-based policymaking.",
      "Led teams of statisticians and analysts across data processing, quality assurance, analysis and dissemination.",
      "Developed statistical models and KPI frameworks for evaluating government policies and programs.",
      "Led analysis of national User Satisfaction Survey.",
      "Led design and implementation of the Rwanda poverty survey (EICV).",
    ],
  },
  {
    title: "Team Leader Statistician",
    org: "National Institute of Statistics of Rwanda",
    place: "Kigali, Rwanda",
    short: "NISR",
    type: "Full time: Lead technician",
    dates: "2014 – 2017 (3 years)",
    tags: ["Sampling design", "Demographic data", "Publications"],
    bullets: [
      "Analyzed large-scale demographic, economic and social datasets.",
      "Supported survey methodology, sampling design, data processing and publication of official statistics.",
      "Collaborated with government institutions and international partners to improve standards and data quality.",
    ],
  },
];

export const skillGroups = [
  {
    name: "Programming & Analytics",
    blurb: "The core of my daily work: from reproducible statistical analysis to predictive models.",
    items: ["SQL", "R", "Python", "Stata", "SPSS", "Stat. Modeling", "ML"],
  },
  {
    name: "Data Engineering & Automation",
    blurb: "Replacing repetitive manual work with reliable, documented workflows.",
    items: ["ETL Pipelines", "Data Transformation", "Google Apps Script", "Workflow Automation", "Reproducible Code"],
  },
  {
    name: "Visualization & Reporting",
    blurb: "Dashboards and data stories that leaders can act on.",
    items: ["PowerBI", "LookerStudio", "Google Sheets", "Excel", "Data Storytelling", "Powerpoint"],
  },
  {
    name: "Platforms & Tools",
    blurb: "Where the data lives and how I work/ed with it.",
    items: ["SQL Server", "Snowflake", "BigQuery", "DBeaver", "GitHub"],
  },
  {
    name: "Leadership & Research",
    blurb: "Leading teams and connecting analysis to policy and strategy.",
    items: ["Project Leadership", "Research Design", "Policy Analysis", "Stakeholder Engagement", "Technical Training", "Team Leadership"],
  },
];

export const education = [
  {
    degree: "MS, Data Science (in progress)",
    school: "Northeastern University, Khoury College of Computer Sciences",
    place: "Boston, MA",
  },
  {
    degree: "BSc (Honours), Applied Statistics (4.0 GPA)",
    school: "University of Rwanda",
    place: "Rwanda",
  },
];

export const certifications = [
  "IBM Data Science Professional Certificate",
  "Demographic Analysis & Population Projections, U.S. Census Bureau",
  "Advanced Data Management & Analysis using Stata, SCG Ltd.",
];

export const languages = [
  { name: "English", level: "Native Language" },
  { name: "Kinyarwanda", level: "Fluent" },
  { name: "French", level: "Fluent" },
  { name: "Swahili", level: "Moderate" },
];

export const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#education", label: "Education" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];
