import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Mariyam Rajeev George",
  initials: "MG",
  location: "", // Temporarily disabled
  locationLink: "", // Temporarily disabled
  about: "Senior Data Engineer at Avanade @ Meta | Ex-phData @ Cargill | Databricks Certified | 9+ Years Experience",
  avatarUrl: "/mariyam-profile.jpg",
  summary: (
    <>
      Data Engineer with 9+ years of experience building scalable, low-latency data systems at companies
      like Meta and Cargill. Proven track record of reducing compute costs, accelerating developer velocity,
      and enabling experimentation through metric instrumentation. Skilled in Spark, Databricks, Presto,
      Airflow, Hive, and Hadoop.
      {/* <span className="text-xs text-gray-400 hover:text-gray-500 ml-1">
        <a href="/detailed-resume">[view detailed experience]</a>
      </span> */}
      <span className="text-xs text-gray-400 hover:text-gray-500 ml-1">
        <a href="/MariyamRajeevGeorge-resume-one-page.pdf" target="_blank" rel="noopener noreferrer">[download pdf]</a>
      </span>
    </>
  ),
  contact: {
    email: "g.mariyam@gmail.com",
    tel: "+1 (604) 600-6144",
    social: [
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/mariyam-rajeev-george-8944b870",
        icon: "linkedin",
      },
    ],
    // image: "/mariyam-profile.jpg", // Profile image in public directory
  },
  education: [
    {
      school: "University of St. Thomas",
      location: "Minneapolis, MN, USA",
      degree: "Master's in Data Science",
      start: "2016",
      end: "2018",
      description: "Master's degree in Data Science with focus on statistical analysis, machine learning, and data visualization."
    },
    {
      school: "Anna University",
      location: "Chennai, India",
      degree: "B.S. in Information Technology",
      start: "2006",
      end: "2010",
      description: "Bachelor's degree in Information Technology with focus on software development and database management."
    },
  ],
  work: [
    {
      company: "Avanade @ Meta",
      link: "https://www.avanade.com",
      badges: ["Databricks", "Spark", "Presto", "Airflow"],
      title: "Senior Data Engineer",
      start: "2022",
      end: "Present",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Architected a multidimensional data aggregation framework powering 160+ widgets for Metaverse
              analytics, reducing query latency from 45s to {'<3s'} and saving ~$60K/month in compute costs
            </li>
            <li>
              Designed and implemented a data model and pipeline for Meta's internal Metaverse dogfooding
              dashboard, enabling leadership to track employee usage against corporate VR adoption goals
            </li>
            <li>
              Served as technical lead for a team of 5 data engineers, driving adoption of performance-driven
              ETL practices and improving data reliability SLAs
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Avanade @ Meta",
      link: "https://www.avanade.com",
      badges: ["Spark", "Presto", "Airflow", "Data Pipelines"],
      title: "Data Engineer",
      start: "2021",
      end: "2022",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Led a cross-functional effort to productionize code review health signals, enabling a 7% decrease
              in review time and 10% reduction in churn through metrics instrumentation
            </li>
            <li>
              Built a full-stack analytics suite for Meta's Codemod Services, tracking KPIs that reduced
              Sandcastle runtime by 15% and cut abandoned review effort by 30%
            </li>
            <li>
              Developed dashboards that improved developer productivity by 20% through better visibility into
              code review metrics and workflow inefficiencies
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "phData @ Cargill",
      link: "https://www.phdata.io",
      badges: ["Python", "Spark", "ETL", "SAP"],
      title: "Data Engineer",
      start: "2018",
      end: "2020",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Built data migration pipelines using Python for a major SAP product, streamlining financial
              data processing by 20% for actionable dashboard insights
            </li>
            <li className="leading-relaxed">
              Developed scalable ETL workflows with Spark for SAP financial data, enhancing data quality and
              enabling real-time supply chain analytics
            </li>
            <li className="leading-relaxed">
              Optimized SQL queries for SAP-driven dashboards, reducing compute costs by 15% and improving
              financial reporting efficiency
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "Data Modeling",
    "Machine Learning",
    "Databricks",
    "Delta Lake",
    "Apache Spark",
    "Python",
    "SQL",
    "Apache Airflow",
    "Presto",
    "Hive",
    "Hadoop",
    "ETL/ELT",
    "Data Pipelines",
    "Azure",
    "Power BI",
    "Jupyter Notebooks",
    "Agile/Scrum",
    "CI/CD"
  ],
  
  languages: [
    { name: "English", level: "Full Professional" },
    { name: "Hindi", level: "Professional Working" },
    { name: "French", level: "Limited Working" }
  ],
  projects: [
    // Certifications
    {
      title: "Databricks Certified Data Engineer Professional",
      techStack: ["Databricks", "2022"],
      description: "Certified in using Databricks for advanced data engineering tasks including ETL pipelines, data modeling, and implementing production-grade data solutions.",
      link: {
        label: "Verify Credential",
        href: "https://credentials.databricks.com/f2912de3-215b-4eda-add2-d269c1533ac1#acc.UmCM6o3u"
      }
    },
    {
      title: "Databricks Certified Data Engineer Associate",
      techStack: ["Databricks", "2021"],
      description: "Certified in using the Databricks Lakehouse Platform for data engineering tasks, including ETL processes, data transformation, and pipeline optimization.",
      link: {
        label: "Verify Credential",
        href: "https://credentials.databricks.com/3176e54a-9b55-433b-aca4-de58c48aba99#acc.vKMgxNOD"
      }
    },
    {
      title: "Microsoft Certified: Azure Data Engineer Associate",
      techStack: ["Azure", "2024"],
      description: "Certified in designing and implementing data storage, data processing, and data security solutions using Microsoft Azure data services.",
    },
    {
      title: "Microsoft Certified: Azure Data Fundamentals",
      techStack: ["Azure", "2023"],
      description: "Certified in core data concepts and how they're implemented using Microsoft Azure data services.",
    },
    {
      title: "Microsoft Certified: Azure Fundamentals",
      techStack: ["Azure", "2023"],
      description: "Certified in cloud concepts, core Azure services, security, privacy, compliance, and pricing.",
    },
    {
      title: "Python (Basic)",
      techStack: ["Python", "2022"],
      description: "Certified in Python programming fundamentals including data structures, algorithms, and problem-solving.",
    },
    // Side Projects
    {
      title: "Pulse",
      techStack: ["Test Automation", "phData", "2018"],
      description: "Contributed to create a test suite for the Pulse Application, a log aggregation framework built on top of Solr Cloud.",
      link: {
        label: "View on GitHub",
        href: "https://github.com/MariyamG/pulse"
      }
    }
  ],
  certifications: [],
  awards: [
    {
      name: "Growth Guru",
      issuer: "Avanade",
      date: "Jan 2023",
      association: "Avanade",
      description: "As the first contingent worker from Avanade Canada in Meta, I played a key role in expanding the team to 31 members through exceptional performance and leadership."
    },
    {
      name: "phDer Award",
      issuer: "phData Inc.",
      date: "Aug 2020",
      association: "phData Inc.",
      description: "Achieved the award for the best performing team for continually providing support activities for client."
    }
  ]
} as const;
