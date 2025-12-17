import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Shield, Brain, Award, Terminal } from 'lucide-react';

const lines = [
  { text: '$ whoami', delay: 0 },
  { text: 'Ezekiel Ologunde', delay: 800 },
  { text: '', delay: 1200 },
  { text: '$ cat role.txt', delay: 1400 },
  { text: 'Cybersecurity Expert | AI/ML Specialist | Digital Forensics Analyst', delay: 2200 },
  { text: '', delay: 2600 },
  { text: '$ cat status.txt', delay: 2800 },
  { text: 'D.Eng. Candidate in Cybersecurity Analytics', delay: 3600 },
  { text: 'Specializing in Predictive Threat Detection', delay: 4000 },
  { text: '', delay: 4400 },
  { text: '$ echo "Ready to secure your digital future."', delay: 4600 },
];

const badges = [
  { icon: Shield, label: 'CISSP' },
  { icon: Brain, label: 'AI/ML' },
  { icon: Award, label: 'CEH' },
  { icon: Terminal, label: 'Forensics' },
];

export default function TerminalHero() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (currentLine >= lines.length) return;

    const line = lines[currentLine];
    
    if (currentChar === 0) {
      const delay = line.delay - (currentLine > 0 ? lines[currentLine - 1].delay : 0);
      const timeout = setTimeout(() => {
        if (line.text.length === 0) {
          setDisplayedLines((prev) => [...prev, '']);
          setCurrentLine((prev) => prev + 1);
        } else {
          setCurrentChar(1);
        }
      }, delay);
      return () => clearTimeout(timeout);
    }

    if (currentChar <= line.text.length) {
      const timeout = setTimeout(() => {
        const isCommand = line.text.startsWith('$');
        const typingSpeed = isCommand ? 50 : 20;
        
        if (currentChar === line.text.length) {
          setDisplayedLines((prev) => [...prev.slice(0, -1), line.text]);
          setCurrentLine((prev) => prev + 1);
          setCurrentChar(0);
        } else {
          setDisplayedLines((prev) => {
            const newLines = [...prev];
            if (newLines.length === 0 || currentChar === 1) {
              newLines.push(line.text.slice(0, currentChar));
            } else {
              newLines[newLines.length - 1] = line.text.slice(0, currentChar);
            }
            return newLines;
          });
          setCurrentChar((prev) => prev + 1);
        }
      }, line.text.startsWith('$') ? 50 : 20);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar]);

  return (
    <section className="relative z-10 min-h-[60vh] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-3xl">
        <div className="bg-card border border-border rounded-lg overflow-hidden shadow-lg shadow-primary/10" data-testid="terminal-window">
          <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="ml-4 text-xs font-mono text-muted-foreground">terminal@portfolio ~ </span>
          </div>

          <div className="p-6 font-mono text-sm leading-relaxed min-h-[280px]">
            {displayedLines.map((line, index) => (
              <div key={index} className="whitespace-pre-wrap break-words">
                {line.startsWith('$') ? (
                  <>
                    <span className="text-success">$</span>
                    <span className="text-foreground">{line.slice(1)}</span>
                  </>
                ) : (
                  <span className="text-primary">{line}</span>
                )}
              </div>
            ))}
            {currentLine < lines.length && (
              <span
                className={`inline-block w-2 h-5 bg-primary ml-0.5 align-middle ${showCursor ? 'opacity-100' : 'opacity-0'}`}
              />
            )}
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 flex-wrap mt-8">
          {badges.map((badge) => (
            <Badge
              key={badge.label}
              variant="secondary"
              className="flex items-center gap-2 px-3 py-1.5"
              data-testid={`badge-${badge.label.toLowerCase()}`}
            >
              <badge.icon className="w-4 h-4" />
              <span>{badge.label}</span>
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
