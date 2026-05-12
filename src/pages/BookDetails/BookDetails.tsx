import { useState } from 'react'
import { Alert, Badge, Button, Card, Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router'

import { PageShell } from '../../components/PageShell'
import { books, getBookPath } from '../../data/books'
import { paths } from '../../routes/routes.config'

export function BookDetails() {
  const { bookSlug } = useParams()
  const [reserved, setReserved] = useState(false)
  const book = books.find((item) => item.slug === bookSlug)

  if (!book) {
    return (
      <PageShell eyebrow="Catalog" title="Cartea nu a fost gasita">
        <Card className="border-0 shadow-sm">
          <Card.Body>
            <Card.Text className="text-muted">
              Titlul cautat nu exista in catalogul Bibliotecii Aurora.
            </Card.Text>
            <Link className="btn btn-success" to={paths.catalog}>
              Inapoi la catalog
            </Link>
          </Card.Body>
        </Card>
      </PageShell>
    )
  }

  const similarBooks = books
    .filter(
      (item) =>
        item.slug !== book.slug && (item.category === book.category || item.author === book.author),
    )
    .slice(0, 3)

  return (
    <PageShell className="book-details-page" eyebrow="Detalii carte" title={book.title}>
      <Row className="g-4 align-items-start">
        <Col md={5}>
          <div className={`book-detail-cover book-cover--${book.tone}`} aria-label={`Coperta ${book.title}`}>
            <span className="book-cover__spine" />
            <span className="book-detail-cover__title">{book.title}</span>
            <span className="book-detail-cover__author">{book.author}</span>
          </div>
        </Col>
        <Col md={7}>
          <Card className="border-0 shadow-sm">
            <Card.Body>
              <div className="d-flex flex-wrap gap-2 mb-3">
                <Badge bg="success">{book.category}</Badge>
                <Badge bg={book.isAvailable ? 'primary' : 'secondary'}>
                  {book.isAvailable ? 'Disponibila' : 'Indisponibila'}
                </Badge>
              </div>
              <h2 className="h4">Autor: {book.author}</h2>
              <p className="mb-4 text-muted">{book.description}</p>

              {reserved ? (
                <Alert className="mb-3" variant="success">
                  Rezervarea a fost inregistrata pentru {book.title}.
                </Alert>
              ) : null}

              <Button
                disabled={!book.isAvailable}
                onClick={() => setReserved(true)}
                variant="success"
              >
                Rezerva
              </Button>
              {!book.isAvailable ? (
                <div className="mt-2 text-muted">Cartea nu poate fi rezervata momentan.</div>
              ) : null}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <section className="mt-4">
        <h2 className="h4 mb-3">Recomandari similare</h2>
        <Row className="g-3">
          {similarBooks.map((similarBook) => (
            <Col key={similarBook.slug} md={4}>
              <Card className="catalog-card h-100 border-0 shadow-sm">
                <Card.Body>
                  <Card.Title>{similarBook.title}</Card.Title>
                  <Card.Text className="text-muted mb-0">
                    {similarBook.author} · {similarBook.category}
                  </Card.Text>
                  <Link className="stretched-link" to={getBookPath(similarBook.slug)}>
                    Vezi detalii
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </PageShell>
  )
}
