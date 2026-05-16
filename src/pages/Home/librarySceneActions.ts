import { paths } from '../../routes/paths'

/**
 * Date pentru hotspot-uri de pe imagine (≥md) și scurtături sub poză pe mobil.
 * Principii PIUG (ex. piug8: navigare stratificată / „stack”; focalizarea sarcinilor pe mobil):
 * zona imagini ramane focala, acțiunile critice sunt stivuite sub ea, vizibile și atingibile.
 */

export type LibrarySceneAccent = 'shelf' | 'chair' | 'desk' | 'contact'

export type LibrarySceneAction = {
  to: string
  ariaLabel: string
  desktopClass: string
  accent: LibrarySceneAccent
  /** Lipsă = pe poză Desktop rămâne ca înainte, doar titlu/subtitlu și sageata */
  overlayIcon?: 'book' | string
  mobileIcon: 'book' | string
  title: string
  subtitle: string
}

export const librarySceneActions: readonly LibrarySceneAction[] = [
  {
    to: paths.catalog,
    ariaLabel: 'Catalog — Descopera colectia',
    desktopClass: 'shelf-link',
    accent: 'shelf',
    overlayIcon: 'book',
    mobileIcon: 'book',
    title: 'Catalog',
    subtitle: 'Descopera colectia',
  },
  {
    to: paths.recommendations,
    ariaLabel: 'Recomandari — Carti pentru tine',
    desktopClass: 'chair-link',
    accent: 'chair',
    overlayIcon: '★',
    mobileIcon: '★',
    title: 'Recomandari',
    subtitle: 'Carti pentru tine',
  },
  {
    to: paths.signIn,
    ariaLabel: 'Inscriere — Devino membru',
    desktopClass: 'desk-link',
    accent: 'desk',
    overlayIcon: '✎',
    mobileIcon: '✎',
    title: 'Inscriere',
    subtitle: 'Devino membru',
  },
  {
    to: `${paths.program}#contact`,
    ariaLabel: 'Contact biblioteca — Program si contact',
    desktopClass: 'contact-link',
    accent: 'contact',
    mobileIcon: '\u2732',
    title: 'Contact',
    subtitle: 'Program si contact',
  },
]
