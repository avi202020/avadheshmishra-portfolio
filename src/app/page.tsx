import { resume } from "@/data/resume";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import { Badge } from "@/components/Badge";
import { Header } from "@/components/Header";
import { Experience } from "@/components/Experience";
import { ProjectCards } from "@/components/ProjectCards";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <a id="top" className="sr-only" />
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 py-10">
        <Header />

        <Section id="profile" title="Profile">
          <p className="leading-relaxed text-neutral-700 dark:text-neutral-200">
            {resume.summary}
          </p>
        </Section>

        <Section title="Highlights">
          <ul className="list-disc space-y-1 pl-5 text-neutral-700 dark:text-neutral-200">
            {resume.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </Section>

        <Section id="projects" title="Projects & Major Engagements">
          <ProjectCards />
        </Section>

        <Section id="experience" title="Experience">
          <Experience />
        </Section>

        <Section title="Certifications">
          <div className="flex flex-wrap gap-2">
            {resume.certifications.map((c) => (
              <Badge key={c}>{c}</Badge>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Core Skills">
          <ul className="list-disc space-y-1 pl-5 text-neutral-700 dark:text-neutral-200">
            {resume.skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </Section>

<Section id="contact" title="Contact">
  <ContactSection />
</Section>

        <Footer />
      </main>
    </>
  );
}
