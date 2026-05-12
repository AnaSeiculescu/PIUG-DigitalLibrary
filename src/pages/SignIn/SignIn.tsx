import { Button, Card, Form } from 'react-bootstrap'

import { PageShell } from '../../components/PageShell'

export function SignIn() {
  return (
    <PageShell eyebrow="Devino membru" title="Inscriere">
      <Card className="border-0 shadow-sm">
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="fullName">
              <Form.Label>Nume complet</Form.Label>
              <Form.Control placeholder="Numele tau" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control placeholder="nume@email.com" type="email" />
            </Form.Group>
            <Button variant="success">Trimite cererea</Button>
          </Form>
        </Card.Body>
      </Card>
    </PageShell>
  )
}
