import { Button, Modal } from 'react-bootstrap'

type HelpModalProps = {
  show: boolean
  onHide: () => void
}

export function HelpModal({ show, onHide }: HelpModalProps) {
  return (
    <Modal show={show} onHide={onHide} centered aria-labelledby="help-modal-title">
      <Modal.Header closeButton>
        <Modal.Title id="help-modal-title">Ajutor rapid</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="mb-2">Foloseste sectiunile aplicatiei pentru a naviga:</p>
        <ul className="mb-0">
          <li>Raftul deschide catalogul de carti.</li>
          <li>Fotoliul duce la recomandari de lectura.</li>
          <li>Afisul arata programul bibliotecii.</li>
          <li>Cautarea trimite la pagina de catalog.</li>
          <li>Biroul deschide pagina de inscriere.</li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Inchide
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

