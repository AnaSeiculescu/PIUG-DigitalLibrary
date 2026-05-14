import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import readingBooksImage from '../../assets/reading-books.jpg'
import { HelpModal, LibraryHero, ScrollControls } from './components'

export function Home() {
  const [showHelp, setShowHelp] = useState(false)

  return (
    <>
      <LibraryHero onOpenHelp={() => setShowHelp(true)} />

      <section className="page-section home-info-section py-4 py-md-5">
        <Container>
          <Row className="align-items-start justify-content-center gy-4 gx-lg-5">
            <Col lg={6}>
              <h1 className="h2 fw-bold home-section-title">Despre biblioteca</h1>
              <p className="lead mb-0 fw-bold home-section-text about-copy">
                Biblioteca Interactiva este un spatiu digital creat pentru cei care iubesc
                povestile, linistea si bucuria descoperirii unei carti noi. Printr-o
                atmosfera calda si prietenoasa, platforma invita utilizatorii sa exploreze
                catalogul de carti, sa descopere recomandari speciale, sa afle noutati si
                sa devina parte din comunitatea bibliotecii.
              </p>
            </Col>
            <Col className="home-reading-column" lg={4} md={8}>
              <img
                alt="Persoana relaxata, acoperita de carti"
                className="home-reading-image"
                src={readingBooksImage}
              />
            </Col>
          </Row>
          <section className="how-it-works-section mt-4 pt-4">
            <h2 className="h3 fw-bold home-section-title">Cum functioneaza</h2>
            <Row xs={1} md={3} className="g-3 mt-1">
              <Col>
                <div className="how-it-works-item">
                  <span>1</span>
                  <h3>Alege o carte</h3>
                  <p>Foloseste catalogul sau cautarea pentru a gasi titlul dorit.</p>
                </div>
              </Col>
              <Col>
                <div className="how-it-works-item">
                  <span>2</span>
                  <h3>Verifica detaliile</h3>
                  <p>Consulta autorul, categoria, descrierea si disponibilitatea.</p>
                </div>
              </Col>
              <Col>
                <div className="how-it-works-item">
                  <span>3</span>
                  <h3>Rezerva sau inscrie-te</h3>
                  <p>Rezerva volumul disponibil sau completeaza formularul de membru.</p>
                </div>
              </Col>
            </Row>
          </section>
        </Container>
      </section>

      <ScrollControls />
      <HelpModal onHide={() => setShowHelp(false)} show={showHelp} />
    </>
  )
}
