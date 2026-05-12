import { Card, Col, Row } from 'react-bootstrap'

import { PageShell } from '../../components/PageShell'

const recommendations = [
  ['Pentru relaxare', 'Povesti scurte si romane usor de parcurs dupa o zi lunga.'],
  ['Pentru studiu', 'Carti de specialitate, eseuri si ghiduri pentru proiecte.'],
  ['Pentru inspiratie', 'Biografii si volume despre creativitate, arta si cultura.'],
]

export function Recommendations() {
  return (
    <PageShell eyebrow="Carti alese pentru tine" title="Recomandari">
      <Row className="g-3">
        {recommendations.map(([title, text]) => (
          <Col key={title} md={4}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text className="text-muted">{text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </PageShell>
  )
}
