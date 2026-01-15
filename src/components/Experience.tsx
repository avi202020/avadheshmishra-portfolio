import { resume } from "@/data/resume";

export function Experience() {
  return (
    <div className="mt-4 space-y-6">
      {resume.experience.map((job) => (
        <article
          key={`${job.company}-${job.dates}`}
          className="rounded-2xl border bg-white p-6 shadow-soft dark:bg-neutral-950"
        >
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-base font-semibold">
              {job.role} • {job.company}
            </h3>
            <span className="text-sm text-neutral-600 dark:text-neutral-300">{job.dates}</span>
          </div>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-neutral-700 dark:text-neutral-200">
            {job.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
