import type { FormEvent } from 'react'
import { useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'

import { PageShell } from '../../components/PageShell'

type ContactForm = {
  email: string
  mesaj: string
  nume: string
  subiect: string
  telefon: string
}

const initialContactForm: ContactForm = {
  email: '',
  mesaj: '',
  nume: '',
  subiect: '',
  telefon: '',
}

export function Program() {
  const [contactForm, setContactForm] = useState<ContactForm>(initialContactForm)
  const [validated, setValidated] = useState(false)

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setValidated(true)

    if (!event.currentTarget.checkValidity()) {
      event.stopPropagation()
      return
    }

    const subject = contactForm.subiect || 'Mesaj pentru Biblioteca Aurora'
    const body = [
      `Nume: ${contactForm.nume}`,
      `Email: ${contactForm.email}`,
      `Telefon: ${contactForm.telefon || 'Nespecificat'}`,
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
              <Form noValidate validated={validated} onSubmit={handleContactSubmit}>
                <Row className="g-2">
                  <Col xs={12}>
                    <Form.Label>Nume</Form.Label>
                    <Form.Control
                      required
                      autoComplete="name"
                      minLength={3}
                      value={contactForm.nume}
                      onChange={(event) =>
                        setContactForm((prev) => ({ ...prev, nume: event.target.value }))
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      Introdu un nume de cel putin 3 caractere.
                    </Form.Control.Feedback>
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
                    <Form.Control.Feedback type="invalid">
                      Introdu o adresa de email valida.
                    </Form.Control.Feedback>
                  </Col>
                  <Col xs={12}>
                    <Form.Label>Telefon (optional)</Form.Label>
                    <Form.Control
                      autoComplete="tel"
                      pattern="^[0-9+()\s-]{7,20}$"
                      placeholder="021 000 0000"
                      value={contactForm.telefon}
                      onChange={(event) =>
                        setContactForm((prev) => ({ ...prev, telefon: event.target.value }))
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      Telefonul poate contine cifre, spatii, +, paranteze sau cratime.
                    </Form.Control.Feedback>
                  </Col>
                  <Col xs={12}>
                    <Form.Label>Subiect</Form.Label>
                    <Form.Control
                      maxLength={80}
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
                      minLength={10}
                      rows={4}
                      value={contactForm.mesaj}
                      onChange={(event) =>
                        setContactForm((prev) => ({ ...prev, mesaj: event.target.value }))
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      Mesajul trebuie sa aiba cel putin 10 caractere.
                    </Form.Control.Feedback>
                  </Col>
                </Row>
                <div className="d-flex gap-2 mt-3">
                  <Button type="submit" variant="success">
                    Trimite email
                  </Button>
                  <Button
                    type="button"
                    variant="outline-secondary"
                    onClick={() => {
                      setContactForm(initialContactForm)
                      setValidated(false)
                    }}
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
