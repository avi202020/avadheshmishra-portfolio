import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { href: "#profile", label: "Profile" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <div className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur print:hidden">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3">
        <a href="#top" className="text-sm font-semibold tracking-tight">
          Avadhesh Mishra
        </a>

        <div className="flex items-center gap-2">
          <div className="hidden gap-2 sm:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-xl px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-900 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}
