import type { FormEvent } from 'react'
import { useState } from 'react'
import { Accordion, Alert, Button, Card, Col, Form, Row, Table } from 'react-bootstrap'

import { PageShell } from '../../components/PageShell'
import { HelpModal } from '../../components/ui'

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
  const [showHelp, setShowHelp] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [validated, setValidated] = useState(false)

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setValidated(true)

    if (!event.currentTarget.checkValidity()) {
      event.stopPropagation()
      setSubmitted(false)
      return
    }

    setSubmitted(true)
  }

  return (
    <PageShell className="program-contact-page" eyebrow="Informatii utile" title="Program si contact">
      <div className="d-flex justify-content-end mb-3">
        <Button className="program-help-button" type="button" onClick={() => setShowHelp(true)}>
          Help
        </Button>
      </div>

      <Row className="g-3">
        <Col md={5}>
          <Card className="program-info-card border-0 shadow-sm mb-3">
            <Card.Body>
              <Card.Title>Programul bibliotecii</Card.Title>
              <Table className="program-table mb-0" responsive>
                <tbody>
                  <tr>
                    <th>Luni - Vineri</th>
                    <td>09:00 - 18:00</td>
                  </tr>
                  <tr>
                    <th>Sambata</th>
                    <td>10:00 - 14:00</td>
                  </tr>
                  <tr>
                    <th>Duminica</th>
                    <td>Inchis</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
          <Card className="program-info-card border-0 shadow-sm mb-3">
            <Card.Body>
              <Card.Title>Reguli biblioteca</Card.Title>
              <ul className="program-rules mb-0">
                <li>Pastreaza linistea in salile de lectura.</li>
                <li>Returneaza cartile la data stabilita.</li>
                <li>Nu deteriora si nu sublinia cartile imprumutate.</li>
                <li>Anunta bibliotecarul daca ai nevoie de prelungire.</li>
              </ul>
            </Card.Body>
          </Card>
          <Card className="program-info-card border-0 shadow-sm">
            <Card.Body>
              <Card.Title>FAQ</Card.Title>
              <Accordion className="program-faq" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Cum imprumut o carte?</Accordion.Header>
                  <Accordion.Body>
                    Alege cartea din catalog, verifica disponibilitatea si foloseste butonul de
                    rezervare din pagina de detalii.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Pot prelungi imprumutul?</Accordion.Header>
                  <Accordion.Body>
                    Da, daca volumul nu este rezervat de alt cititor. Trimite un mesaj prin
                    formularul de contact.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Am nevoie de cont?</Accordion.Header>
                  <Accordion.Body>
                    Pentru rezervari si imprumuturi este necesara inscrierea in biblioteca.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
          </Card>
        </Col>
        <Col md={7}>
          <Card className="program-info-card h-100 border-0 shadow-sm" id="contact">
            <Card.Body>
              <Card.Title>Contact</Card.Title>
              <Card.Text className="program-contact-text">
                Email: biblioteca@aurora.ro
                <br />
                Telefon: 021 000 0000
              </Card.Text>
              <Form
                noValidate
                validated={validated}
                onBlur={() => setValidated(true)}
                onSubmit={handleContactSubmit}
              >
                <Row className="g-2">
                  <Col xs={12}>
                    <Form.Label>Nume</Form.Label>
                    <Form.Control
                      required
                      autoComplete="name"
                      minLength={3}
                      pattern=".{3,}"
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
                {submitted ? (
                  <Alert className="mt-3 mb-0" variant="success">
                    Email trimis cu succes. Multumim, {contactForm.nume}.
                  </Alert>
                ) : null}
                <div className="d-flex gap-2 mt-3">
                  <Button type="submit" variant="success">
                    Trimite email
                  </Button>
                  <Button
                    type="button"
                    variant="outline-secondary"
                    onClick={() => {
                      setContactForm(initialContactForm)
                      setSubmitted(false)
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

      <HelpModal show={showHelp} onHide={() => setShowHelp(false)} />
    </PageShell>
  )
}
