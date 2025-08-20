const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-primary/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center space-y-8">
          {/* Copyright */}
          <div className="text-center space-y-3">
            <p className="text-slate-light font-mono text-sm">
              Built with ❤️ by Raj Singhaniya
            </p>
            <p className="text-slate-light font-mono text-xs">
              © {new Date().getFullYear()} • Built with Next.js & TypeScript
            </p>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-3 text-xs font-mono text-slate-light">
            <span className="hover:text-primary transition-colors duration-200">
              Next.js
            </span>
            <span>•</span>
            <span className="hover:text-primary transition-colors duration-200">
              TypeScript
            </span>
            <span>•</span>
            <span className="hover:text-primary transition-colors duration-200">
              Tailwind CSS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
