import { Triangle } from 'lucide-react'
import Accordion from '../components/Accordion'

const STEPS = [
  {
    number: '01',
    title: 'Foundations',
    body: 'First two years of BSIT — programming fundamentals, data structures, and the first real web apps.',
  },
  {
    number: '02',
    title: 'Full-Stack Focus',
    body: 'Third year: Laravel and Django REST Framework on the backend, React on the frontend, PostgreSQL and MySQL for data.',
  },
  {
    number: '03',
    title: 'Capstone',
    body: 'Fourth year: geo-tagging system for the Bayawan City Veterinary Office — mapping livestock and poultry dispersal with Django REST, React and Leaflet.',
  },
  {
    number: '04',
    title: "What's Next",
    body: 'Graduation, then full-time engineering work. Open to internships and junior full-stack roles.',
  },
]

export default function Timeline() {
  return (
    <section id="timeline" className="border-b-4 border-ink bg-bauhaus-blue">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <p className="label-constructivist text-white/80">04 — Education</p>

        <h2 className="heading-constructivist mt-4 text-4xl text-white sm:text-6xl lg:text-7xl">
          The timeline
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <Accordion key={step.number} summary={step.title}>
              <div className="flex items-start gap-4">
                {/* Rotated step-number badge, counter-rotated content */}
                <span
                  aria-hidden="true"
                  className="mt-1 flex h-10 w-10 shrink-0 -rotate-45 items-center justify-center border-2 border-ink bg-white"
                >
                  <span className="rotate-45 text-sm font-black">{step.number}</span>
                </span>
                <p className="text-sm leading-relaxed font-medium">{step.body}</p>
              </div>
            </Accordion>
          ))}
        </div>

        {/* Decorative triangle accent */}
        <Triangle
          className="mt-12 h-8 w-8 text-white"
          strokeWidth={3}
          aria-hidden="true"
        />
      </div>
    </section>
  )
}
