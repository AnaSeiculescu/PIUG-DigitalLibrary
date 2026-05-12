import { Card, Carousel, Col, Row } from 'react-bootstrap'

import { PageShell } from '../../components/PageShell'

const recommendationSections = [
  {
    name: 'Cartea saptamanii',
    books: [
      { title: 'Micul Print', author: 'Antoine de Saint-Exupery', tone: 'gold' },
      { title: 'Romanul adolescentului miop', author: 'Mircea Eliade', tone: 'green' },
      { title: 'Toate panzele sus!', author: 'Radu Tudoran', tone: 'red' },
    ],
  },
  {
    name: 'Top carti',
    books: [
      { title: 'Enigma Otiliei', author: 'George Calinescu', tone: 'green' },
      { title: 'Baltagul', author: 'Mihail Sadoveanu', tone: 'red' },
      { title: 'Morometii', author: 'Marin Preda', tone: 'gold' },
    ],
  },
  {
    name: 'Recomandarea bibliotecarului',
    books: [
      { title: 'Ciresarii', author: 'Constantin Chirita', tone: 'red' },
      { title: 'La Medeleni', author: 'Ionel Teodoreanu', tone: 'gold' },
      { title: 'Ion', author: 'Liviu Rebreanu', tone: 'green' },
    ],
  },
]

export function Recommendations() {
  return (
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
    </PageShell>
  )
}
