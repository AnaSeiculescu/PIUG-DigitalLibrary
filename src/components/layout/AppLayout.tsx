import type { ReactNode } from 'react'
import { useLayoutEffect, useRef } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router'

import { AppNavbar } from '../navigation'
import { paths } from '../../routes/routes.config'

import { syncFooterLinkLineStarts } from './syncFooterLinkLineStarts'

type AppLayoutProps = {
  children: ReactNode
}

/**
 * App shell: full-height column with the main navigation at the top and
 * page content below.
 */

export function AppLayout({ children }: AppLayoutProps) {
  const footerLinksRef = useRef<HTMLElement | null>(null)

  useLayoutEffect(() => {
    const nav = footerLinksRef.current
    if (!nav) {
      return undefined
    }

    const schedule = () => {
      syncFooterLinkLineStarts(nav)
    }

    schedule()

    const ro = new ResizeObserver(() => {
      queueMicrotask(schedule)
    })
    ro.observe(nav)

    const onResizeWindow = () => {
      queueMicrotask(schedule)
    }
    window.addEventListener('resize', onResizeWindow)

    return () => {
      ro.disconnect()
      window.removeEventListener('resize', onResizeWindow)
      for (const a of [...nav.querySelectorAll<HTMLAnchorElement>(':scope > a')]) {
        a.classList.remove('footer-link-line-start')
      }
    }
  }, [])

  return (
    <div className="d-flex flex-column min-vh-100">
      <AppNavbar />
      <main className="flex-grow-1" id="app-main">
        {children}
      </main>
      <footer className="footer-warm-gray py-3">
        <Container className="footer-content">
          <div>
            <div className="fw-bold">Biblioteca Aurora</div>
            <small>&copy; 2026 Site demonstrativ pentru proiectarea interfetelor.</small>
          </div>
          <nav ref={footerLinksRef} aria-label="Linkuri footer" className="footer-links">
            <Link to={paths.home}>Acasa</Link>
            <Link to={paths.catalog}>Catalog</Link>
            <Link to={paths.recommendations}>Recomandari</Link>
            <Link to={paths.program}>Program si contact</Link>
            <Link to={paths.signIn}>Inscriere</Link>
          </nav>
          <div className="footer-social" aria-label="Social media">
            <a aria-label="Facebook" className="btn rounded-circle social-link social-link-facebook" href="https://facebook.com">
              <span className="visually-hidden">Facebook</span>
            </a>
            <a aria-label="Instagram" className="btn rounded-circle social-link social-link-instagram" href="https://instagram.com">
              <span className="visually-hidden">Instagram</span>
            </a>
            <a aria-label="YouTube" className="btn rounded-circle social-link social-link-youtube" href="https://youtube.com">
              <span className="visually-hidden">YouTube</span>
            </a>
          </div>
        </Container>
      </footer>
    </div>
  )
}
