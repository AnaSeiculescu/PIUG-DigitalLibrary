import type { FormEvent } from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap'
import { Link, useNavigate, useSearchParams } from 'react-router'

import { PageShell } from '../../components/PageShell'
import { books, getBookInitials, getBookPath } from '../../data/books'
import { paths } from '../../routes/routes.config'

export function Catalog() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const searchTerm = searchParams.get('q')?.trim() ?? ''
  const normalizedSearchTerm = searchTerm.toLocaleLowerCase('ro-RO')
  const visibleBooks = normalizedSearchTerm
    ? books.filter((book) => book.title.toLocaleLowerCase('ro-RO').includes(normalizedSearchTerm))
    : books

  function handleCatalogSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const nextSearchTerm = String(formData.get('q') ?? '').trim()
    const query = nextSearchTerm ? `?q=${encodeURIComponent(nextSearchTerm)}#rezultate` : ''

    navigate(`${paths.catalog}${query}`)
  }

  return (
    <PageShell className="catalog-page" eyebrow="Colectia bibliotecii" title="Catalog">
      <Form className="mb-4" id="cautare" onSubmit={handleCatalogSearch} role="search">
        <Form.Label>Cauta in catalog</Form.Label>
        <Form.Control
          defaultValue={searchTerm}
          name="q"
          placeholder="Introdu titlul cartii"
          type="search"
        />
      </Form>
      <Row xs={2} sm={3} lg={4} xl={5} className="g-2" id="rezultate">
        {visibleBooks.map((book) => (
          <Col key={book.slug}>
            <Card className="catalog-card h-100 border-0 shadow-sm">
              <div className={`catalog-card-cover book-cover--${book.tone}`}>
                <span className="book-cover__spine" />
                <span className="catalog-card-cover__initials">{getBookInitials(book.title)}</span>
              </div>
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text className="text-muted mb-0">{book.description}</Card.Text>
                <Link className="stretched-link" to={getBookPath(book.slug)}>
                  Vezi detalii
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {visibleBooks.length === 0 && (
          <Col>
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <Card.Title>Nu am gasit cartea cautata</Card.Title>
                <Card.Text className="text-muted mb-0">
                  Incearca alt titlu din catalogul Bibliotecii Aurora.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
    </PageShell>
  )
}
