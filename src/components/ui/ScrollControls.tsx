import { Button } from 'react-bootstrap'

type ScrollControlsProps = {
  scrollToTopLabel?: string
  scrollToBottomLabel?: string
}

export function ScrollControls({
  scrollToTopLabel = 'Sus',
  scrollToBottomLabel = 'Jos',
}: ScrollControlsProps) {
  return (
    <div className="position-fixed bottom-0 end-0 p-3 d-grid gap-2" style={{ zIndex: 1030 }}>
      <Button
        variant="dark"
        className="rounded-circle"
        style={{ width: 44, height: 44 }}
        aria-label={scrollToTopLabel}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </Button>
      <Button
        variant="dark"
        className="rounded-circle"
        style={{ width: 44, height: 44 }}
        aria-label={scrollToBottomLabel}
        onClick={() =>
          window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
        }
      >
        ↓
      </Button>
    </div>
  )
}

