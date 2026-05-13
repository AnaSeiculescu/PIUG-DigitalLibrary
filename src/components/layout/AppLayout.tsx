import type { ReactNode } from 'react'
import { Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router'

import { AppNavbar } from '../navigation'
import { paths } from '../../routes/routes.config'

type AppLayoutProps = {
  children: ReactNode
}

/**
 * App shell: full-height column with the main navigation at the top and
 * page content below.
 */
export function AppLayout({ children }: AppLayoutProps) {
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
          <Nav className="footer-links" aria-label="Linkuri footer">
            <Link to={paths.home}>Acasa</Link>
            <Link to={paths.catalog}>Catalog</Link>
            <Link to={paths.recommendations}>Recomandari</Link>
            <Link to={paths.program}>Program</Link>
            <Link to={paths.signIn}>Inscriere</Link>
          </Nav>
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
