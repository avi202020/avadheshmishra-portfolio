import { resume } from "@/data/resume";

export function ContactSection() {
  const embed = resume.googleFormEmbedUrl;
  const edit = resume.googleFormEditUrl;

  return (
    <div className="mt-4 space-y-4">
      <p className="text-neutral-700 dark:text-neutral-200">
        For enquiries, you can email{" "}
        <a className="underline" href={`mailto:${resume.email}`}>
          {resume.email}
        </a>{" "}
        or use the form below.
      </p>

      <div className="rounded-2xl border bg-white p-2 shadow-soft dark:bg-neutral-950 print:hidden">
        <iframe
          title="Contact form"
          src={embed}
          className="h-[820px] w-full rounded-xl"
          loading="lazy"
        />
      </div>

      <div className="rounded-2xl border bg-white p-6 shadow-soft dark:bg-neutral-950 hidden print:block">
        <p className="text-neutral-700">
          Contact: {resume.email} • {resume.phone}
        </p>
        <p className="mt-2 text-neutral-700">
          To send a message, visit the online form (not available in print):
          {" "}
          {edit}
        </p>
      </div>
    </div>
  );
}
