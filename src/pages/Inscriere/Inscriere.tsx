import { Alert, Button, Card, Col, Form, Row } from 'react-bootstrap'
import { useState } from 'react'
import { useNavigate } from 'react-router'

import { paths } from '../../routes/routes.config'

type InscriereForm = {
  nume: string
  email: string
  telefon: string
  obs: string
}

const initialState: InscriereForm = {
  nume: '',
  email: '',
  telefon: '',
  obs: '',
}

export function Inscriere() {
  const [form, setForm] = useState<InscriereForm>(initialState)
  const [submitted, setSubmitted] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="w-100">
      <h1 className="mb-1">Inscriere</h1>
      <div className="text-muted mb-3">Simplu si previzibil (demo)</div>

      {submitted ? (
        <Alert variant="success">
          Formular trimis (demo). Multumim, {form.nume || 'cititor'}!
        </Alert>
      ) : null}

      <Row className="g-3">
        <Col xs={12} lg={7}>
          <Card>
            <Card.Body>
              <Card.Title className="mb-2">Formular (demo)</Card.Title>
              <Card.Text className="text-muted">
                Placeholder: completeaza campurile. In proiectul final poti adauga validare si
                salvare.
              </Card.Text>
              <Form
                onSubmit={(event) => {
                  event.preventDefault()
                  setSubmitted(true)
                }}
              >
                <Row className="g-3">
                  <Col xs={12}>
                    <Form.Label>Nume complet</Form.Label>
                    <Form.Control
                      required
                      value={form.nume}
                      onChange={(e) => setForm((prev) => ({ ...prev, nume: e.target.value }))}
                      autoComplete="name"
                    />
                  </Col>
                  <Col xs={12}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                      autoComplete="email"
                    />
                  </Col>
                  <Col xs={12}>
                    <Form.Label>Telefon (optional)</Form.Label>
                    <Form.Control
                      value={form.telefon}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, telefon: e.target.value }))
                      }
                      autoComplete="tel"
                    />
                  </Col>
                  <Col xs={12}>
                    <Form.Label>Observatii (optional)</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={form.obs}
                      onChange={(e) => setForm((prev) => ({ ...prev, obs: e.target.value }))}
                    />
                  </Col>
                </Row>
                <div className="d-flex gap-2 mt-3">
                  <Button type="submit" variant="success">
                    Trimite
                  </Button>
                  <Button
                    type="button"
                    variant="outline-secondary"
                    onClick={() => {
                      setForm(initialState)
                      setSubmitted(false)
                    }}
                  >
                    Reseteaza
                  </Button>
                </div>
              </Form>
              <div className="text-muted mt-3">
                Principiu: prevenirea erorilor (campuri obligatorii clare, feedback).
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} lg={5}>
          <Card>
            <Card.Body>
              <Card.Title className="mb-2">Beneficii</Card.Title>
              <ul className="mb-0">
                <li>Imprumut rapid</li>
                <li>Favorite si istoric</li>
                <li>Notificari pentru scadente</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="d-flex gap-2 mt-4">
        <Button variant="outline-secondary" onClick={() => navigate(paths.home)}>
          Acasa
        </Button>
        <Button variant="outline-success" onClick={() => navigate(paths.program)}>
          Vezi program
        </Button>
      </div>
    </div>
  )
}

