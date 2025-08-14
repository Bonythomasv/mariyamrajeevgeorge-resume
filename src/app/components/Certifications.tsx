import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface Certification {
  name: string;
  year: string;
}

interface CertificationsProps {
  certifications: Certification[];
}

export function Certifications({ certifications }: CertificationsProps) {
  if (!certifications || certifications.length === 0) {
    return null;
  }

  return (
    <section className="space-y-3">
      <h2 className="text-xl font-bold">Certifications</h2>
      <Card>
        <CardContent className="mt-2">
          <div className="space-y-4">
            {certifications.map((certification, index) => (
              <div key={index} className="flex justify-between">
                <div className="font-medium">{certification.name}</div>
                <div className="text-muted-foreground">{certification.year}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
