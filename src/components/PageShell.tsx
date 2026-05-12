import type { ReactNode } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

type PageShellProps = {
  children: ReactNode
  className?: string
  eyebrow?: string
  title: string
}

export function PageShell({ children, className = '', eyebrow, title }: PageShellProps) {
  return (
    <section className={`page-section flex-grow-1 py-5 ${className}`.trim()}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            {eyebrow && <p className="mb-2 text-uppercase fw-bold text-white-50">{eyebrow}</p>}
            <h1 className="display-6 fw-bold text-white">{title}</h1>
            <div className="text-white">{children}</div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
