import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Bony Thomas",
  initials: "BT",
  location: "Vancouver, BC",
  locationLink: "https://www.google.com/maps/place/Vancouver",
  about: "Senior Software Developer dedicated to building scalable cloud solutions",
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
      techStack: ["Blockchain", "Smart Contracts"],
      description: "The University of British Columbia",
    },
    {
      title: "Fundamentals of Artificial Intelligence Cloud Strategy",
      techStack: ["AI", "Cloud Computing"],
      description: "The University of British Columbia",
    },
  ],
} as const;
