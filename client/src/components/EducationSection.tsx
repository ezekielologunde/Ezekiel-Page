import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar } from 'lucide-react';

// todo: remove mock functionality
const education = [
  {
    id: 1,
    degree: 'Doctor of Engineering (D.Eng.) in Cybersecurity Analytics',
    institution: 'George Washington University',
    period: '2022 - Present',
    details: [
      'Research focus: Predictive threat detection using machine learning',
      'Dissertation: AI-driven approaches to zero-day vulnerability identification',
      'GPA: 4.0/4.0',
    ],
  },
  {
    id: 2,
    degree: 'Master of Science in Information Security',
    institution: 'Johns Hopkins University',
    period: '2018 - 2020',
    details: [
      'Concentration: Network Security and Digital Forensics',
      'Thesis: Behavioral analysis of advanced persistent threats',
      'Dean\'s List - All Semesters',
    ],
  },
  {
    id: 3,
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Maryland',
    period: '2014 - 2018',
    details: [
      'Minor: Mathematics',
      'Capstone: Intrusion detection system using neural networks',
      'Graduated Magna Cum Laude',
    ],
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="relative z-10 py-20 px-4 bg-muted/30" data-testid="section-education">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-mono text-2xl md:text-3xl font-bold text-primary mb-12 flex items-center gap-3">
          <span className="text-success">$</span> cat education.log
        </h2>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={edu.id} className="relative pl-0 md:pl-12" data-testid={`timeline-education-${edu.id}`}>
                <div className="absolute left-0 top-6 w-8 h-8 bg-primary rounded-full items-center justify-center hidden md:flex">
                  <GraduationCap className="w-4 h-4 text-primary-foreground" />
                </div>

                <Card className="hover-elevate transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-2 md:hidden">
                      <GraduationCap className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <h3 className="text-xl font-bold">{edu.degree}</h3>
                    </div>
                    <h3 className="text-xl font-bold mb-1 hidden md:block">{edu.degree}</h3>
                    <p className="font-mono text-primary mb-2">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </p>
                    <ul className="space-y-2">
                      {edu.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-muted-foreground text-sm pl-4 relative">
                          <span className="absolute left-0 text-success">&#9656;</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
