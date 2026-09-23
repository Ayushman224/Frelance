import { useMemo, useState } from "react";
import { projectFilters, projects } from "@/data/projects";
import type { Project, ProjectCategory } from "@/types";
import { useContactIntent } from "@/lib/contactIntent";
import { cn } from "@/lib/cn";
import { ProjectVisual } from "@/components/ProjectVisual";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Modal } from "@/components/ui/Modal";
import { Reveal } from "@/components/ui/Reveal";
import { Container, Section, SectionHeader } from "@/components/ui/Section";

export function Work() {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const visible = useMemo(() => (filter === "all" ? projects : projects.filter((p) => p.category === filter)), [filter]);

  return (
    <Section id="work" labelledBy="work-title">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            id="work-title"
            eyebrow="Work"
            title="Selected Work"
            description="Personal and project work across web applications, automation and business websites."
            align="left"
          />
          <Reveal>
            <div role="group" aria-label="Filter projects" className="inline-flex flex-wrap gap-1 rounded-full border border-slate-200 bg-slate-50 p-1">
              {projectFilters.map((f) => (
                <button
                  key={f.value}
                  type="button"
                  aria-pressed={filter === f.value}
                  onClick={() => setFilter(f.value)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-all",
                    filter === f.value ? "bg-white text-slate-900 shadow-sm ring-1 ring-slate-200" : "text-slate-600 hover:text-slate-900",
                  )}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <p className="sr-only" aria-live="polite">
          Showing {visible.length} {visible.length === 1 ? "project" : "projects"}
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {visible.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={() => setOpenProject(p)} />
          ))}
        </div>
      </Container>

      <CaseStudyDialog project={openProject} onClose={() => setOpenProject(null)} />
    </Section>
  );
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative overflow-hidden border-b border-slate-200">
        <ProjectVisual project={project} className="transition-transform duration-500 group-hover:scale-[1.02]" />
        {project.isPlaceholder && (
          <Badge tone="amber" className="absolute top-4 left-4">
            Case study coming soon
          </Badge>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-slate-600">{project.description}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technology used">
          {project.tech.map((t) => (
            <li key={t}>
              <Badge tone="neutral">{t}</Badge>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap gap-3 pt-7">
          {project.liveUrl ? (
            <Button href={project.liveUrl} external variant="secondary" size="sm" icon="arrow-up-right">
              View Project
            </Button>
          ) : null}
          <Button variant={project.liveUrl ? "outline" : "secondary"} size="sm" icon="arrow-right" onClick={onOpen}>
            Project Case Study
          </Button>
        </div>
      </div>
    </article>
  );
}

function CaseStudyDialog({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const { requestContact } = useContactIntent();

  return (
    <Modal open={Boolean(project)} onClose={onClose} labelledBy="case-study-title">
      {project && (
        <>
          <div className="-mx-6 -mt-6 mb-6 overflow-hidden sm:-mx-8 sm:-mt-8">
            <ProjectVisual project={project} />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="brand">Project Case Study</Badge>
            {project.isPlaceholder && <Badge tone="amber">Coming soon</Badge>}
          </div>
          <h3 id="case-study-title" className="mt-3 text-2xl font-bold">
            {project.title}
          </h3>
          <p className="mt-3 leading-relaxed text-slate-600">{project.caseStudy.overview}</p>

          <h4 className="mt-6 font-sans text-sm font-semibold text-slate-900">What was built</h4>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {project.caseStudy.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm text-slate-600">
                <Icon name="check-circle" className="mt-0.5 size-4 shrink-0 text-brand-600" />
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-6 grid gap-4 rounded-2xl bg-slate-50 p-4 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">Role</p>
              <p className="mt-1 text-sm text-slate-800">{project.caseStudy.role}</p>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">Technology</p>
              <p className="mt-1 text-sm text-slate-800">{project.tech.join(" · ")}</p>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {project.liveUrl && (
              <Button href={project.liveUrl} external variant="outline" icon="arrow-up-right">
                View Project
              </Button>
            )}
            <Button
              icon="arrow-right"
              onClick={() => {
                const message = `I saw your "${project.title}" project and would like something similar for my business.`;
                onClose();
                // Wait for the dialog to close and release the scroll lock before scrolling to the form.
                window.setTimeout(() => requestContact({ message }), 60);
              }}
            >
              Discuss a similar project
            </Button>
          </div>
        </>
      )}
    </Modal>
  );
}
