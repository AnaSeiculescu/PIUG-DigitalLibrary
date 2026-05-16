import { Link } from 'react-router'

import type { LibrarySceneAccent } from '../librarySceneActions'

export type MobileShortcutItem = {
  to: string
  accent: LibrarySceneAccent
  ariaLabel: string
  title: string
  subtitle: string
  icon: 'book' | string
}

type LibraryMobileShortcutsProps = {
  items: MobileShortcutItem[]
}

/** Acces rapid stivuit sub imagine (înălțime unică pentru atingerea confortabilă pe mobil). */

export function LibraryMobileShortcuts({ items }: LibraryMobileShortcutsProps) {
  return (
    <nav
      aria-label="Acces rapid in biblioteca"
      className="library-mobile-quicklinks d-md-none rounded overflow-hidden shadow-sm"
    >
      {items.map((item) => (
        <Link
          key={`${item.to}-${item.accent}`}
          className={`library-mobile-quicklink library-mobile-quicklink--${item.accent} text-decoration-none d-flex`}
          to={item.to}
          aria-label={item.ariaLabel}
        >
          <span className="library-mobile-quicklink__glyph" aria-hidden="true">
            {item.icon === 'book' ? (
              <span className="retro-icon book-icon">
                <span />
                <span />
              </span>
            ) : (
              <span className="retro-icon">{item.icon}</span>
            )}
          </span>
          <span className="library-mobile-quicklink__body text-start flex-grow-1 min-w-0 py-2 pe-2 ps-2">
            <span className="library-mobile-quicklink__title d-block">{item.title}</span>
            <span className="library-mobile-quicklink__subtitle d-block">{item.subtitle}</span>
          </span>
          <span className="library-mobile-quicklink__chevron px-3 align-self-stretch d-flex align-items-center" aria-hidden="true">
            ›
          </span>
        </Link>
      ))}
    </nav>
  )
}
