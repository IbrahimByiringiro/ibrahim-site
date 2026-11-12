// All site content lives here. Edit this file to update the website.

import { Power } from "lucide-react";

export const site = {
  name: "Ibrahim Byiringiro",
  shortName: "Ibrahim",
  initials: "IB",
  title: "Data Scientist & Senior Statistician",
  // These phrases are typed out one by one in the hello ("I'm a ...")
  roles: ["Data Scientist", "Senior Statistician", "Project Manager"],
  tagline:
    "I translate complex data into actionable insights to drive decision-making. 15+ years applying statistics, data science, and automation to solve real-world problems across business, education, government, and international development.",
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
  heading: "Get To Know Me",
  paragraphs: [
    "I'm a father of two sons and a data enthusiast with 15+ years of experience applying statistics, data science and quantitative research to complex problems in education, government and international development.",
    "I've led research and data modernization initiatives, built automated reporting systems and interactive dashboards, and led teams of statisticians and analysts. I enjoy pairing deep methodological rigor with hands-on tooling: SQL, R, Python, Stata, Google AppScript and BigData tools (the Apaches,TensorFlow, etc).",
    "Outside of data, I enjoy spending time with my family and friends, volunteering, running, playing basketball and soccer, and exploring the outdoors.",
  ],
  stats: [
    { value: "15+ Years", label: "Work experience" },
    { value: "10 Countries", label: "Worked in 7, visited/lived in 3" },
    { value: "$20M+", label: "Worth of projects delivered" },
    { value: "4 Languages", label: "English, French, Swahili, Kinyarwanda" },
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
    tags: ["SQL", "R", "STATA", "AppsScript", "PowerBI", "Looker Studio", "Excel", "Snowflake", "BigQuery", "DBeaver"],
    bullets: [
      "Led analytics and reporting initiatives supporting programs serving 100+ schools and 50k+ students, staff and families.",
      "Built interactive dashboards giving users real-time analytical and operational insight.",
      "Modernized compliance reporting with SQL, R, Stata and Google Apps Script, cutting manual processing time.",
      "Trained analysts and cross-functional teams on data literacy and best practices.",
    ],
  },
  {
    title: "Statistical Consultant/Resource Person",
    org: "United Nations Statistics Division (UNSD) & The Partnership in Statistics for Development in the 21st Century (PARIS21) by OECD & UN",
    place: "Rwanda, Uganda, Tanzania, Ethiopia, Jordan, Philippines",
    short: "UN",
    type: "Part-time: Consulting & Training",
    dates: "2016 – 2019 (3 years)",
    tags: ["International Development", "Data storytelling", "User Engagement", "Training", "Portal Design & Deployment"],
    bullets: [
      "Supported national statistical offices, in Africa and Asia countries, in developing Data User Engagement Strategies (see [one of the workshops](https://unstats.un.org/capacity-development/meetings/UNSD-DFID-Regional-User-Engagement/), and [presentation](https://unstats.un.org/capacity-development/meetings/UNSD-DFID-Regional-User-Engagement/documents/User-engagement_open-SDG-platform_for-Rwanda.pdf)).",
      "Designed and delivered workshops on data storytelling, communication and effective use of official statistics.",
      "Advised on data dissemination practices to increase the impact of national statistical systems(NSS).",
      "Supported the design, deployment and integration of PARIS21 Advanced Data Planning Tool (ADAPT) - a cloud based platform designed to manage, monitor, and report metrics of the United Nations Sustainable Development Goals (SDGs).",
    ],
  },
  {
    title: "Ag. Director of Statistical Methods, Research & Publications",
    org: "National Institute of Statistics of Rwanda (NISR)",
    place: "Kigali, Rwanda",
    short: "NISR",
    type: "Full time: Leadership",
    dates: "2018 – 2019 (2 years)",
    tags: ["Project Management", "Povery Survey", "Survey methodology", "KPI frameworks", "Team leadership", "R", "STATA"],
    bullets: [
      "Directed statistical methodology, research and publications supporting national surveys and evidence-based policymaking.",
      "Implementated and/or disseminated the Rwanda poverty survey [(EICV3,4&5)](https://statistics.gov.rw/data-sources/surveys/EICV). Reported a poverty reduction in EICV4 (2013-14) which dropped- 7.8pp from EICV3 (2010-11) and relatively stagnant in EICV5 (2016-17)",
      "Led teams of statisticians and analysts across data processing, quality assurance, analysis and dissemination.",
      "Developed statistical models and KPI frameworks for evaluating government policies and programs.",
      "Led design and analysis of national [User Satisfaction Survey (2018/19)](https://statistics.gov.rw/data-sources/surveys/user-satisfaction/user-satisfaction-survey20182019),.",
      "Led technical coordination & supervision of the third Rwanda [National Strategy for the Development of Statistics (NSDS III) 2018-2024](https://statistics.gov.rw/sites/default/files/documents/2025-02/NSDS3_Rwanda_Document_September2019.pdf), which is a strategic document that guides the development of statistics in Rwanda.",
    ],
  },
  {
    title: "Team Leader Statistician",
    org: "National Institute of Statistics of Rwanda",
    place: "Kigali, Rwanda",
    short: "NISR",
    type: "Full time: Lead technician",
    dates: "2014 – 2017 (3 years)",
    tags: ["Sampling design", "Demographic data", "Publications", "R", "STATA"],
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
    blurb: "For reproducible statistical analysis,and predictive models.",
    items: ["SQL", "R", "Python", "Stata", "SPSS", "Stat. Modeling", "ML"],
  },
  {
    name: "Data Engineering & Automation",
    blurb: "Replacing repetitive manual work with reliable, documented workflows.",
    items: ["ETL Pipelines", "Data Transformation", "Google Apps Script", "Workflow Automation", "Reproducible Code"],
  },
  {
    name: "Visualization & Reporting",
    blurb: "Dashboards and Data Stories.",
    items: ["PowerBI", "LookerStudio", "Google Sheets", "Excel", "User Guide", "Powerpoint"],
  },
  {
    name: "Platforms & Tools",
    blurb: "Data storage and cloud platforms.",
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
  { name: "French", level: "Moderate" },
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
