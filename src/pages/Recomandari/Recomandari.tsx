import { Button, Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router'

import { paths } from '../../routes/routes.config'

const recommendations = [
  {
    title: 'Fictiune',
    description: 'Romane cu ritm rapid si personaje memorabile.',
  },
  {
    title: 'Non-fictiune',
    description: 'Stiinta pe intelesul tuturor.',
  },
  {
    title: 'Dezvoltare personala',
    description: 'Obiceiuri, productivitate, focus.',
  },
]

export function Recomandari() {
  const navigate = useNavigate()

  return (
    <div className="w-100">
      <h1 className="mb-1">Recomandari</h1>
      <div className="text-muted mb-3">Descopera titluri care merita citite (demo)</div>

      <Row xs={1} md={3} className="g-3">
        {recommendations.map((rec) => (
          <Col key={rec.title}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{rec.title}</Card.Title>
                <Card.Text className="text-muted mb-0">{rec.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Card className="mt-3">
        <Card.Body>
          <Card.Text className="mb-0 text-muted">
            In proiectul final poti inlocui aceste carduri cu o lista de carti, descrieri si
            link-uri catre detalii.
          </Card.Text>
        </Card.Body>
      </Card>

      <div className="d-flex gap-2 mt-4">
        <Button variant="success" onClick={() => navigate(paths.catalog)}>
          Cauta in catalog
        </Button>
        <Button variant="outline-success" onClick={() => navigate(paths.inscriere)}>
          Inscrie-te
        </Button>
      </div>
    </div>
  )
}

