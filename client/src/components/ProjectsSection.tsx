import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Folder } from 'lucide-react';

// todo: remove mock functionality
const projects = [
  {
    id: 1,
    title: 'AI-Powered Threat Detection System',
    description: 'Machine learning pipeline for real-time identification of network anomalies and potential security breaches using deep learning models.',
    tags: ['Python', 'TensorFlow', 'Elasticsearch', 'Kafka'],
    category: 'ai',
    status: 'Completed',
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'Digital Forensics Toolkit',
    description: 'Comprehensive forensic analysis suite for disk imaging, memory analysis, and evidence preservation with chain of custody tracking.',
    tags: ['Python', 'C++', 'Volatility', 'FTK'],
    category: 'security',
    status: 'Active',
    github: '#',
  },
  {
    id: 3,
    title: 'SIEM Dashboard Enhancement',
    description: 'Custom Splunk dashboards and automated alert correlation engine for improved threat visibility and faster incident response.',
    tags: ['Splunk SPL', 'Python', 'REST API'],
    category: 'security',
    status: 'Completed',
  },
  {
    id: 4,
    title: 'Phishing Detection with NLP',
    description: 'Natural language processing model for identifying phishing emails and malicious URLs with 98.5% accuracy.',
    tags: ['Python', 'BERT', 'FastAPI', 'React'],
    category: 'ai',
    status: 'Completed',
    github: '#',
    demo: '#',
  },
  {
    id: 5,
    title: 'Vulnerability Assessment Platform',
    description: 'Automated vulnerability scanning and reporting system integrated with NIST CVE database for continuous security monitoring.',
    tags: ['Go', 'PostgreSQL', 'Docker', 'Nmap'],
    category: 'security',
    status: 'In Progress',
    github: '#',
  },
  {
    id: 6,
    title: 'Malware Behavior Analysis',
    description: 'Sandbox environment for dynamic malware analysis with behavioral pattern recognition and threat classification.',
    tags: ['Python', 'Cuckoo', 'YARA', 'Machine Learning'],
    category: 'ai',
    status: 'Active',
  },
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'security', label: 'Security' },
  { id: 'ai', label: 'AI/ML' },
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative z-10 py-20 px-4" data-testid="section-projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-mono text-2xl md:text-3xl font-bold text-primary mb-8 flex items-center gap-3">
          <span className="text-success">$</span> find ./projects -type f
        </h2>

        <div className="flex gap-2 mb-8 flex-wrap">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={activeCategory === cat.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveCategory(cat.id)}
              data-testid={`button-filter-${cat.id}`}
            >
              {cat.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group hover-elevate active-elevate-2 transition-all duration-300"
              data-testid={`card-project-${project.id}`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Folder className="w-5 h-5 text-primary shrink-0" />
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </div>
                  <div className="flex gap-1 shrink-0">
                    {project.github && (
                      <Button variant="ghost" size="icon" asChild data-testid={`button-github-${project.id}`}>
                        <a href={project.github} aria-label="View on GitHub">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button variant="ghost" size="icon" asChild data-testid={`button-demo-${project.id}`}>
                        <a href={project.demo} aria-label="View demo">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
                <Badge
                  variant={project.status === 'Completed' ? 'default' : project.status === 'Active' ? 'secondary' : 'outline'}
                  className="w-fit mt-2"
                >
                  {project.status}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs font-mono">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
