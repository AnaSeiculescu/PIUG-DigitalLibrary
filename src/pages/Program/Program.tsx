import { Button, Card, ListGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router'

import { paths } from '../../routes/routes.config'

export function Program() {
  const navigate = useNavigate()

  return (
    <div className="w-100">
      <h1 className="mb-1">Program</h1>
      <div className="text-muted mb-3">Orar si informatii utile</div>

      <Card className="mb-3">
        <Card.Body>
          <Card.Title className="mb-3">Orar (exemplu)</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item className="d-flex justify-content-between">
              <strong>Luni - Vineri</strong>
              <span>09:00 - 18:00</span>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between">
              <strong>Sambata</strong>
              <span>10:00 - 14:00</span>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between">
              <strong>Duminica</strong>
              <span>Inchis</span>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <Card.Title className="mb-2">Reguli rapide</Card.Title>
          <ol className="mb-0">
            <li>Imprumut: 14 zile (cu posibilitate de prelungire).</li>
            <li>Returnare: la receptie sau cutia de returnari.</li>
            <li>Inscriere: gratuita pentru elevi/studenti.</li>
          </ol>
        </Card.Body>
      </Card>

      <div className="d-flex gap-2 mt-4">
        <Button variant="success" onClick={() => navigate(paths.inscriere)}>
          Inscriere
        </Button>
        <Button variant="outline-secondary" onClick={() => navigate(paths.home)}>
          Acasa
        </Button>
      </div>
    </div>
  )
}

