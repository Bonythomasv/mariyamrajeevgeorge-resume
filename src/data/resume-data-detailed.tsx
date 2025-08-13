import type { ResumeData } from "@/lib/types";

export const RESUME_DATA_DETAILED: ResumeData = {
  name: "Bony Thomas",
  initials: "BT",
  location: "Vancouver, BC",
  locationLink: "https://www.google.com/maps/place/Vancouver",
  about: "Oracle Certified Java Programmer | Senior Software Developer | 13+ Years Experience",
  avatarUrl: "/bony-profile.jpg",
  summary: (
    <>
      <p>Oracle Certified Java Programmer with 13+ years of IT experience in Application development using Java/J2EE technologies, with expertise in developing microservices and maintaining CI/CD frameworks.</p>
      <p className="mt-2">Strong experience in cloud development, SOA architecture, and hands-on experience with databases like Oracle, DB2, Cassandra, and Postgres. Proven track record in all phases of Software Engineering (SDLC).</p>
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
      start: "2021",
      end: "2022",
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
      start: "2020",
      end: "2021",
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
      end: "2020",
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
      badges: ["Java", "JavaScript", "Kafka", "Cassandra", "Angular", "OpenStack", "Elasticsearch"],
      title: "Senior Engineer - Task & Workload Management",
      start: "2018",
      end: "2020",
      description: (
        <>
          <p>Led development of three major streams: Workload Management, MyComm, and Target Alert Central (TAC) for store operations.</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Designed microservices for Target Alert Platform serving 200,000+ team members</li>
            <li>Implemented store inventory management and communication systems</li>
            <li>Developed backend alert services for push notifications</li>
            <li>Mentored high school interns and conducted code reviews</li>
            <li>Established CI/CD pipelines and maintained system performance</li>
          </ul>
        </>
      ),
    },
    {
      company: "Target Corporation",
      link: "https://www.target.com/",
      badges: ["Java", "JavaScript", "Kafka", "Angular", "DevOps"],
      title: "Senior Engineer - Store Task & Communication",
      start: "2016",
      end: "2018",
      description: (
        <>
          <p>Led store communication platform development delivering alerts to 150+ different channels.</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Managed system engineering design and implementation</li>
            <li>Developed and maintained microservices architecture</li>
            <li>Implemented performance testing and monitoring solutions</li>
            <li>Coached junior engineers on best practices</li>
            <li>Collaborated with BAs to resolve requirement gaps</li>
          </ul>
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
    },
    {
      company: "Target Corporation",
      badges: ["Java", "Spring", "IBM WebSphere", "Oracle", "SOAP", "EJB"],
      title: "System Programmer/Analyst",
      start: "2012",
      end: "2015",
      description: (
        <>
          <p>Led multiple critical projects including Distribution Stabilization and Hazardous Waste Compliance (HWC).</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Developed web services for reverse supply chain management</li>
            <li>Implemented ESIM handling in logistics supply chain</li>
            <li>Migrated applications from WebSphere 6.1 to 7.0</li>
            <li>Created authentication system using LDAP</li>
            <li>Designed and implemented Oracle Forms migration solution</li>
          </ul>
        </>
      ),
    },
    {
      company: "Target Corporation",
      link: "https://www.target.com/",
      badges: ["NICE SmartCenter", "IEX WFM", "SQL Server", "Real Time Designer"],
      title: "Senior Programmer/Analyst - NICE SmartCenter & IEX",
      start: "2014",
      end: "2015",
      description: (
        <>
          <p>Led implementation and support of NICE Interaction Manager (NIM) 4.1 and IEX Workforce Management systems for Target's contact centers.</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Managed recording functions implementation for Client Support Center, Guest Relations, and Gift Card Operations</li>
            <li>Created Pause/Resume triggers using Real Time Designer for sensitive data handling</li>
            <li>Maintained infrastructure spanning hundreds of Wintel and SQL servers</li>
            <li>Provided technical support and issue resolution for contact center agents</li>
            <li>Enhanced application security and implemented best practices</li>
          </ul>
        </>
      ),
    },
    {
      company: "Target Corporation",
      link: "https://www.target.com/",
      badges: ["Java", "Spring", "IBM WebSphere", "Oracle", "LDAP", "Shell Script"],
      title: "System Programmer/Analyst - Distribution Systems",
      start: "2013",
      end: "2014",
      description: (
        <>
          <p>Led distribution stabilization project to address critical issues in legacy distribution applications.</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Developed security screens with LDAP authentication integration</li>
            <li>Implemented SpringMVC controllers and JSP pages for enhanced functionality</li>
            <li>Migrated applications from WebSphere 6.1 to 7.0</li>
            <li>Created JUnit test suites for automated testing</li>
            <li>Resolved critical Oracle 9i database performance issues</li>
          </ul>
        </>
      ),
    },
    {
      company: "Target Corporation",
      link: "https://www.target.com/",
      badges: ["Java", "EJB 3.0", "Web Services", "Oracle", "SOAP", "JAXB", "JMS"],
      title: "System Programmer/Analyst - HWC",
      start: "2012",
      end: "2013",
      description: (
        <>
          <p>Developed Hazardous Waste Compliance (HWC) system for managing environmentally sensitive items in reverse logistics.</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Designed and implemented web services for reverse supply chain management</li>
            <li>Created XML schemas and implemented JAXB 2.0 mappings</li>
            <li>Developed JMS/MDB solutions for shipment quote processing</li>
            <li>Built persistence layer using iBATIS and Oracle</li>
            <li>Implemented automated testing using JUnit and HQ Quality Center</li>
          </ul>
        </>
      ),
    },
    {
      company: "Target Corporation",
      link: "https://www.target.com/",
      badges: ["Java", "Spring", ".NET", "Oracle Forms", "Web Services", "SOAP"],
      title: "System Programmer/Analyst - Forms Migration",
      start: "2010",
      end: "2012",
      description: (
        <>
          <p>Led migration of legacy Oracle Forms applications to modern Java/Spring and .NET architecture for distribution center operations.</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Architected multi-tier solution with .NET frontend and Java/Spring backend</li>
            <li>Implemented SOAP web services for cross-platform communication</li>
            <li>Developed security and authentication modules using LDAP</li>
            <li>Created deployment pipelines for WebSphere environment</li>
            <li>Established development, integration, and staging environments</li>
          </ul>
        </>
      ),
    }
  ],
  skills: [
    // Programming Languages
    "Java", "Python", "JavaScript", "Kotlin", "SQL", "PL/SQL", "Groovy", "GO",
    
    // Frameworks & Technologies
    "Spring Boot", "Spring Cloud", "MuleSoft", "Kubernetes", "Docker", "AWS", "Azure",
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
