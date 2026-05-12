import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import { HelpModal, LibraryHero, ScrollControls } from './components'

export function Home() {
  const [showHelp, setShowHelp] = useState(false)

  return (
    <>
      <LibraryHero onOpenHelp={() => setShowHelp(true)} />

      <section className="page-section py-4 py-md-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h1 className="h2 fw-bold text-white">Despre biblioteca</h1>
              <p className="lead mb-0 text-white">
                Biblioteca Aurora este un spatiu modern pentru lectura, studiu si
                descoperire. Pagina de acasa foloseste repere vizuale familiare
                pentru ca vizitatorii sa inteleaga rapid unde pot merge si ce
                actiune pot face.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="page-section py-4 py-md-5">
        <Container>
          <Row className="align-items-center gy-3">
            <Col md>
              <h2 className="h3 fw-bold text-white">Social media</h2>
              <p className="mb-0 text-white">Urmareste noutatile bibliotecii si evenimentele de lectura.</p>
            </Col>
            <Col md="auto">
              <div className="d-flex gap-2" aria-label="Linkuri social media">
                <a className="btn btn-dark rounded-circle social-link" href="https://facebook.com">
                  f
                </a>
                <a className="btn btn-dark rounded-circle social-link" href="https://instagram.com">
                  ig
                </a>
                <a className="btn btn-dark rounded-circle social-link" href="https://youtube.com">
                  yt
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <footer className="footer-warm-gray py-3 text-center">
        <Container>
          <small>&copy; 2026 Biblioteca Aurora. Site demonstrativ pentru proiectarea interfetelor.</small>
        </Container>
      </footer>

      <ScrollControls />
      <HelpModal onHide={() => setShowHelp(false)} show={showHelp} />
    </>
  )
}
