import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/icons'
import GeometricLogo from '../components/GeometricLogo'

// TODO: point these at Kylle's real handles before deploying
const SOCIALS = [
  { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/kairu15' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { icon: Mail, label: 'Email', href: 'mailto:hello@kylle.dev' },
]

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-12 sm:px-6 lg:flex-row lg:justify-between lg:px-8">
        {/* Small repeated geometric mark + name */}
        <div className="flex items-center gap-3">
          <GeometricLogo className="h-8 w-8" title="Kylle logo" />
          <span className="text-xl font-black uppercase tracking-tighter">Kylle</span>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center justify-center gap-6">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-bold uppercase tracking-widest text-white/80 transition-colors duration-200 ease-out hover:text-bauhaus-yellow"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social icons */}
        <ul className="flex items-center gap-4">
          {SOCIALS.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="inline-flex border-2 border-white/40 p-2 transition-colors duration-200 ease-out hover:border-bauhaus-yellow hover:text-bauhaus-yellow"
              >
                <social.icon className="h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t-2 border-white/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-white/60">
            © {new Date().getFullYear()} Kylle. All rights reserved.
          </p>
          <p className="text-sm font-medium text-white/60">
            Laravel API · React · Bauhaus design system
          </p>
        </div>
      </div>
    </footer>
  )
}
