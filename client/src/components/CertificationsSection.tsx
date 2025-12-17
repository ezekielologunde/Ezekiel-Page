import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Award, CheckCircle, Lock } from 'lucide-react';

// todo: remove mock functionality
const certifications = [
  {
    id: 1,
    name: 'CISSP',
    fullName: 'Certified Information Systems Security Professional',
    issuer: '(ISC)²',
    date: '2021',
    icon: Shield,
    color: 'text-blue-400',
  },
  {
    id: 2,
    name: 'CEH',
    fullName: 'Certified Ethical Hacker',
    issuer: 'EC-Council',
    date: '2020',
    icon: Lock,
    color: 'text-green-400',
  },
  {
    id: 3,
    name: 'GCFE',
    fullName: 'GIAC Certified Forensic Examiner',
    issuer: 'SANS/GIAC',
    date: '2021',
    icon: Award,
    color: 'text-purple-400',
  },
  {
    id: 4,
    name: 'AWS Security',
    fullName: 'AWS Certified Security - Specialty',
    issuer: 'Amazon Web Services',
    date: '2022',
    icon: CheckCircle,
    color: 'text-orange-400',
  },
  {
    id: 5,
    name: 'OSCP',
    fullName: 'Offensive Security Certified Professional',
    issuer: 'Offensive Security',
    date: '2020',
    icon: Shield,
    color: 'text-red-400',
  },
  {
    id: 6,
    name: 'CompTIA Security+',
    fullName: 'CompTIA Security+',
    issuer: 'CompTIA',
    date: '2019',
    icon: CheckCircle,
    color: 'text-cyan-400',
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="relative z-10 py-20 px-4" data-testid="section-certifications">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-mono text-2xl md:text-3xl font-bold text-primary mb-12 flex items-center gap-3">
          <span className="text-success">$</span> gpg --list-keys certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <Card
              key={cert.id}
              className="group hover-elevate active-elevate-2 transition-all duration-300"
              data-testid={`card-cert-${cert.id}`}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-muted ${cert.color}`}>
                    <cert.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-lg">{cert.name}</h3>
                      <Badge variant="outline" className="text-xs shrink-0">{cert.date}</Badge>
                    </div>
                    <p className="text-sm text-foreground mb-1 line-clamp-2">{cert.fullName}</p>
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
