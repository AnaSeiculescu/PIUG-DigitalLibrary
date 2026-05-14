import { Button, Modal } from 'react-bootstrap'

type HelpModalProps = {
  onHide: () => void
  show: boolean
}

export function HelpModal({ onHide, show }: HelpModalProps) {
  return (
    <Modal centered onHide={onHide} show={show}>
      <Modal.Header closeButton>
        <Modal.Title>Ajutor rapid</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Foloseste zonele marcate din imagine pentru a naviga rapid.</p>
        <ul className="mb-0">
          <li>Catalogul deschide colectia de carti.</li>
          <li>Recomandarile duc la carti alese pentru tine.</li>
          <li>Inscrierea deschide pagina pentru membri noi.</li>
          <li>Contactul duce la informatiile bibliotecii.</li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide} variant="success">
          Am inteles
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
