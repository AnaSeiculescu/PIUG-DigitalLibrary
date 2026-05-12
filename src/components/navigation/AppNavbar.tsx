import type { FormEvent } from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router'

import { paths } from '../../routes/routes.config'

import { NavAppLink } from './NavAppLink'

export function AppNavbar() {
  const navigate = useNavigate()

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const searchTerm = String(formData.get('q') ?? '').trim()
    const query = searchTerm ? `?q=${encodeURIComponent(searchTerm)}#cautare` : '#cautare'

    navigate(`${paths.catalog}${query}`)
  }

  return (
    <Navbar
      as="header"
      bg="light"
      className="border-bottom py-2"
      expand="md"
      role="navigation"
    >
      <Container className="gap-2" fluid="lg">
        <Navbar.Brand
          as={Link}
          className="d-flex align-items-center gap-2 fw-bold"
          to={paths.home}
        >
          <span className="brand-mark d-inline-flex align-items-center justify-content-center rounded text-white">
            B
          </span>
          Biblioteca Aurora
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="app-main-nav" />
        <Navbar.Collapse id="app-main-nav">
          <Nav className="mx-auto gap-lg-3" navbar>
            <NavAppLink to={paths.catalog}>Catalog</NavAppLink>
            <NavAppLink to={paths.recommendations}>Recomandari</NavAppLink>
            <NavAppLink to={paths.program}>Program</NavAppLink>
            <NavAppLink to={paths.signIn}>Inscriere</NavAppLink>
          </Nav>
          <Form
            className="d-flex gap-2 mt-3 mt-md-0 search-form"
            onSubmit={handleSearch}
            role="search"
          >
            <Form.Control
              aria-label="Cauta in catalog"
              name="q"
              placeholder="Cauta o carte"
              type="search"
            />
            <Button aria-label="Cauta" className="search-submit" type="submit" variant="success">
              Cauta
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
