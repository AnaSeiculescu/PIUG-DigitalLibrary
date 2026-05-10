import { Alert, Button, Card, Col, Form, Row } from 'react-bootstrap'
import { useMemo, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router'

import { paths } from '../../routes/routes.config'

type CatalogItem = {
  title: string
  description: string
  category: string
}

const demoItems: CatalogItem[] = [
  { title: 'Fictiune', description: 'Romane si povesti moderne.', category: 'Fictiune' },
  { title: 'Stiinte', description: 'Stiinta pe intelesul tuturor.', category: 'Stiinte' },
  { title: 'Dezvoltare personala', description: 'Obiceiuri, productivitate, focus.', category: 'Dezvoltare' },
  { title: 'Istorie', description: 'Evenimente, biografii, epoci.', category: 'Istorie' },
]

export function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialQuery = String(searchParams.get('q') ?? '')
  const [query, setQuery] = useState(initialQuery)
  const navigate = useNavigate()

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q.length) return demoItems
    return demoItems.filter((item) =>
      [item.title, item.description, item.category].some((field) =>
        field.toLowerCase().includes(q),
      ),
    )
  }, [query])

  return (
    <div className="w-100">
      <Row className="align-items-end g-3 mb-3">
        <Col>
          <h1 className="mb-1">Catalog</h1>
          <div className="text-muted">Cauta si exploreaza (demo)</div>
        </Col>
        <Col xs={12} md="auto">
          <Form
            role="search"
            aria-label="Cautare in catalog"
            onSubmit={(event) => {
              event.preventDefault()
              const q = query.trim()
              setSearchParams((prev) => {
                const next = new URLSearchParams(prev)
                if (q.length) next.set('q', q)
                else next.delete('q')
                return next
              })
              document.getElementById('cautare')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <Row className="g-2">
              <Col xs={12} sm="auto">
                <Form.Control
                  value={query}
                  onChange={(e) => setQuery(e.currentTarget.value)}
                  placeholder="Cauta dupa titlu, categorie..."
                  aria-label="Cauta"
                />
              </Col>
              <Col xs={12} sm="auto">
                <Button type="submit" variant="success" className="w-100">
                  Cauta
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>

      <Card className="mb-3" id="cautare">
        <Card.Body>
          <Card.Title className="mb-2">Cautare (demo)</Card.Title>
          <Card.Text className="text-muted mb-0">
            Aceasta este o pagina placeholder. In proiectul final, aici poti extinde cu filtre
            (gen, autor, an) si rezultate reale.
          </Card.Text>
        </Card.Body>
      </Card>

      {!filtered.length ? (
        <Alert variant="warning">Nu am gasit rezultate pentru „{query}”.</Alert>
      ) : (
        <Row xs={1} md={2} className="g-3">
          {filtered.map((item) => (
            <Col key={item.title}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text className="text-muted">{item.description}</Card.Text>
                </Card.Body>
                <Card.Footer className="bg-white border-0 pt-0">
                  <span className="badge text-bg-secondary">{item.category}</span>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      <div className="d-flex gap-2 mt-4">
        <Button variant="outline-secondary" onClick={() => navigate(paths.home)}>
          Inapoi la Acasa
        </Button>
        <Button variant="outline-success" onClick={() => navigate(paths.inscriere)}>
          Inscriere
        </Button>
      </div>
    </div>
  )
}

