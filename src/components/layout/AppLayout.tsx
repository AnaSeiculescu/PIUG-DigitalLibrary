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
      <main className="flex-grow-1" id="app-main">
        {children}
      </main>
    </div>
  )
}
