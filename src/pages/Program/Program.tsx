import type { FormEvent } from 'react'
import { useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'

import { PageShell } from '../../components/PageShell'

type ContactForm = {
  email: string
  mesaj: string
  nume: string
  subiect: string
}

const initialContactForm: ContactForm = {
  email: '',
  mesaj: '',
  nume: '',
  subiect: '',
}

export function Program() {
  const [contactForm, setContactForm] = useState<ContactForm>(initialContactForm)

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const subject = contactForm.subiect || 'Mesaj pentru Biblioteca Aurora'
    const body = [
      `Nume: ${contactForm.nume}`,
      `Email: ${contactForm.email}`,
      '',
      contactForm.mesaj,
    ].join('\n')

    window.location.href = `mailto:biblioteca@aurora.ro?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <PageShell className="program-contact-page" eyebrow="Informatii utile" title="Program si contact">
      <Row className="g-3">
        <Col md={6}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body>
              <Card.Title>Programul bibliotecii</Card.Title>
              <Card.Text className="program-contact-text mb-0">
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
              <Card.Text className="program-contact-text">
                Email: biblioteca@aurora.ro
                <br />
                Telefon: 021 000 0000
              </Card.Text>
              <Form onSubmit={handleContactSubmit}>
                <Row className="g-2">
                  <Col xs={12}>
                    <Form.Label>Nume</Form.Label>
                    <Form.Control
                      required
                      autoComplete="name"
                      value={contactForm.nume}
                      onChange={(event) =>
                        setContactForm((prev) => ({ ...prev, nume: event.target.value }))
                      }
                    />
                  </Col>
                  <Col xs={12}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      required
                      autoComplete="email"
                      type="email"
                      value={contactForm.email}
                      onChange={(event) =>
                        setContactForm((prev) => ({ ...prev, email: event.target.value }))
                      }
                    />
                  </Col>
                  <Col xs={12}>
                    <Form.Label>Subiect</Form.Label>
                    <Form.Control
                      value={contactForm.subiect}
                      onChange={(event) =>
                        setContactForm((prev) => ({ ...prev, subiect: event.target.value }))
                      }
                    />
                  </Col>
                  <Col xs={12}>
                    <Form.Label>Mesaj</Form.Label>
                    <Form.Control
                      required
                      as="textarea"
                      rows={4}
                      value={contactForm.mesaj}
                      onChange={(event) =>
                        setContactForm((prev) => ({ ...prev, mesaj: event.target.value }))
                      }
                    />
                  </Col>
                </Row>
                <div className="d-flex gap-2 mt-3">
                  <Button type="submit" variant="success">
                    Trimite email
                  </Button>
                  <Button
                    type="button"
                    variant="outline-secondary"
                    onClick={() => setContactForm(initialContactForm)}
                  >
                    Reseteaza
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </PageShell>
  )
}
