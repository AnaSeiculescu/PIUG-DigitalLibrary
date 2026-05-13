import type { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'
import { Alert, Button, Card, Col, Form, Row } from 'react-bootstrap'

import { PageShell } from '../../components/PageShell'

type SignInForm = {
  confirmPassword: string
  email: string
  fullName: string
  password: string
  phone: string
  terms: boolean
  userType: string
}

const initialForm: SignInForm = {
  confirmPassword: '',
  email: '',
  fullName: '',
  password: '',
  phone: '',
  terms: false,
  userType: '',
}

export function SignIn() {
  const [form, setForm] = useState<SignInForm>(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [validated, setValidated] = useState(false)
  const passwordsMatch = form.password === form.confirmPassword

  function updateField(event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, type, value } = event.currentTarget
    const nextValue =
      type === 'checkbox' && event.currentTarget instanceof HTMLInputElement
        ? event.currentTarget.checked
        : value

    setForm((currentForm) => ({
      ...currentForm,
      [name]: nextValue,
    }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setValidated(true)

    if (!event.currentTarget.checkValidity() || !passwordsMatch) {
      event.stopPropagation()
      setSubmitted(false)
      return
    }

    setSubmitted(true)
  }

  function handleReset() {
    setForm(initialForm)
    setSubmitted(false)
    setValidated(false)
  }

  return (
    <PageShell className="signin-page" eyebrow="Devino membru" title="Inscriere in biblioteca">
      {submitted ? (
        <Alert variant="success">
          Cererea de inscriere a fost inregistrata pentru {form.fullName}.
        </Alert>
      ) : null}

      <Card className="signup-card border-0 shadow-sm">
        <Card.Body>
          <Form
            noValidate
            validated={validated}
            onBlur={() => setValidated(true)}
            onSubmit={handleSubmit}
          >
            <Row className="g-3">
              <Col md={6}>
                <Form.Group controlId="fullName">
                  <Form.Label>Nume complet</Form.Label>
                  <Form.Control
                    required
                    autoComplete="name"
                    minLength={3}
                    name="fullName"
                    pattern=".{3,}"
                    placeholder="Numele tau"
                    value={form.fullName}
                    onChange={updateField}
                  />
                  <Form.Control.Feedback type="invalid">
                    Introdu un nume de cel putin 3 caractere.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    autoComplete="email"
                    name="email"
                    placeholder="nume@email.com"
                    type="email"
                    value={form.email}
                    onChange={updateField}
                  />
                  <Form.Control.Feedback type="invalid">
                    Introdu o adresa de email valida.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group controlId="phone">
                  <Form.Label>Telefon</Form.Label>
                  <Form.Control
                    required
                    autoComplete="tel"
                    name="phone"
                    pattern="^[0-9+()\\s-]{7,20}$"
                    placeholder="0712 345 678"
                    value={form.phone}
                    onChange={updateField}
                  />
                  <Form.Control.Feedback type="invalid">
                    Introdu un numar valid, intre 7 si 20 caractere.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group controlId="userType">
                  <Form.Label>Tip utilizator</Form.Label>
                  <Form.Select
                    required
                    name="userType"
                    value={form.userType}
                    onChange={updateField}
                  >
                    <option value="">Alege tipul</option>
                    <option value="elev">Elev</option>
                    <option value="student">Student</option>
                    <option value="adult">Adult</option>
                    <option value="senior">Senior</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Alege tipul de utilizator.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group controlId="password">
                  <Form.Label>Parola</Form.Label>
                  <Form.Control
                    required
                    autoComplete="new-password"
                    minLength={8}
                    name="password"
                    placeholder="Minim 8 caractere"
                    type="password"
                    value={form.password}
                    onChange={updateField}
                  />
                  <Form.Control.Feedback type="invalid">
                    Parola trebuie sa aiba cel putin 8 caractere.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group controlId="confirmPassword">
                  <Form.Label>Confirma parola</Form.Label>
                  <Form.Control
                    required
                    autoComplete="new-password"
                    isInvalid={validated && !passwordsMatch}
                    name="confirmPassword"
                    placeholder="Repeta parola"
                    type="password"
                    value={form.confirmPassword}
                    onChange={updateField}
                  />
                  <Form.Control.Feedback type="invalid">
                    Parolele trebuie sa fie identice.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col xs={12}>
                <Form.Group controlId="terms">
                  <Form.Check
                    required
                    checked={form.terms}
                    feedback="Trebuie sa accepti termenii bibliotecii."
                    feedbackType="invalid"
                    label="Accept termenii si conditiile bibliotecii"
                    name="terms"
                    type="checkbox"
                    onChange={updateField}
                  />
                </Form.Group>
              </Col>
            </Row>

            <div className="d-flex flex-wrap gap-2 mt-4">
              <Button type="submit" variant="success">
                Inregistreaza-te
              </Button>
              <Button type="button" variant="outline-secondary" onClick={handleReset}>
                Reseteaza
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </PageShell>
  )
}
