import { useEffect, useState } from 'react'
import { LoaderCircle, TriangleAlert } from 'lucide-react'
import { GithubIcon } from '../components/icons'
import { fetchProjects } from '../lib/api'
import Card from '../components/Card'
import Badge from '../components/Badge'
import SectionDivider from '../components/SectionDivider'

const TAG_ACCENTS = ['red', 'blue', 'yellow']

function ProjectCard({ project, index }) {
  return (
    <Card
      accent={index}
      className={project.featured ? 'md:col-span-2 md:-mt-4' : ''}
      aria-labelledby={`project-${project.id}`}
    >
      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            {project.featured && (
              <span className="label-constructivist mb-2 inline-block border-2 border-ink bg-bauhaus-red px-2 py-0.5 text-white">
                Featured — Capstone
              </span>
            )}
            <h3
              id={`project-${project.id}`}
              className="text-2xl font-bold tracking-tight sm:text-3xl"
            >
              {project.title}
            </h3>
          </div>

          {project.repo_url && (
            <a
              href={project.repo_url}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="press-effect border-2 border-ink bg-white p-2 shadow-bauhaus-sm duration-200 ease-out hover:bg-bauhaus-muted active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            >
              <GithubIcon className="h-6 w-6" strokeWidth={2.5} />
            </a>
          )}
        </div>

        <p className="mt-4 text-base leading-relaxed font-medium sm:text-lg">
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech, j) => (
            <li key={tech}>
              <Badge accent={TAG_ACCENTS[j % TAG_ACCENTS.length]}>{tech}</Badge>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  )
}

export default function Projects() {
  const [projects, setProjects] = useState(null) // null = still loading
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true
    fetchProjects()
      .then((res) => active && setProjects(res.data ?? []))
      .catch((err) => active && setError(err.message))
    return () => {
      active = false
    }
  }, [])

  return (
    <section id="projects" className="border-b-4 border-ink bg-canvas">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <p className="label-constructivist">03 — Projects</p>

        <h2 className="heading-constructivist mt-4 text-4xl sm:text-6xl lg:text-7xl">
          Selected work
        </h2>

        {/* Loading state */}
        {projects === null && !error && (
          <div
            role="status"
            className="mt-10 flex items-center justify-center gap-3 border-4 border-ink bg-white p-10 shadow-bauhaus-md"
          >
            <LoaderCircle className="h-6 w-6 animate-spin" strokeWidth={3} aria-hidden="true" />
            <span className="label-constructivist">Loading projects…</span>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div
            role="alert"
            className="mt-10 flex flex-wrap items-center justify-center gap-3 border-4 border-ink bg-bauhaus-red p-10 text-white shadow-bauhaus-md"
          >
            <TriangleAlert className="h-6 w-6" strokeWidth={3} aria-hidden="true" />
            <span className="label-constructivist">
              Couldn&apos;t load projects — is the Laravel API running?
            </span>
          </div>
        )}

        {/* Projects grid: featured capstone spans 2 cols and sits elevated */}
        {projects !== null && !error && (
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects.map((project, i) => (
              <ProjectCard key={project.id ?? project.title} project={project} index={i} />
            ))}
          </div>
        )}
      </div>

      <SectionDivider accent="blue" />
    </section>
  )
}
