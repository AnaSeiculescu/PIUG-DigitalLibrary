import { Button, Card, Col, Row } from 'react-bootstrap'
import { useState } from 'react'
import { useNavigate } from 'react-router'

import { paths } from '../../routes/routes.config'
import { HelpModal, ScrollControls } from '../../components/ui'
import bibliotecaImg from '../../assets/biblioteca-interactiva.png'

export function Home() {
  const [showHelp, setShowHelp] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="w-100">
      <div className="position-relative aurora-hero mb-4">
        <div className="aurora-hero-title">Alege o zona din biblioteca</div>
        <img
          src={bibliotecaImg}
          alt="Biblioteca Aurora"
          className="aurora-hero-img"
        />
        <div className="aurora-hero-overlay" aria-hidden="true" />

        <button
          type="button"
          className="aurora-hotspot aurora-hotspot--catalog"
          aria-label="Raftul deschide catalogul"
          onClick={() => navigate(paths.catalog)}
        />
        <button
          type="button"
          className="aurora-hotspot aurora-hotspot--recomandari"
          aria-label="Fotoliul duce la recomandari"
          onClick={() => navigate(paths.recomandari)}
        />
        <button
          type="button"
          className="aurora-hotspot aurora-hotspot--program"
          aria-label="Afisul arata programul"
          onClick={() => navigate(paths.program)}
        />
        <button
          type="button"
          className="aurora-hotspot aurora-hotspot--inscriere"
          aria-label="Biroul deschide inscrierea"
          onClick={() => navigate(paths.inscriere)}
        />

        <div className="aurora-help-fab">
          <Button
            variant="dark"
            className="rounded-circle"
            style={{ width: 44, height: 44 }}
            aria-label="Ajutor rapid"
            onClick={() => setShowHelp(true)}
          >
            ?
          </Button>
        </div>
      </div>

      <Row xs={1} md={2} className="g-3">
        <Col>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Despre biblioteca</Card.Title>
              <Card.Text className="text-muted">
                Pagina de acasa foloseste repere familiare pentru ca vizitatorii sa inteleaga
                rapid unde pot merge si ce actiune pot face.
              </Card.Text>
              <div className="d-flex gap-2 flex-wrap">
                <Button
                  variant="outline-success"
                  onClick={() => navigate(paths.recomandari)}
                >
                  Recomandari
                </Button>
                <Button variant="outline-success" onClick={() => navigate(paths.program)}>
                  Program
                </Button>
                <Button variant="outline-success" onClick={() => navigate(paths.inscriere)}>
                  Inscriere
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Social media</Card.Title>
              <Card.Text className="text-muted">
                Urmareste noutatile bibliotecii si evenimentele de lectura.
              </Card.Text>
              <div className="d-flex gap-2 flex-wrap">
                <Button variant="dark" size="sm" as="a" href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                  Facebook
                </Button>
                <Button variant="dark" size="sm" as="a" href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                  Instagram
                </Button>
                <Button variant="dark" size="sm" as="a" href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                  YouTube
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <HelpModal show={showHelp} onHide={() => setShowHelp(false)} />
      <ScrollControls />
    </div>
  )
}
