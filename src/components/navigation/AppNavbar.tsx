import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router'

import { paths } from '../../routes/routes.config'

import { NavAppLink } from './NavAppLink'

export function AppNavbar() {
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
          <Nav className="ms-auto" navbar>
            <NavAppLink to={paths.home} end>
              Home
            </NavAppLink>
            <NavAppLink to={paths.signIn}>Sign in</NavAppLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
