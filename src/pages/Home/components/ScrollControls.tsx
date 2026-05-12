import { Button, ButtonGroup } from 'react-bootstrap'

export function ScrollControls() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }

  return (
    <ButtonGroup vertical className="scroll-controls">
      <Button aria-label="Mergi sus" className="scroll-button" onClick={scrollToTop} variant="secondary">
        ↑
      </Button>
      <Button aria-label="Mergi jos" className="scroll-button" onClick={scrollToBottom} variant="secondary">
        ↓
      </Button>
    </ButtonGroup>
  )
}
