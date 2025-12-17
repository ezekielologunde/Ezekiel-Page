import MatrixRain from '../MatrixRain';

export default function MatrixRainExample() {
  return (
    <div className="relative w-full h-96 bg-background overflow-hidden rounded-md">
      <MatrixRain />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-muted-foreground font-mono text-sm">Matrix Rain Background Effect</p>
      </div>
    </div>
  );
}
