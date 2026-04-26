import { Container } from 'react-bootstrap'
import type { ReactNode } from 'react'

import { AppNavbar } from '../navigation'

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
      <main className="flex-grow-1 d-flex flex-column" id="app-main">
        <Container className="py-4 flex-grow-1 d-flex align-items-center justify-content-center">
          {children}
        </Container>
      </main>
    </div>
  )
}
