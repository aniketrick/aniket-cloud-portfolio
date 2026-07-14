import { ArrowUpRight } from 'lucide-react'

interface ContactButtonProps {
  className?: string
  label?: string
  href?: string
  download?: boolean
  secondary?: boolean
}

export default function ContactButton({
  className = '',
  label = 'Contact me',
  href = 'mailto:aniket07chakraborty@gmail.com',
  download = false,
  secondary = false,
}: ContactButtonProps) {
  return (
    <a
      href={href}
      download={download || undefined}
      className={`button ${secondary ? 'button-secondary' : 'button-primary'} ${className}`}
    >
      <span>{label}</span>
      <ArrowUpRight size={18} strokeWidth={2} aria-hidden="true" />
    </a>
  )
}
