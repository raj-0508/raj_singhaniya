"use client";

import Image from "next/image";
import Link from "next/link";

export default function FooterGlow() {
  return (
    <footer className="relative z-10 mt-8 w-full overflow-hidden  pt-16">
      <style jsx global>{`
        .glass {
          backdrop-filter: blur(3px) saturate(180%);
          background: radial-gradient(circle, #fff9 0%, #ffdce64d 60%, #f9f2f4 100%);
          border: 1px solid #ff96b41a;
          justify-content: center;
          align-items: center;
          transition: all .3s;
          display: flex;
        }
        .glass:where(.dark, .dark *) {
          display: flex
          backdrop-filter: blur(2px) !important;
          background: radial-gradient(circle, #ffffff1a 0%, #1e00001a 60%, #2a0e0e 100%) !important;
          border: 1px solid #ffffff0d !important;
          border-radius: 16px !important;
          justify-content: center !important;
          align-items: center !important;
        }
      `}</style>
      <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-full w-full -translate-x-1/2 select-none">
        <div className="absolute top-8 left-1/6 h-72 w-72 rounded-full bg-rose-600/20 blur-3xl"></div>
        <div className="absolute -bottom-16 right-1/6 h-80 w-80 rounded-full bg-rose-600/20 blur-3xl"></div>
      </div>
      <div className="glass relative mx-auto flex w-full flex-col items-center gap-8 rounded-2xl px-20 py-10 md:flex-row md:items-start md:justify-between md:gap-12">
        <div className="flex flex-col items-center md:items-start md:w-2xl">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="LOGO" width={90} height={40} />
          </Link>
          <p className="mb-6 max-w-xs text-center text-sm text-foreground md:text-left">
            I am a passionate Frontend Developer with a strong focus on creating
            visually appealing and highly responsive web interfaces. I
            specialize in modern technologies like React.js, Next.js, and
            Tailwind CSS, and I love turning creative ideas into seamless
            digital experiences.
          </p>
          
        </div>
        <nav>
          <div className="flex w-full flex-col gap-9 md:gap-14 lg:gap-36 text-center md:w-auto md:flex-row md:justify-end md:text-left">
            <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-rose-400">
              <a href="#about">About</a>
            </div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-rose-400">
              <a href="#projects">Project</a>
            </div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-rose-400">
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <div className="mt-10 flex gap-5 text-rose-400">
            <a
              href="https://github.com/raj-0508"
              aria-label="GitHub"
              className="transition hover:text-yellow-300"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .29a12 12 0 00-3.797 23.401c.6.11.82-.26.82-.577v-2.17c-3.338.726-4.042-1.415-4.042-1.415-.546-1.387-1.332-1.756-1.332-1.756-1.09-.744.084-.729.084-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.306 3.495.999.106-.775.418-1.307.76-1.608-2.665-.301-5.466-1.332-5.466-5.933 0-1.31.469-2.381 1.236-3.222-.123-.303-.535-1.523.117-3.176 0 0 1.007-.322 3.301 1.23a11.502 11.502 0 016.002 0c2.292-1.552 3.297-1.23 3.297-1.23.654 1.653.242 2.873.119 3.176.77.841 1.235 1.912 1.235 3.222 0 4.61-2.805 5.629-5.476 5.925.429.369.813 1.096.813 2.211v3.285c0 .32.217.694.825.576A12 12 0 0012 .29"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/raj-05r08"
              aria-label="LinkedIn"
              className="transition	hover:text-yellow-300"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5v-14a5 5 0 00-5-5zm-11 19h-3v-9h3zm-1.5-10.268a1.752 1.752 0 110-3.505 1.752 1.752 0 010 3.505zm15.5 10.268h-3v-4.5c0-1.07-.02-2.450-1.492-2.450-1.495 0-1.725 1.166-1.725 2.372v4.578h-3v-9h2.88v1.23h.04a3.157 3.157 0 012.847-1.568c3.042 0 3.605 2.003 3.605 4.612v4.726z" />
              </svg>
            </a>
            <a
              href="mailto:rajsinghaniya0508@example.com"
              aria-label="Email"
              className="transition	hover:text-yellow-300"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1.5 4.5h21v15h-21v-15zm19.5 1.5h-18l9 6.75 9-6.75zm-9 8.25l-9-6.75v11.25h18v-11.25l-9 6.75z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/raj._.singhaniya"
              aria-label="Instagram"
              className="transition	hover:text-yellow-300"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.337 3.608 1.312.976.975 1.25 2.242 1.312 3.608.058 1.266.07 1.646.07 4.847s-.012 3.584-.07 4.85c-.062 1.366-.337 2.633-1.312 3.608-.975.976-2.242 1.25-3.608 1.312-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.337-3.608-1.312-.976-.975-1.25-2.242-1.312-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.337-2.633 1.312-3.608.975-.976 2.242-1.25 3.608-1.312C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.735 0 8.332.014 7.052.072 5.72.13 4.42.384 3.29 1.514 2.159 2.645 1.905 3.945 1.847 5.277.789 6.557.775 6.96.775 12c0 5.04.014 5.443.072 6.723.058 1.332.312 2.632 1.443 3.763 1.13 1.13 2.431 1.385 3.763 1.443 1.28.058 1.683.072 6.723.072s5.443-.014 6.723-.072c1.332-.058 2.632-.313 3.763-1.443 1.13-1.131 1.385-2.431 1.443-3.763.058-1.28.072-1.683.072-6.723s-.014-5.443-.072-6.723c-.058-1.332-.313-2.632-1.443-3.763C20.555.384 19.255.13 17.923.072 16.643.014 16.24 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
              </svg>
            </a>
          </div>
          </div>
        </nav>
      </div>
    </footer>
  );
}
