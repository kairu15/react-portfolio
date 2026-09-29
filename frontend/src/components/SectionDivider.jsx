// ==================================================================
// SectionDivider — thick accent band closing every section; gives the
// page the strong horizontal rhythm of a Bauhaus poster grid.
// ==================================================================
const ACCENTS = {
  red: 'bg-bauhaus-red',
  blue: 'bg-bauhaus-blue',
  yellow: 'bg-bauhaus-yellow',
  ink: 'bg-ink',
}

export default function SectionDivider({ accent = 'red', className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`h-2 w-full border-y-4 border-ink ${ACCENTS[accent]} ${className}`}
    />
  )
}
