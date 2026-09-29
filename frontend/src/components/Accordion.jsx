import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

// ==================================================================
// Accordion — Bauhaus expand/collapse item (used for the Timeline).
// Closed: white card + hard shadow. Open: red header, cream body.
// Content reveal animates via the grid-rows 0fr→1fr technique.
// ==================================================================
export default function Accordion({
  summary,
  children,
  defaultOpen = false,
  className = '',
}) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div
      className={`border-4 border-ink ${open ? 'shadow-bauhaus-md' : 'shadow-bauhaus-md bg-white'} ${className}`}
    >
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`flex w-full items-center justify-between gap-4 p-5 text-left font-bold uppercase tracking-wide transition-colors duration-200 ease-out ${
          open ? 'bg-bauhaus-red text-white' : 'bg-white text-ink hover:bg-bauhaus-muted'
        }`}
      >
        <span>{summary}</span>
        <ChevronDown
          className={`h-6 w-6 shrink-0 transition-transform duration-300 ease-out ${open ? 'rotate-180' : ''}`}
          strokeWidth={3}
        />
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t-4 border-ink bg-bauhaus-cream p-5 text-ink">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
