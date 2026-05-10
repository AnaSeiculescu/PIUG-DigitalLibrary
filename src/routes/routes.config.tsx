import type { ReactElement } from 'react'

import { Home } from '../pages/Home'
import { Catalog } from '../pages/Catalog'
import { Inscriere } from '../pages/Inscriere'
import { Program } from '../pages/Program'
import { Recomandari } from '../pages/Recomandari'
import { SignIn } from '../pages/SignIn'

/** Reuse these in `<Link>`, `navigate()`, and tests so paths stay in one place. */
export const paths = {
  home: '/',
  catalog: '/catalog',
  recomandari: '/recomandari',
  program: '/program',
  inscriere: '/inscriere',
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
  { id: 'recomandari', path: paths.recomandari, element: <Recomandari /> },
  { id: 'program', path: paths.program, element: <Program /> },
  { id: 'inscriere', path: paths.inscriere, element: <Inscriere /> },
  { id: 'signIn', path: paths.signIn, element: <SignIn /> },
]
