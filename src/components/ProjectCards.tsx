import { resume } from "@/data/resume";
import { Badge } from "@/components/Badge";

export function ProjectCards() {
  return (
    <div className="mt-4 space-y-6">
      {resume.projects.map((p) => (
        <article
          key={p.title}
          className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 shadow-soft"
        >
          {/* Header */}
          <div className="flex flex-col gap-1">
            <h3 className="text-base font-semibold text-neutral-100">
              {p.title}
            </h3>
            <span className="text-sm text-neutral-400">
              {p.role}
            </span>
          </div>

          {/* Description */}
          <p className="mt-3 leading-relaxed text-neutral-200">
            {p.description}
          </p>

          {/* Focus Areas */}
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
