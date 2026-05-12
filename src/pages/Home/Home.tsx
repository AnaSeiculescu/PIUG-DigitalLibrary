import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import { HelpModal, LibraryHero, ScrollControls } from './components'

export function Home() {
  const [showHelp, setShowHelp] = useState(false)

  return (
    <>
      <LibraryHero onOpenHelp={() => setShowHelp(true)} />

      <section className="page-section about-section py-4 py-md-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h1 className="h2 fw-bold home-section-title">Despre biblioteca</h1>
              <p className="lead mb-0 fw-bold home-section-text">
                Biblioteca Interactivă este un spațiu digital creat pentru cei
                care iubesc poveștile, liniștea și bucuria descoperirii unei
                cărți noi. Printr-o atmosferă caldă și prietenoasă, platforma
                invită utilizatorii să exploreze catalogul de cărți, să
                descopere recomandări speciale, să afle noutăți și să devină
                parte din comunitatea bibliotecii.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="page-section social-section py-3">
        <Container>
          <Row className="align-items-center gy-3">
            <Col md>
              <h2 className="h3 fw-bold home-section-title">Social media</h2>
              <p className="mb-0 home-section-text">Urmărește noutățile bibliotecii și evenimentele de lectură.</p>
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
