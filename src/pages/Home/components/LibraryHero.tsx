import { Button, Container } from 'react-bootstrap'

import libraryImage from '../../../assets/biblioteca-interactiva.png'
import { paths } from '../../../routes/routes.config'
import { HotspotLink } from './HotspotLink'

type LibraryHeroProps = {
  onOpenHelp: () => void
}

export function LibraryHero({ onOpenHelp }: LibraryHeroProps) {
  return (
    <section className="library-hero py-3 py-md-4" aria-label="Biblioteca interactiva">
      <Container fluid="lg">
        <div className="library-scene position-relative mx-auto overflow-hidden rounded shadow">
          <img
            alt="Interior de biblioteca cu rafturi, birou, fotoliu si panou de anunturi"
            className="library-photo d-block w-100 h-100"
            src={libraryImage}
          />

          <HotspotLink ariaLabel="Catalog" className="shelf-link" icon="book" to={paths.catalog}>
            <span className="text-start">
              <span className="d-block fw-bold">Catalog</span>
              <small className="d-block">Descopera colectia</small>
            </span>
          </HotspotLink>
          <HotspotLink
            ariaLabel="Recomandari"
            className="chair-link"
            icon="★"
            to={paths.recommendations}
          >
            <span className="text-start">
              <span className="d-block fw-bold">Recomandari</span>
              <small className="d-block">Carti pentru tine</small>
            </span>
          </HotspotLink>
          <HotspotLink ariaLabel="Inscriere" className="desk-link" icon="✎" to={paths.signIn}>
            <span className="text-start">
              <span className="d-block fw-bold">Inscriere</span>
              <small className="d-block">Devino membru</small>
            </span>
          </HotspotLink>
          <HotspotLink
            ariaLabel="Contact biblioteca"
            className="contact-link"
            to={`${paths.program}#contact`}
          >
            <span className="text-start">
              <span className="d-block fw-bold">Contact</span>
            </span>
          </HotspotLink>

          <Button
            aria-label="Ajutor"
            className="help-hotspot rounded-circle"
            onClick={onOpenHelp}
            variant="dark"
          >
            ?
          </Button>
        </div>
      </Container>
    </section>
  )
}
