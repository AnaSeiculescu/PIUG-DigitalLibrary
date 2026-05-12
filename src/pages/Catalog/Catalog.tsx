import { Card, Col, Form, Row } from 'react-bootstrap'

import { PageShell } from '../../components/PageShell'

const books = [
  'Enigma Otiliei',
  'Maitreyi',
  'Ion',
  'Baltagul',
  'Morometii',
  'Romanul adolescentului miop',
]

export function Catalog() {
  return (
    <PageShell eyebrow="Colectia bibliotecii" title="Catalog">
      <Form className="mb-4" id="cautare" role="search">
        <Form.Label>Cauta in catalog</Form.Label>
        <Form.Control placeholder="Introdu titlul cartii" type="search" />
      </Form>
      <Row className="g-3">
        {books.map((book) => (
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
      </Row>
    </PageShell>
  )
}
