import { ArrowRight } from 'lucide-react'
import Button from '../components/Button'

export default function Hero() {
  return (
    <section id="top" className="border-b-4 border-ink">
      <div className="mx-auto grid max-w-7xl gap-0 lg:grid-cols-2">
        {/* Left: name, title, intro, CTAs */}
        <div className="flex flex-col justify-center gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <p className="label-constructivist">BSIT Student — Full-Stack Developer</p>

          <h1 className="heading-constructivist text-5xl sm:text-7xl lg:text-8xl">
            Kylle
            <span className="block text-bauhaus-red">.</span>
          </h1>

          <p className="max-w-md text-lg leading-relaxed font-medium">
            I build web systems end-to-end — from Laravel and Django REST APIs to
            React front-ends — currently shipping a geo-tagging capstone for a
            city veterinary office.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button href="#projects" variant="primary">
              View Projects <ArrowRight className="h-5 w-5" strokeWidth={3} />
            </Button>
            <Button href="#contact" variant="outline">
              Contact Me
            </Button>
          </div>
        </div>

        {/* Right: blue color-blocked geometric composition */}
        <div className="relative flex items-center justify-center overflow-hidden border-t-4 border-ink bg-bauhaus-blue py-16 sm:py-20 lg:border-t-0 lg:border-l-4 lg:py-24">
          {/* Overlapping circle */}
          <div
            aria-hidden="true"
            className="absolute top-[12%] left-[10%] h-40 w-40 rounded-full border-4 border-ink bg-bauhaus-red sm:h-52 sm:w-52"
          />
          {/* Rotated square (45°) */}
          <div
            aria-hidden="true"
            className="absolute right-[12%] bottom-[14%] h-36 w-36 rotate-45 border-4 border-ink bg-bauhaus-yellow sm:h-44 sm:w-44"
          />
          {/* Centered square with triangle */}
          <div
            aria-hidden="true"
            className="relative z-10 flex h-44 w-44 items-center justify-center border-4 border-ink bg-white shadow-bauhaus-xl sm:h-56 sm:w-56"
          >
            <div className="shape-triangle h-24 w-24 bg-bauhaus-blue sm:h-32 sm:w-32" />
          </div>
          {/* Dot-grid texture strip */}
          <div aria-hidden="true" className="dot-grid absolute inset-x-0 bottom-0 h-8 opacity-40" />
        </div>
      </div>
    </section>
  )
}
