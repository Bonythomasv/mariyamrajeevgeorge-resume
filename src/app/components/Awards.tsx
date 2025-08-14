import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

interface Award {
  name: string;
  issuer: string;
  date: string;
  description: string;
  association: string;
}

interface AwardsProps {
  awards: Award[];
}

export function Awards({ awards }: AwardsProps) {
  if (!awards || awards.length === 0) {
    return null;
  }

  return (
    <Section>
      <h2 className="text-xl font-bold">Honors & Awards</h2>
      <div className="grid grid-cols-1 gap-3 mt-4">
        {awards.map((award, index) => (
          <Card key={index} className="group hover:bg-accent/50 transition-colors">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-base font-medium">
                  {award.name}
                </h3>
                <div className="text-sm text-muted-foreground">
                  {award.date}
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                {award.issuer}
              </div>
            </CardHeader>
            <CardContent className="pb-4">
              <div className="flex flex-wrap gap-1 mb-2">
                <Badge variant="secondary" className="text-xs">
                  {award.association}
                </Badge>
              </div>
              <p className="text-sm text-foreground/90">{award.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
