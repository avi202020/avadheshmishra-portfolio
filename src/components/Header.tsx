import { resume } from "@/data/resume";

export function Header() {
  return (
    <header className="space-y-3">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">{resume.name}</h1>
          <p className="mt-1 text-lg text-neutral-600 dark:text-neutral-300">
            {resume.title}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 print:hidden">
          <a
            className="rounded-xl border px-4 py-2 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-900"
            href={resume.cvDownloadUrl}
            target="_blank"
            rel="noreferrer"
          >
            Download CV
          </a>
          <a
            className="rounded-xl border px-4 py-2 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-900"
            href={`mailto:${resume.email}`}
          >
            Email
          </a>
        </div>
      </div>

      <p className="text-sm text-neutral-600 dark:text-neutral-300">
        {resume.location} •{" "}
        <a className="underline" href={`tel:${resume.phone}`}>
          {resume.phone}
        </a>{" "}
        •{" "}
        <a className="underline" href={`mailto:${resume.email}`}>
          {resume.email}
        </a>
      </p>

      <p className="text-sm text-neutral-600 dark:text-neutral-300 print:hidden">
        <a className="underline" href={resume.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>{" "}
        •{" "}
        <a className="underline" href={resume.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        {resume.website ? (
          <>
            {" "}•{" "}
            <a className="underline" href={resume.website} target="_blank" rel="noreferrer">
              Portfolio
            </a>
          </>
        ) : null}
      </p>
    </header>
  );
}
