import type { FormEvent } from 'react'
import { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'

import { PageShell } from '../../components/PageShell'

export function SignIn() {
  const [validated, setValidated] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setValidated(true)

    if (!event.currentTarget.checkValidity()) {
      event.stopPropagation()
    }
  }

  return (
    <PageShell eyebrow="Devino membru" title="Inscriere">
      <Card className="border-0 shadow-sm">
        <Card.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="fullName">
              <Form.Label>Nume complet</Form.Label>
              <Form.Control required minLength={3} autoComplete="name" placeholder="Numele tau" />
              <Form.Control.Feedback type="invalid">
                Introdu un nume de cel putin 3 caractere.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                autoComplete="email"
                placeholder="nume@email.com"
                type="email"
              />
              <Form.Control.Feedback type="invalid">
                Introdu o adresa de email valida.
              </Form.Control.Feedback>
            </Form.Group>
            <Button type="submit" variant="success">
              Trimite cererea
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </PageShell>
  )
}
