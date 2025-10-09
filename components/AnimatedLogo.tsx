export default function AnimatedLogo({ src, name }: { src: string; name: string }) {
  return (
    <div className="flex flex-col items-center space-y-2 hover:scale-110 transition-transform">
      <img src={src} alt={name} className="w-12 h-12" />
      <span className="text-sm font-mono">{name}</span>
    </div>
  );
}
