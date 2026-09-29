// ==================================================================
// Card — white panel, 4px black border, hard 8px shadow, and the
// signature Bauhaus corner decoration (circle / square / triangle).
// `accent` rotates through the primaries per card via a cycle index.
// ==================================================================
const SHAPES = ['circle', 'square', 'triangle']

const SHAPE_CLASS = {
  circle: 'rounded-full',
  square: 'rounded-none',
  triangle: 'shape-triangle',
}

const ACCENT_CLASS = ['bg-bauhaus-red', 'bg-bauhaus-blue', 'bg-bauhaus-yellow']

export default function Card({ accent = 0, className = '', children, ...props }) {
  const shape = SHAPES[accent % SHAPES.length]
  const color = ACCENT_CLASS[accent % ACCENT_CLASS.length]

  return (
    <div
      className={`relative border-4 border-ink bg-white shadow-bauhaus-xl transition-transform duration-300 ease-out hover:-translate-y-1 ${className}`}
      {...props}
    >
      {/* Corner geometric decoration */}
      <span
        aria-hidden="true"
        className={`absolute top-3 right-3 h-3 w-3 ${SHAPE_CLASS[shape]} ${color}`}
      />
      {children}
    </div>
  )
}
