/**
 * Route path constants only — must not import app pages/components.
 * Prevents circular imports (routes.config pulls in pages → pages must not bundle routes.config early).
 */
export const paths = {
  home: '/',
  catalog: '/catalog',
  bookDetails: '/catalog/:bookSlug',
  recommendations: '/recomandari',
  program: '/program',
  inscriere: '/sign-in',
  signIn: '/sign-in',
} as const
