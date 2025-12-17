export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 py-8 px-4 border-t border-border" data-testid="footer">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">ezekiel@cybersec</span>
            <span className="text-muted-foreground">:~$ </span>
            <span className="text-success">echo</span> "Built with security in mind"
          </p>
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Ezekiel Ologunde. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
