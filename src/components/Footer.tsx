import { resume } from "@/data/resume";

export function Footer() {
  return (
    <footer className="mt-14 border-t pt-6 text-sm text-neutral-500 dark:text-neutral-400">
      © {new Date().getFullYear()} {resume.name}. Built with Next.js.
      <span className="print:hidden"> • Tip: use your browser Print to save as PDF.</span>
    </footer>
  );
}
