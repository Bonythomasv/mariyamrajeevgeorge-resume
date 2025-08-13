import type { ResumeData } from "@/lib/types";

export const RESUME_DATA_DETAILED: ResumeData = {
  name: "Bony Thomas",
  initials: "BT",
  location: "Vancouver, BC",
  locationLink: "https://www.google.com/maps/place/Vancouver",
  about: "Oracle Certified Java Programmer | Senior Software Developer | 15+ Years Experience",
  avatarUrl: "/bony-profile.jpg",
  summary: (
    <>
      <p>Oracle Certified Java Programmer with 15+ years of IT experience in Application development using Java/J2EE technologies, with expertise in developing microservices and maintaining CI/CD frameworks.</p>
      <p className="mt-2">Strong experience in cloud development (AWS, Azure, GCP, OpenStack), SOA architecture, and hands-on experience with databases like Oracle, DB2, Cassandra, and Postgres. Proven track record in all phases of Software Engineering (SDLC).</p>
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
  },
  education: [
    {
      school: "Cochin University of Science and Technology",
      degree: "Bachelor of Technology in Electronics and Communication",
      start: "2006",
      end: "2010",
    },
  ],
  work: [
    {
      company: "The University of British Columbia",
      link: "https://www.ubc.ca/",
      badges: ["Java", "MuleSoft", "AWS", "PostgreSQL", "Bamboo", "Salesforce"],
      title: "Senior Software Developer",
      start: "2022",
      end: "Present",
      description: (
        <>
          <p>Led the development of MuleSoft-based API orchestrations for rebuilding foundational API services at UBC.</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Developed microservices in Spring Boot using Java 17</li>
            <li>Integrated AWS Elastic Search for Business Data and Logs aggregation</li>
            <li>Developed and maintained complete CI/CD pipeline for new APIs</li>
            <li>Conducted code reviews and provided implementation strategy suggestions</li>
            <li>Created PL/SQL scripts for data analysis and migrations</li>
          </ul>
        </>
      ),
    },
    {
      company: "Pattison Food Group",
      link: "https://www.pattisonfoodgroup.com/",
      badges: ["Java", "Spring Boot", "Azure", "Oracle", "Elastic Search", "IICS"],
      title: "Technical Lead",
      start: "2021",
      end: "2022",
      description: (
        <>
          <p>Led the Store Inventory Management team handling 50+ microservices across multiple store banners including Save-On-Foods and Urban Fare.</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Managed team of 9 developers and acted as SME for Store Inventory Management</li>
            <li>Designed and developed microservices using Spring Boot and Java 17</li>
            <li>Created and managed Sprint activities and scrum ceremonies</li>
            <li>Provided 24/7 production support and troubleshooting</li>
            <li>Maintained CI/CD pipeline and performed code reviews</li>
          </ul>
        </>
      ),
    },
    {
      company: "Global Relay",
      link: "https://www.globalrelay.com/",
      badges: ["Java", "Cassandra", "Elasticsearch", "OpenStack", "Kubernetes"],
      title: "Senior Backend Engineer",
      start: "2020",
      end: "2021",
      description: (
        <>
          <p>Worked on A10, Global Relay's flagship product used by 21 out of 25 top banks worldwide for archiving communications data.</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Performed GC tuning for applications handling petabytes of data</li>
            <li>Implemented Aerospike cache integration</li>
            <li>Monitored system capacity and performance</li>
            <li>Developed and maintained CI/CD pipelines</li>
            <li>Performed code reviews and debugged production issues</li>
          </ul>
        </>
      ),
    },
    {
      company: "Target Corporation",
      link: "https://www.target.com/",
      badges: ["Java", "Spring Boot", "Kafka", "Cassandra", "Angular", "WebSphere", "Oracle", "Microservices"],
      title: "Senior Engineer → System Programmer/Analyst",
      start: "2010",
      end: "2020",
      description: (
        <>
          <p>Progressed through multiple roles leading critical enterprise initiatives at Target Corporation, focusing on store operations, distribution systems, and contact center management.</p>
          
          <div className="mt-3">
            <strong>Task & Workload Management (2018-2020)</strong>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Led development of three major streams: Workload Management, MyComm, and Target Alert Central</li>
              <li>Designed microservices platform serving 200,000+ team members with 150+ alert channels</li>
              <li>Implemented store inventory management and communication systems</li>
              <li>Mentored interns and established CI/CD pipelines</li>
            </ul>
          </div>

          <div className="mt-3">
            <strong>NICE SmartCenter & IEX Implementation (2014-2015)</strong>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Led implementation of NICE Interaction Manager 4.1 for contact centers</li>
              <li>Created Pause/Resume triggers for sensitive data handling</li>
              <li>Maintained infrastructure spanning hundreds of Wintel and SQL servers</li>
            </ul>
          </div>

          <div className="mt-3">
            <strong>Distribution Systems Modernization (2013-2014)</strong>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Led distribution stabilization project for legacy applications</li>
              <li>Migrated applications from WebSphere 6.1 to 7.0</li>
              <li>Implemented LDAP authentication and SpringMVC architecture</li>
            </ul>
          </div>

          <div className="mt-3">
            <strong>Hazardous Waste Compliance System (2012-2013)</strong>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Developed system for managing environmentally sensitive items in reverse logistics</li>
              <li>Implemented web services using SOAP, JAXB, and JMS</li>
              <li>Built persistence layer using iBATIS and Oracle</li>
            </ul>
          </div>

          <div className="mt-3">
            <strong>Oracle Forms Migration (2010-2012)</strong>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Led migration of legacy Oracle Forms to modern Java/Spring and .NET architecture</li>
              <li>Architected multi-tier solution for distribution center operations</li>
              <li>Established development, integration, and staging environments</li>
            </ul>
          </div>

          <p className="mt-3"><strong>Key Technologies:</strong> Java, Spring Boot, Kafka, Cassandra, Angular, WebSphere, Oracle, Microservices, EJB, SOAP, REST, Jenkins, Docker</p>
        </>
      ),
    },
    {
      company: "First Data",
      link: "https://www.firstdata.com/",
      badges: ["Java", "Salesforce", "Angular", "Oracle CPQ", "Android"],
      title: "Lead Programmer/Analyst - SNAP",
      start: "2016",
      end: "2016",
      description: (
        <>
          <p>Led development of SNAP merchant onboarding application handling 60% of First Data's onboarding process.</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Developed hybrid mobile app using Cordova and Salesforce Mobile SDK</li>
            <li>Implemented SSO between Android and Salesforce applications</li>
            <li>Integrated payment gateway (Payeezy) for credit card processing</li>
            <li>Created Angular JS application hosted in Salesforce</li>
            <li>Led daily standups and managed onsite/offshore coordination</li>
          </ul>
        </>
      ),
    }
  ],
  skills: [
    // Programming Languages
    "Java", "Python", "JavaScript", "Kotlin", "SQL", "PL/SQL", "Groovy", "GO",
    
    // Frameworks & Technologies
    "Spring Boot", "Spring Cloud", "MuleSoft", "Kubernetes", "Docker", "AWS", "Azure", "GCP", "OpenStack",
    "Microservices", "REST", "SOAP", "Jenkins", "Bamboo", "Chef",
    
    // Databases
    "Oracle", "PostgreSQL", "Cassandra", "DB2", "MySQL", "HBase",
    
    // Methodologies & Tools
    "Agile/Scrum", "Kanban", "Git", "SVN", "TFS", "CI/CD", "JIRA",
    "Eclipse", "IntelliJ", "Maven", "Gradle", "JUnit", "Mockito"
  ],
  projects: [
    {
      title: "UBC API Modernization",
      techStack: ["Java", "MuleSoft", "AWS", "PostgreSQL", "Bamboo"],
      description: "Led the development of MuleSoft-based API orchestrations, rebuilding foundational API services for UBC staff, public, and students.",
    },
    {
      title: "Store Inventory Management System",
      techStack: ["Java", "Spring Boot", "Azure", "Oracle", "Elastic Search"],
      description: "Architected and led development of 50+ microservices managing inventory across multiple store banners for Pattison Food Group.",
    },
    {
      title: "A10 Performance Optimization",
      techStack: ["Java", "Cassandra", "Elasticsearch", "OpenStack", "Kubernetes"],
      description: "Improved performance and reduced latency for Global Relay's flagship archiving solution handling petabytes of data.",
    },
    {
      title: "Target Alert Platform",
      techStack: ["Java", "Kafka", "Cassandra", "Angular JS", "Google FCM"],
      description: "Designed microservices for Target's alert platform, handling communications for 200,000+ team members.",
    }
  ],
} as const;
