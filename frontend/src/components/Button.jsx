// ==================================================================
// Button — Bauhaus variants (primary/secondary/yellow/outline/ghost)
// Shapes: square (default) or pill. Press effect via press-effect util.
// Renders as <a> when `href` is passed, otherwise <button>.
// ==================================================================
const VARIANTS = {
  primary: 'bg-bauhaus-red text-white hover:bg-bauhaus-red/90 border-2 border-ink shadow-bauhaus-md',
  secondary: 'bg-bauhaus-blue text-white hover:bg-bauhaus-blue/90 border-2 border-ink shadow-bauhaus-md',
  yellow: 'bg-bauhaus-yellow text-ink hover:bg-bauhaus-yellow/90 border-2 border-ink shadow-bauhaus-md',
  outline: 'bg-white text-ink hover:bg-bauhaus-muted border-2 border-ink shadow-bauhaus-md',
  ghost: 'border-none text-ink hover:bg-bauhaus-muted',
}

const SHAPES = {
  square: 'rounded-none',
  pill: 'rounded-full',
}

const SIZES = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({
  variant = 'primary',
  shape = 'square',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  const Tag = props.href ? 'a' : 'button'

  return (
    <Tag
      className={`inline-flex cursor-pointer items-center justify-center gap-2 font-bold uppercase tracking-wider press-effect duration-200 ease-out ${VARIANTS[variant]} ${SHAPES[shape]} ${SIZES[size]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
