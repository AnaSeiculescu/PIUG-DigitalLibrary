import { Card, Col, Row } from 'react-bootstrap'

import { PageShell } from '../../components/PageShell'

export function Program() {
  return (
    <PageShell eyebrow="Informatii utile" title="Program si contact">
      <Row className="g-3">
        <Col md={6}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body>
              <Card.Title>Programul bibliotecii</Card.Title>
              <Card.Text className="text-muted mb-0">
                Luni - Vineri: 09:00 - 18:00
                <br />
                Sambata: 10:00 - 14:00
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="h-100 border-0 shadow-sm" id="contact">
            <Card.Body>
              <Card.Title>Contact</Card.Title>
              <Card.Text className="text-muted mb-0">
                Email: biblioteca@aurora.ro
                <br />
                Telefon: 021 000 0000
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </PageShell>
  )
}
