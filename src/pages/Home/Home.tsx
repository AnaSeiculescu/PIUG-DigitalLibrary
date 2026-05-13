import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import { HelpModal, LibraryHero, ScrollControls } from './components'

export function Home() {
  const [showHelp, setShowHelp] = useState(false)

  return (
    <>
      <LibraryHero onOpenHelp={() => setShowHelp(true)} />

      <section className="page-section home-info-section py-4 py-md-5">
        <Container>
          <Row className="align-items-start justify-content-center gy-4 gx-lg-5">
            <Col lg={7}>
              <h1 className="h2 fw-bold home-section-title">Despre biblioteca</h1>
              <p className="lead mb-0 fw-bold home-section-text about-copy">
                Biblioteca Interactivă este un spațiu digital creat pentru cei
                care iubesc poveștile, liniștea și bucuria descoperirii unei
                cărți noi. Printr-o atmosferă caldă și prietenoasă, platforma
                invită utilizatorii să exploreze catalogul de cărți, să
                descopere recomandări speciale, să afle noutăți și să devină
                parte din comunitatea bibliotecii.
              </p>
            </Col>
            <Col className="social-column" lg={3} md={8}>
              <h2 className="h3 fw-bold home-section-title">Social media</h2>
              <p className="mb-0 home-section-text">Urmărește noutățile bibliotecii și evenimentele de lectură.</p>
              <div className="d-flex gap-2 mt-3" aria-label="Linkuri social media">
                <a
                  aria-label="Facebook"
                  className="btn rounded-circle social-link social-link-facebook"
                  href="https://facebook.com"
                >
                  <span className="visually-hidden">Facebook</span>
                </a>
                <a
                  aria-label="Instagram"
                  className="btn rounded-circle social-link social-link-instagram"
                  href="https://instagram.com"
                >
                  <span className="visually-hidden">Instagram</span>
                </a>
                <a
                  aria-label="YouTube"
                  className="btn rounded-circle social-link social-link-youtube"
                  href="https://youtube.com"
                >
                  <span className="visually-hidden">YouTube</span>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <ScrollControls />
      <HelpModal onHide={() => setShowHelp(false)} show={showHelp} />
    </>
  )
}
