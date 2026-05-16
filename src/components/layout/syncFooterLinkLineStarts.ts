/** Toleranta pentru diferenta de baseline intre articole pe acelasi rand (pixels). */

const ROW_TOP_TOLERANCE_PX = 6

/**
 * Cand linkurile din footer sunt pe mai multe randuri (flex-wrap), primul link de pe randul nou
 * nu trebuie sa aiba separator/border din stanga. Marcheaza acel articol cu clasa pentru CSS.
 */

export function syncFooterLinkLineStarts(nav: HTMLElement) {
  const links = [...nav.querySelectorAll<HTMLAnchorElement>(':scope > a')]

  for (const link of links) {
    link.classList.remove('footer-link-line-start')
  }

  for (let index = 1; index < links.length; index += 1) {
    const current = links[index]
    const prev = links[index - 1]
    const currTop = current.getBoundingClientRect().top
    const prevTop = prev.getBoundingClientRect().top
    if (Math.abs(currTop - prevTop) > ROW_TOP_TOLERANCE_PX) {
      current.classList.add('footer-link-line-start')
    }
  }
}
