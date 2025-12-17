import { Card, CardContent } from '@/components/ui/card';
import { 
  BookOpen, 
  Award, 
  Users, 
  GraduationCap, 
  FileText, 
  Building2, 
  DollarSign, 
  Compass, 
  Layers, 
  Video,
  Terminal
} from 'lucide-react';

const GITHUB_BASE_URL = 'https://ezekielologunde.github.io/ezekielologunde';

const resources = [
  {
    title: 'Basics',
    url: `${GITHUB_BASE_URL}/basics.html`,
    icon: Terminal,
    description: 'Fundamental concepts and getting started'
  },
  {
    title: 'Acronyms',
    url: `${GITHUB_BASE_URL}/Acronyms.html`,
    icon: FileText,
    description: 'Common cybersecurity terminology'
  },
  {
    title: 'Certification Guide',
    url: `${GITHUB_BASE_URL}/Certification%20Guide.html`,
    icon: Award,
    description: 'How to get certified in cybersecurity'
  },
  {
    title: 'Certifications',
    url: `${GITHUB_BASE_URL}/Certifications.html`,
    icon: GraduationCap,
    description: 'Available certifications overview'
  },
  {
    title: 'Resources',
    url: `${GITHUB_BASE_URL}/Resources.html`,
    icon: BookOpen,
    description: 'Learning materials and guides'
  },
  {
    title: 'Resource Hub',
    url: `${GITHUB_BASE_URL}/Resourcehub.html`,
    icon: Layers,
    description: 'Centralized resource collection'
  },
  {
    title: 'Paid Trainings',
    url: `${GITHUB_BASE_URL}/Paid%20Trainings.html`,
    icon: DollarSign,
    description: 'Premium training programs'
  },
  {
    title: 'Conferences',
    url: `${GITHUB_BASE_URL}/Conferences.html`,
    icon: Users,
    description: 'Industry events and conferences'
  },
  {
    title: 'Forums & Community',
    url: `${GITHUB_BASE_URL}/Forums%20%26%20Community.html`,
    icon: Users,
    description: 'Join the cybersecurity community'
  },
  {
    title: 'Leading Companies',
    url: `${GITHUB_BASE_URL}/Leading%20Cybersecurity%20Companies.html`,
    icon: Building2,
    description: 'Top companies in cybersecurity'
  },
  {
    title: 'TikTok',
    url: `${GITHUB_BASE_URL}/Tiktok.html`,
    icon: Video,
    description: 'Video content and tutorials'
  },
];

export default function StudentsSection() {
  return (
    <section id="students" className="relative z-10 py-20 px-4 bg-muted/30" data-testid="section-students">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-mono text-2xl md:text-3xl font-bold text-primary mb-4 flex items-center gap-3">
          <span className="text-success">$</span> ls /students/resources
        </h2>
        <p className="text-muted-foreground mb-12 text-lg">
          Resources and guides for my students pursuing careers in cybersecurity
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {resources.map((resource) => (
            <a
              key={resource.title}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`link-resource-${resource.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <Card className="h-full hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-primary/10">
                      <resource.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm mb-1 truncate">{resource.title}</h3>
                      <p className="text-xs text-muted-foreground line-clamp-2">{resource.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
