import { useEffect, useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Brain, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Cybersecurity',
    icon: Shield,
    skills: [
      { name: 'Threat Intelligence', level: 95 },
      { name: 'Incident Response', level: 92 },
      { name: 'Digital Forensics', level: 90 },
      { name: 'Penetration Testing', level: 88 },
      { name: 'SIEM/SOAR', level: 85 },
    ],
  },
  {
    title: 'AI/ML',
    icon: Brain,
    skills: [
      { name: 'Machine Learning', level: 90 },
      { name: 'Deep Learning', level: 85 },
      { name: 'NLP', level: 82 },
      { name: 'Python/TensorFlow', level: 88 },
      { name: 'Data Analytics', level: 92 },
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: Wrench,
    skills: [
      { name: 'Splunk/ELK Stack', level: 90 },
      { name: 'Wireshark/tcpdump', level: 88 },
      { name: 'Metasploit/Burp Suite', level: 85 },
      { name: 'Cloud Security (AWS/Azure)', level: 82 },
      { name: 'Docker/Kubernetes', level: 78 },
    ],
  },
];

function SkillBar({ name, level, isVisible }: { name: string; level: number; isVisible: boolean }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-success rounded-full transition-all duration-1000 ease-out"
          style={{ width: isVisible ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="relative z-10 py-20 px-4 bg-muted/30" data-testid="section-skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-mono text-2xl md:text-3xl font-bold text-primary mb-12 flex items-center gap-3">
          <span className="text-success">$</span> ls skills/
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={category.title} className="bg-card" data-testid={`card-skills-${category.title.toLowerCase()}`}>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <category.icon className="w-5 h-5 text-primary" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    isVisible={isVisible}
                  />
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
