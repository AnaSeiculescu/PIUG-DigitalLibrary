import { Card, Carousel, Col, Row } from 'react-bootstrap'

import { PageShell } from '../../components/PageShell'

const recommendationSections = [
  {
    name: 'Cartea saptamanii',
    books: [
      { title: 'Atomic Habits', author: 'James Clear', tone: 'gold' },
      { title: 'Breaking Dawn', author: 'Stephenie Meyer', tone: 'green' },
      { title: 'The Humans', author: 'Matt Haig', tone: 'red' },
    ],
  },
  {
    name: 'Top carti',
    books: [
      { title: 'Gone Girl', author: 'Gillian Flynn', tone: 'green' },
      { title: 'Fantoma de la opera', author: 'Gaston Leroux', tone: 'red' },
      { title: 'Sotia dintre noi', author: 'Greer Hendricks si Sarah Pekkanen', tone: 'gold' },
    ],
  },
  {
    name: 'Recomandarea bibliotecarului',
    books: [
      { title: 'Dune', author: 'Frank Herbert', tone: 'red' },
      { title: 'Colectionarul', author: 'John Fowles', tone: 'gold' },
      { title: 'Ferma animalelor', author: 'George Orwell', tone: 'green' },
    ],
  },
]

export function Recommendations() {
  return (
    <div className="recommendations-layout">
      <PageShell className="recommendations-page" eyebrow="Explorare" title="Recomandari">
        <Carousel className="recommendations-carousel" interval={6500} pause="hover">
          {recommendationSections.map((section) => (
            <Carousel.Item key={section.name}>
              <section className="recommendation-slide" aria-label={section.name}>
                <h2 className="recommendation-section-title">{section.name}</h2>
                <Row xs={1} md={3} className="g-3">
                  {section.books.map((book) => (
                    <Col key={`${section.name}-${book.title}`}>
                      <Card className="recommendation-card h-100 border-0">
                        <div className={`book-cover book-cover--${book.tone}`} aria-hidden="true">
                          <span className="book-cover__spine" />
                          <span className="book-cover__mark">BA</span>
                        </div>
                        <Card.Body>
                          <Card.Title>{book.title}</Card.Title>
                          <Card.Text>{book.author}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </section>
            </Carousel.Item>
          ))}
        </Carousel>

        <section className="recommendations-video-section" aria-label="Video recomandari">
          <div className="recommendations-video-frame">
            <iframe
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              src="https://www.youtube-nocookie.com/embed/ait2yZrRAds?start=144&end=174&autoplay=1&mute=1&playsinline=1&rel=0&controls=1"
              title="Video recomandari de lectura"
            />
          </div>
          <div className="recommendations-video-copy">
            <p>
              Unele carti se aleg cu mintea, altele cu inima. Recomandarile
              bibliotecarului sunt pentru serile in care o poveste iti poate tine
              companie si pentru cititorii care cauta o pagina in care sa se
              regaseasca.
            </p>
          </div>
        </section>
      </PageShell>
    </div>
  )
}
