export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-neutral-800 bg-gray-50/80 dark:bg-neutral-950/50 backdrop-blur-sm transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-6 text-center text-gray-600 dark:text-neutral-500 text-sm">
        © {currentYear} <span className="font-semibold text-gray-800 dark:text-white">Jan Rusell Engracial</span>. All rights reserved.
      </div>
    </footer>
  );
}
