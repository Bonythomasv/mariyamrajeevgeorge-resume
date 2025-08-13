import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Bony Thomas",
  initials: "BT",
  location: "", // Temporarily disabled
  locationLink: "", // Temporarily disabled
  about: "Senior Software Developer at UBC | Ex-Target | Ex-Global Relay | Oracle Certified Java Programmer | 15+ Years Experience",
  avatarUrl: "/bony-profile.jpg",
  // personalWebsiteUrl: "https://bonythomas.com",
  summary: (
    <>
      Results-driven Senior Software Engineer with 15+ years of experience designing scalable,
      cloud-native applications using Java, Spring Boot, and microservices architecture.
      Expertise in CI/CD, cloud platforms (AWS, Azure, GCP, OpenStack), and containerization (Docker, Kubernetes)
      to deliver high-performance, scalable solutions.
      <span className="text-xs text-gray-400 hover:text-gray-500 ml-1">
        <a href="/detailed-resume">[view detailed experience]</a>
      </span>
      <span className="text-xs text-gray-400 hover:text-gray-500 ml-1">
        <a href="/RESUME-Bony-1-page-02-2025.pdf" target="_blank" rel="noopener noreferrer">[download pdf]</a>
      </span>
    </>
  ),
  contact: {
    email: "bonythomasv@gmail.com",
    tel: "778-444-1800",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Bonythomasv",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bonythomas/",
        icon: "linkedin",
      },
    ],
    image: "/bony-profile.jpg", // Profile image in public directory
  },
  education: [
    {
      school: "Cochin University of Science and Technlogy",
      degree: "Bachelors in Electronics and communication",
      start: "2006",
      end: "2010",
    },
  ],
  work: [
    {
      company: "The University of British Columbia",
      link: "",
      badges: ["Java", "Spring Boot", "AWS", "Microservices"],
      title: "Senior Software Developer",
      start: "2022",
      end: null,
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Developed MuleSoft-based APIs for cloud migration, improving scalability and performance
            </li>
            <li>
              Built microservices using Spring Boot (Java 17) for cloud projects, enabling rapid
              deployment
            </li>
            <li>
              Integrated AWS ElasticSearch for data aggregation, optimizing performance
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Pattison Food Group",
      link: "",
      badges: ["Java", "Spring Boot", "Android", "Microservices"],
      title: "Technical Lead",
      start: "2021",
      end: "2022",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Led a team of 9 developers to build Store Inventory Management System with 50+
              microservices for real-time tracking
            </li>
            <li>
              Implemented Android-based applications for inventory and tracking
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Global Relay",
      link: "",
      badges: ["Java", "Spring Boot", "Performance Optimization"],
      title: "Senior Backend Engineer",
      start: "2020",
      end: "2021",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Optimized performance of the A10 SaaS product, enhancing latency and throughput
            </li>
            <li>
              Integrated Aerospike cache and optimized Garbage Collection (GC) for improved system
              performance
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Target Corporation",
      link: "",
      badges: ["Java", "Spring", "Microservices"],
      title: "Senior Engineer",
      start: "2015",
      end: "2020",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Designed and developed microservices for Workload Management and Target Alert Central,
              saving $5M in vendor costs
            </li>
            <li>
              Enhanced Drive-Up feature to streamline curbside pickup, significantly improving customer
              experience
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "FirstData",
      link: "",
      badges: ["Java", "Android", "Salesforce"],
      title: "Lead Programmer/Analyst",
      start: "2015",
      end: "2016",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Integrated Payeezy payment gateway for SNAP merchant onboarding
            </li>
            <li>
              Designed Android and Salesforce applications with SSO using Mobile SDK
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Target Corporation",
      link: "",
      badges: ["Java", "Spring", "Oracle"],
      title: "Systems Programmer Analyst",
      start: "2010",
      end: "2015",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Migrated Oracle Forms Applications to java/Spring-based 3 tier solution for Distribution
              centers
            </li>
            <li>
              Implemented NICE SmartCenter and IEX Workforce Management Systems
            </li>
            <li>
              Developed compliance systems for handling hazardous materials using Web Services and
              Oracle
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "Java",
    "Spring Boot",
    "Microservices Architecture",
    "AWS",
    "Azure",
    "GCP",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Oracle",
    "Postgres",
    "Cassandra",
    "REST/SOAP",
    "Angular",
    "ReactJS",
  ],
  projects: [
    {
      title: "Certificate in Blockchain Development",
      techStack: ["Blockchain", "Smart Contracts", "DeFi", "NFTs"],
      description: "Comprehensive certification in blockchain technology fundamentals, focusing on evaluating and implementing blockchain solutions across various industries. Gained expertise in analyzing distributed ledger technologies, digital tokens, and smart contracts for business transformation.",
      link: {
        label: "View Credential",
        href: "https://www.credential.net/537a1570-67dd-45c4-a08b-a3fe4f44da0e#acc.AkgKvHUf"
      }
    },
    {
      title: "Fundamentals of Artificial Intelligence Cloud Strategy",
      techStack: ["AI", "Cloud Computing"],
      description: "Comprehensive certification focused on developing strategies for AI cloud adoption, covering security, cost-benefit analysis, and organizational impact. Gained expertise in evaluating and implementing cloud-based AI solutions for business transformation.",
      link: {
        label: "View Credential",
        href: "https://www.credential.net/18a3033f-d409-4bca-b6cc-ba4c17cadd26#acc.jMifb8TS"
      }
    },
    {
      title: "Harvest Store + Cafe",
      techStack: ["Next.js", "Gemini AI", "TypeScript", "Tailwind"],
      description: "Built a modern cafe website integrating Google's Gemini AI for enhanced customer interaction and menu recommendations. Code available at github.com/Bonythomasv/harvest-cafe-store",
      link: {
        label: "theharvestcafe.ca",
        href: "https://theharvestcafe.ca"
      }
    }
  ],
} as const;
