// ==================================================================
// Badge — small uppercase tag with 2px black border.
// Accent cycles red/blue/yellow so grouped badges never repeat.
// ==================================================================
const ACCENTS = {
  red: 'bg-bauhaus-red text-white',
  blue: 'bg-bauhaus-blue text-white',
  yellow: 'bg-bauhaus-yellow text-ink',
  outline: 'bg-white text-ink',
}

export default function Badge({ accent = 'outline', className = '', children }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 border-2 border-ink px-3 py-1 text-xs font-bold uppercase tracking-widest ${ACCENTS[accent]} ${className}`}
    >
      {children}
    </span>
  )
}
