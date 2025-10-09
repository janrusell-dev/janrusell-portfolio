export default function PanelContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-900 text-green-400 font-mono p-4 rounded shadow-lg">{children}</div>
  );
}
