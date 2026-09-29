import { useState } from 'react'
import { Check, LoaderCircle, Mail, Send, TriangleAlert } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/icons'
import { sendContact } from '../lib/api'
import Button from '../components/Button'

// TODO: point these at Kylle's real handles before deploying
const SOCIALS = [
  { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/kairu15' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { icon: Mail, label: 'Email', href: 'mailto:hello@kylle.dev' },
]

const INITIAL = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(INITIAL)
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [feedback, setFeedback] = useState('')
  const [fieldErrors, setFieldErrors] = useState({})

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    setFieldErrors({})
    try {
      const res = await sendContact(form)
      setStatus('success')
      setFeedback(res.message)
      setForm(INITIAL)
    } catch (err) {
      setStatus('error')
      setFeedback(err.message)
      if (err.errors) setFieldErrors(err.errors)
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden border-b-4 border-ink bg-bauhaus-yellow">
      {/* Large decorative shapes at 50% opacity in the corners */}
      <div
        aria-hidden="true"
        className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full border-4 border-ink bg-white opacity-50"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/4 -right-20 h-56 w-56 rotate-45 border-4 border-ink bg-bauhaus-blue opacity-50"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
        {/* Left: heading + social badges */}
        <div>
          <p className="label-constructivist">05 — Contact</p>
          <h2 className="heading-constructivist mt-4 text-4xl sm:text-6xl lg:text-7xl">
            Let&apos;s build something
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed font-medium">
            Internships, junior full-stack roles, or a chat about Laravel, Django
            and React — the form goes straight to my inbox via the API.
          </p>

          <ul className="mt-8 flex gap-4">
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="group inline-flex border-2 border-ink bg-white p-3 shadow-bauhaus-sm transition-transform duration-200 ease-out hover:-translate-y-1"
                >
                  <social.icon
                    className="h-6 w-6 transition-transform duration-200 ease-out group-hover:scale-110"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: the form card */}
        <div className="relative border-4 border-ink bg-white p-6 shadow-bauhaus-xl sm:p-8">
          <form onSubmit={handleSubmit} noValidate>
            <div className="flex flex-col gap-5">
              <div>
                <label htmlFor="contact-name" className="label-constructivist block">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={update('name')}
                  className="mt-2 w-full border-2 border-ink bg-canvas px-4 py-3 font-medium focus:bg-white"
                />
                {fieldErrors.name && (
                  <p className="mt-1 text-sm font-bold text-bauhaus-red">
                    {fieldErrors.name[0]}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="contact-email" className="label-constructivist block">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={update('email')}
                  className="mt-2 w-full border-2 border-ink bg-canvas px-4 py-3 font-medium focus:bg-white"
                />
                {fieldErrors.email && (
                  <p className="mt-1 text-sm font-bold text-bauhaus-red">
                    {fieldErrors.email[0]}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="contact-message" className="label-constructivist block">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={update('message')}
                  className="mt-2 w-full resize-y border-2 border-ink bg-canvas px-4 py-3 font-medium focus:bg-white"
                />
                {fieldErrors.message && (
                  <p className="mt-1 text-sm font-bold text-bauhaus-red">
                    {fieldErrors.message[0]}
                  </p>
                )}
              </div>

              {/* Success feedback */}
              {status === 'success' && (
                <div
                  role="status"
                  className="flex items-center gap-3 border-2 border-ink bg-bauhaus-cream p-4"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-ink bg-bauhaus-red text-white">
                    <Check className="h-5 w-5" strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span className="font-bold">{feedback}</span>
                </div>
              )}

              {/* Error feedback */}
              {status === 'error' && (
                <div
                  role="alert"
                  className="flex items-center gap-3 border-2 border-ink bg-bauhaus-red p-4 text-white"
                >
                  <TriangleAlert className="h-6 w-6 shrink-0" strokeWidth={3} aria-hidden="true" />
                  <span className="font-bold">{feedback}</span>
                </div>
              )}

              <div>
                <Button
                  type="submit"
                  variant="primary"
                  disabled={status === 'sending'}
                  aria-busy={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <>
                      <LoaderCircle
                        className="h-5 w-5 animate-spin"
                        strokeWidth={3}
                        aria-hidden="true"
                      />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message <Send className="h-5 w-5" strokeWidth={3} aria-hidden="true" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
