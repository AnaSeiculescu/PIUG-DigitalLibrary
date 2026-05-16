import type { ReactNode } from 'react'
import { Link } from 'react-router'

type HotspotLinkProps = {
  ariaLabel: string
  children: ReactNode
  className: string
  icon?: string
  to: string
}

export function HotspotLink({ ariaLabel, children, className, icon, to }: HotspotLinkProps) {
  return (
    <Link
      className={`btn retro-button hotspot-button align-items-center justify-content-between gap-3 px-3 py-2 shadow ${className}`}
      to={to}
      aria-label={ariaLabel}
    >
      {icon === 'book' && (
        <span aria-hidden="true" className="retro-icon book-icon">
          <span />
          <span />
        </span>
      )}
      {icon && icon !== 'book' && (
        <span aria-hidden="true" className="retro-icon">
          {icon}
        </span>
      )}
      {children}
      <span aria-hidden="true" className="fs-4">
        ›
      </span>
    </Link>
  )
}
