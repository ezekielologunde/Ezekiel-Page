import { Card, CardContent } from '@/components/ui/card';
import { Shield, Brain, Code, Lock } from 'lucide-react';

const focusAreas = [
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Advanced threat detection and incident response',
  },
  {
    icon: Brain,
    title: 'AI/ML',
    description: 'Machine learning for predictive security analytics',
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Secure application development and code review',
  },
  {
    icon: Lock,
    title: 'Digital Forensics',
    description: 'Evidence analysis and investigation procedures',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative z-10 py-20 px-4" data-testid="section-about">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-mono text-2xl md:text-3xl font-bold text-primary mb-12 flex items-center gap-3">
          <span className="text-success">$</span> cat about.md
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="grid grid-cols-2 gap-4">
            {focusAreas.map((area) => (
              <Card
                key={area.title}
                className="hover-elevate active-elevate-2 transition-all duration-300"
                data-testid={`card-focus-${area.title.toLowerCase()}`}
              >
                <CardContent className="p-6 text-center">
                  <area.icon className="w-10 h-10 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold text-lg mb-2">{area.title}</h3>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-card/50 border border-border rounded-lg p-6 lg:p-8">
            <p className="text-lg leading-relaxed mb-4">
              I am a dedicated <span className="text-primary font-semibold">cybersecurity professional</span> and{' '}
              <span className="text-success font-semibold">AI/ML specialist</span> with extensive experience in
              protecting digital infrastructure and leveraging machine learning for advanced threat detection.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Currently pursuing a <span className="text-primary font-semibold">Doctorate in Engineering (D.Eng.)</span>{' '}
              in Cybersecurity Analytics, my research focuses on developing predictive models for identifying and
              mitigating cyber threats before they materialize.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With certifications including CISSP, CEH, and expertise in SIEM platforms, I bring a comprehensive
              approach to securing organizations against evolving digital threats while maintaining operational
              efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
