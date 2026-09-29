import { Code2, Database, Server, Wrench } from 'lucide-react'
import Card from '../components/Card'
import Badge from '../components/Badge'

const GROUPS = [
  {
    icon: Server,
    title: 'Backend',
    skills: ['Laravel', 'Django REST Framework', 'REST APIs'],
  },
  {
    icon: Code2,
    title: 'Frontend',
    skills: ['React', 'Vite', 'Tailwind CSS'],
  },
  {
    icon: Database,
    title: 'Database',
    skills: ['PostgreSQL', 'MySQL', 'SQLite'],
  },
  {
    icon: Wrench,
    title: 'Tools',
    skills: ['Git / GitHub', 'Composer', 'npm'],
  },
]

const ACCENTS = ['red', 'blue', 'yellow']

export default function Skills() {
  return (
    <section id="skills" className="border-b-4 border-ink bg-bauhaus-yellow">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <p className="label-constructivist">02 — Skills</p>

        <h2 className="heading-constructivist mt-4 text-4xl sm:text-6xl lg:text-7xl">
          The toolbox
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {GROUPS.map((group, i) => (
            <Card key={group.title} accent={i}>
              {/* Icon in bordered geometric box with shadow */}
              <div className="p-6">
                <span className="inline-flex border-2 border-ink bg-white p-3 shadow-bauhaus-sm">
                  <group.icon className="h-7 w-7" strokeWidth={2.5} aria-hidden="true" />
                </span>

                <h3 className="mt-5 text-2xl font-bold uppercase tracking-tight">
                  {group.title}
                </h3>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill, j) => (
                    <li key={skill}>
                      <Badge accent={ACCENTS[(i + j) % ACCENTS.length]}>{skill}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
