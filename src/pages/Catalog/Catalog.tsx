import type { FormEvent } from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap'
import { useNavigate, useSearchParams } from 'react-router'

import { PageShell } from '../../components/PageShell'
import { paths } from '../../routes/routes.config'

const books = [
  'Enigma Otiliei',
  'Maitreyi',
  'Ion',
  'Baltagul',
  'Morometii',
  'Romanul adolescentului miop',
]

export function Catalog() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const searchTerm = searchParams.get('q')?.trim() ?? ''
  const normalizedSearchTerm = searchTerm.toLocaleLowerCase('ro-RO')
  const visibleBooks = normalizedSearchTerm
    ? books.filter((book) => book.toLocaleLowerCase('ro-RO').includes(normalizedSearchTerm))
    : books

  function handleCatalogSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const nextSearchTerm = String(formData.get('q') ?? '').trim()
    const query = nextSearchTerm ? `?q=${encodeURIComponent(nextSearchTerm)}#rezultate` : ''

    navigate(`${paths.catalog}${query}`)
  }

  return (
    <PageShell eyebrow="Colectia bibliotecii" title="Catalog">
      <Form className="mb-4" id="cautare" onSubmit={handleCatalogSearch} role="search">
        <Form.Label>Cauta in catalog</Form.Label>
        <Form.Control
          defaultValue={searchTerm}
          name="q"
          placeholder="Introdu titlul cartii"
          type="search"
        />
      </Form>
      <Row className="g-3" id="rezultate">
        {visibleBooks.map((book) => (
          <Col key={book} md={6}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body>
                <Card.Title>{book}</Card.Title>
                <Card.Text className="text-muted">
                  Disponibila pentru imprumut la Biblioteca Aurora.
                </Card.Text>
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
