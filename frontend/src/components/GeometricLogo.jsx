// ==================================================================
// GeometricLogo — Kylle's brand mark: red circle + yellow square +
// blue triangle overlapping, outlined in ink. Pure SVG so it scales
// crisply in the navbar and shrinks to the footer mark unchanged.
// ==================================================================
export default function GeometricLogo({ className = 'h-10 w-10', title }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label={title ?? 'Kylle logo'}
    >
      {/* Red circle */}
      <circle cx="30" cy="42" r="24" fill="#D02020" stroke="#121212" strokeWidth="5" />
      {/* Yellow square */}
      <rect x="48" y="18" width="46" height="46" fill="#F0C020" stroke="#121212" strokeWidth="5" />
      {/* Blue triangle overlapping bottom-center */}
      <polygon points="22,92 78,92 50,44" fill="#1040C0" stroke="#121212" strokeWidth="5" />
    </svg>
  )
}
