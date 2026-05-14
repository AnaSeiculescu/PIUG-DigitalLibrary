import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router'

import { paths } from '../../routes/routes.config'

import { NavAppLink } from './NavAppLink'

export function AppNavbar() {
  return (
    <Navbar
      as="header"
      bg="light"
      className="border-bottom py-2 fixed-top"
      expand="lg"
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
            <NavAppLink to={paths.home}>Acasa</NavAppLink>
            <NavAppLink to={paths.catalog}>Catalog</NavAppLink>
            <NavAppLink to={paths.recommendations}>Recomandari</NavAppLink>
            <NavAppLink to={paths.program}>Program</NavAppLink>
            <NavAppLink to={paths.signIn}>Inscriere</NavAppLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
