import { Button, Container } from 'react-bootstrap'

import libraryImage from '../../../assets/biblioteca-interactiva.png'
import { librarySceneActions } from '../librarySceneActions'
import { HotspotLink } from './HotspotLink'
import { LibraryMobileShortcuts } from './LibraryMobileShortcuts'

type LibraryHeroProps = {
  onOpenHelp: () => void
}

export function LibraryHero({ onOpenHelp }: LibraryHeroProps) {
  return (
    <section className="library-hero py-3 py-md-4" aria-label="Biblioteca interactiva">
      <Container fluid="lg">
        <div className="library-hero-mobile-stack d-flex flex-column gap-3 mx-auto">
          <div className="library-scene position-relative mx-auto overflow-hidden rounded shadow">
            <img
              alt="Interior de biblioteca cu rafturi, birou, fotoliu si panou de anunturi"
              className="library-photo d-block w-100 h-100"
              src={libraryImage}
            />

            {librarySceneActions.map((action) => {
              const hotspotIconProp =
                action.overlayIcon === undefined
                  ? {}
                  : action.overlayIcon === 'book'
                    ? { icon: 'book' as const }
                    : { icon: action.overlayIcon }

              return (
                <HotspotLink
                  key={action.to}
                  ariaLabel={action.ariaLabel}
                  className={`${action.desktopClass} library-hotspot-overlay d-none d-md-flex`}
                  to={action.to}
                  {...hotspotIconProp}
                >
                  <span className="text-start">
                    <span className="d-block fw-bold">{action.title}</span>
                    <small className="d-block">{action.subtitle}</small>
                  </span>
                </HotspotLink>
              )
            })}

            <Button
              aria-label="Ajutor"
              className="help-hotspot rounded-circle"
              onClick={onOpenHelp}
              variant="dark"
            >
              ?
            </Button>
          </div>

          <LibraryMobileShortcuts
            items={librarySceneActions.map((a) => ({
              to: a.to,
              accent: a.accent,
              ariaLabel: a.ariaLabel,
              title: a.title,
              subtitle: a.subtitle,
              icon: a.mobileIcon,
            }))}
          />
        </div>
      </Container>
    </section>
  )
}
