import { resume } from "@/data/resume";
import { Badge } from "@/components/Badge";

export function ProjectCards() {
  return (
    <div className="mt-4 space-y-6">
      {resume.projects.map((p) => (
        <article
          key={p.title}
          className="rounded-2xl border bg-white p-6 shadow-soft dark:bg-neutral-950"
        >
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-base font-semibold">{p.title}</h3>
            <span className="text-sm text-neutral-600 dark:text-neutral-300">
              {p.role}
            </span>
          </div>

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
