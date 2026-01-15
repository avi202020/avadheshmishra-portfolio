import { resume } from "@/data/resume";
import { Badge } from "@/components/Badge";

export function ProjectCards() {
  return (
    <div className="mt-4 grid gap-6">
      {resume.projects.map((p) => (
        <article
          key={p.title}
          className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 shadow-soft"
        >
          <h3 className="text-base font-semibold">{p.title}</h3>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{p.role}</p>
          <p className="mt-3 leading-relaxed text-neutral-700 dark:text-neutral-200">
            {p.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.focusAreas.map((f) => (
              <Badge key={f}>{f}</Badge>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
