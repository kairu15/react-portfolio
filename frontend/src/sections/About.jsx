import { Quote } from 'lucide-react'
import Card from '../components/Card'
import SectionDivider from '../components/SectionDivider'

const STATS = [
  { value: '4th', label: 'Year BSIT' },
  { value: '2+', label: 'Stacks In Production' },
  { value: '1', label: 'Capstone Shipped' },
  { value: '∞', label: 'Curiosity' },
]

export default function About() {
  return (
    <section id="about" className="border-b-4 border-ink bg-bauhaus-red">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <p className="label-constructivist text-white/80">01 — About</p>

        <h2 className="heading-constructivist mt-4 text-4xl text-white sm:text-6xl lg:text-7xl">
          Built like a poster
        </h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Quote className="h-8 w-8 text-white" strokeWidth={3} aria-hidden="true" />
            <p className="mt-4 text-lg leading-relaxed font-medium text-white sm:text-xl">
              I&apos;m Kylle, a fourth-year BS Information Technology student and
              full-stack developer. I care about honest architecture: clean APIs,
              deliberate design systems, and interfaces that say exactly what they
              mean. Right now I&apos;m engineering my capstone — a geo-tagging
              system for livestock and poultry dispersal tracking — with Django
              REST Framework, React and PostgreSQL.
            </p>
            <p className="mt-6 text-lg leading-relaxed font-medium text-white/90">
              Education: BS Information Technology, currently in my final year.
              Focus: building systems that work in the field, not just in demos.
            </p>
          </div>

          {/* Stats card breaking the grid asymmetrically */}
          <Card accent={1} className="self-start">
            <div className="divide-y-2 divide-ink">
              {STATS.map((stat) => (
                <div key={stat.label} className="flex items-baseline justify-between p-4">
                  <span className="text-3xl font-black tracking-tighter">{stat.value}</span>
                  <span className="label-constructivist">{stat.label}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      <SectionDivider accent="yellow" />
    </section>
  )
}
