import type { ReactElement } from 'react'

import { Catalog } from '../pages/Catalog'
import { Home } from '../pages/Home'
import { Program } from '../pages/Program'
import { Recommendations } from '../pages/Recommendations'
import { SignIn } from '../pages/SignIn'

/** Reuse these in `<Link>`, `navigate()`, and tests so paths stay in one place. */
export const paths = {
  home: '/',
  catalog: '/catalog',
  recommendations: '/recomandari',
  program: '/program',
  inscriere: '/sign-in',
  signIn: '/sign-in',
} as const

/**
 * Central list of app routes. To add a page:
 * 1. Add a new entry in `paths` above.
 * 2. Create a component under `src/pages/<Name>/`
 * 3. Import it here and append one `AppRouteConfig` using `paths`.
 */
export type AppRouteConfig = {
  /** Unique key (nav labels, `Route` keys, future metadata). */
  id: string
  path: string
  element: ReactElement
}

export const appRoutes: AppRouteConfig[] = [
  { id: 'home', path: paths.home, element: <Home /> },
  { id: 'catalog', path: paths.catalog, element: <Catalog /> },
  { id: 'recommendations', path: paths.recommendations, element: <Recommendations /> },
  { id: 'program', path: paths.program, element: <Program /> },
  { id: 'signIn', path: paths.signIn, element: <SignIn /> },
]
