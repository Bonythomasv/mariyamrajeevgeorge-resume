import { Metadata } from "next";
import { RESUME_DATA_DETAILED } from "@/data/resume-data-detailed";
import { Section } from "@/components/ui/section";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";

export const metadata: Metadata = {
  title: `${RESUME_DATA_DETAILED.name} | Detailed Resume`,
  description: RESUME_DATA_DETAILED.about,
};

export default function DetailedResume() {
  return (
    <main className="container mx-auto max-w-5xl px-4 py-8 md:py-12">
      {/* Header */}
      <section className="mb-12">
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:items-start md:text-left">
          <Avatar className="h-32 w-32 md:h-40 md:w-40">
            <AvatarImage src={RESUME_DATA_DETAILED.avatarUrl} alt={RESUME_DATA_DETAILED.name} />
            <AvatarFallback>{RESUME_DATA_DETAILED.initials}</AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              {RESUME_DATA_DETAILED.name}
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              {RESUME_DATA_DETAILED.about}
            </p>
            
            <div className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
              <Button variant="outline" size="sm" asChild>
                <a href={`mailto:${RESUME_DATA_DETAILED.contact.email}`}>
                  <MailIcon className="mr-2 h-4 w-4" />
                  Email
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href={`tel:${RESUME_DATA_DETAILED.contact.tel}`}>
                  <PhoneIcon className="mr-2 h-4 w-4" />
                  Call
                </a>
              </Button>
              {RESUME_DATA_DETAILED.contact.social.map((social) => (
                <Button key={social.name} variant="outline" size="sm" asChild>
                  <a href={social.url} target="_blank" rel="noopener noreferrer">
                    <span className="mr-2">{social.name}</span>
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <Section className="mb-8">
        <h2 className="text-2xl font-bold">Professional Summary</h2>
        <div className="prose mt-2 max-w-none text-muted-foreground">
          {RESUME_DATA_DETAILED.summary}
        </div>
      </Section>

      {/* Work Experience */}
      <Section className="mb-8">
        <h2 className="text-2xl font-bold">Work Experience</h2>
        <div className="mt-6 space-y-8">
          {RESUME_DATA_DETAILED.work.map((work) => (
            <div key={work.company} className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">
                  {work.company}
                </h3>
                <div className="text-sm text-muted-foreground">
                  {work.start} - {work.end || "Present"}
                </div>
              </div>
              <h4 className="text-lg font-medium text-muted-foreground">
                {work.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {work.badges.map((badge) => (
                  <span 
                    key={badge} 
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <div className="prose mt-2 max-w-none text-muted-foreground">
                {work.description}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section className="mb-8">
        <h2 className="text-2xl font-bold">Skills & Technologies</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {RESUME_DATA_DETAILED.skills.map((skill) => (
            <span 
              key={skill}
              className="inline-flex items-center rounded-md bg-muted px-2.5 py-0.5 text-sm font-medium text-muted-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section>
        <h2 className="text-2xl font-bold">Education</h2>
        <div className="mt-4 space-y-4">
          {RESUME_DATA_DETAILED.education.map((education) => (
            <div key={education.school}>
              <h3 className="font-semibold">{education.school}</h3>
              <p className="text-muted-foreground">{education.degree}</p>
              <p className="text-sm text-muted-foreground">
                {education.start} - {education.end}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
