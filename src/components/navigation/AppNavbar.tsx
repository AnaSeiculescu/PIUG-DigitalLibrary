import { Container, Navbar, Nav, Form, Button, InputGroup } from 'react-bootstrap'
import { Link } from 'react-router'
import { useNavigate } from 'react-router'
import { useId } from 'react'

import { paths } from '../../routes/routes.config'

import { NavAppLink } from './NavAppLink'

export function AppNavbar() {
  const navigate = useNavigate()
  const searchInputId = useId()

  return (
    <Navbar
      as="header"
      bg="light"
      expand="md"
      className="border-bottom"
      role="navigation"
    >
      <Container>
        <Navbar.Brand as={Link} to={paths.home}>
          PIUG Digital Library
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="app-main-nav" />
        <Navbar.Collapse id="app-main-nav">
          <Nav className="ms-auto align-items-md-center gap-2" navbar>
            <NavAppLink to={paths.home} end>
              Home
            </NavAppLink>
            <NavAppLink to={paths.catalog}>Catalog</NavAppLink>
            <NavAppLink to={paths.recomandari}>Recomandari</NavAppLink>
            <NavAppLink to={paths.program}>Program</NavAppLink>
            <NavAppLink to={paths.inscriere}>Inscriere</NavAppLink>
            <NavAppLink to={paths.signIn}>Sign in</NavAppLink>
          </Nav>

          <Form
            className="ms-md-3 mt-3 mt-md-0"
            role="search"
            aria-label="Cauta in catalog"
            onSubmit={(event) => {
              event.preventDefault()
              const formData = new FormData(event.currentTarget)
              const q = String(formData.get('q') ?? '').trim()
              const query = q.length ? `?q=${encodeURIComponent(q)}#cautare` : '#cautare'
              navigate(`${paths.catalog}${query}`)
            }}
          >
            <InputGroup>
              <Form.Control
                id={searchInputId}
                name="q"
                placeholder="Cauta in catalog"
                aria-label="Cauta in catalog"
              />
              <Button type="submit" variant="success" aria-label="Cauta">
                ⌕
              </Button>
            </InputGroup>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
