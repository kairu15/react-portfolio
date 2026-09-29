import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import GeometricLogo from '../components/GeometricLogo'

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b-4 border-ink bg-canvas">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
      >
        <a href="#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <GeometricLogo className="h-10 w-10" title="Kylle — home" />
          <span className="text-2xl font-black uppercase tracking-tighter">Kylle</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-bold uppercase tracking-widest transition-colors duration-200 ease-out hover:text-bauhaus-red"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="press-effect inline-flex border-2 border-ink bg-bauhaus-red px-4 py-2 text-sm font-bold uppercase tracking-widest text-white shadow-bauhaus-sm duration-200 ease-out hover:bg-bauhaus-red/90 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          className="press-effect border-2 border-ink bg-white p-2 shadow-bauhaus-sm duration-200 ease-out active:translate-x-[2px] active:translate-y-[2px] active:shadow-none md:hidden"
        >
          {open ? <X className="h-6 w-6" strokeWidth={3} /> : <Menu className="h-6 w-6" strokeWidth={3} />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`grid overflow-hidden border-t-4 border-ink transition-[grid-template-rows] duration-300 ease-out md:hidden ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr] border-t-0'
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <ul className="flex flex-col divide-y-2 divide-ink bg-white">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-4 text-base font-bold uppercase tracking-widest transition-colors duration-200 ease-out hover:bg-bauhaus-muted"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
