import { useCallback, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router'

import { paths } from '../../routes/routes.config'

import { NavAppLink } from './NavAppLink'

/** Sub lg (<992px), după navigare din meniu, collapse-ul navbar se închide. */

export function AppNavbar() {
  const [expanded, setExpanded] = useState(false)

  const collapseNavOnMobile = useCallback(() => {
    if (typeof window.matchMedia !== 'function') {
      return
    }
    if (window.matchMedia('(max-width: 991.98px)').matches) {
      setExpanded(false)
    }
  }, [])

  return (
    <Navbar
      as="header"
      bg="light"
      className="border-bottom py-2 fixed-top"
      expand="lg"
      expanded={expanded}
      onToggle={setExpanded}
      role="navigation"
    >
      <Container className="gap-2" fluid="lg">
        <Navbar.Brand
          as={Link}
          className="d-flex align-items-center gap-2 fw-bold"
          to={paths.home}
          onClick={collapseNavOnMobile}
        >
          <span className="brand-mark d-inline-flex align-items-center justify-content-center rounded text-white">
            B
          </span>
          Biblioteca Aurora
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="app-main-nav" />
        <Navbar.Collapse id="app-main-nav">
          <Nav className="mx-auto app-navbar-desktop-dividers" navbar>
            <NavAppLink end to={paths.home} onClick={collapseNavOnMobile}>
              Acasa
            </NavAppLink>
            <NavAppLink to={paths.catalog} onClick={collapseNavOnMobile}>
              Catalog
            </NavAppLink>
            <NavAppLink to={paths.recommendations} onClick={collapseNavOnMobile}>
              Recomandari
            </NavAppLink>
            <NavAppLink to={paths.program} onClick={collapseNavOnMobile}>
              Program si contact
            </NavAppLink>
            <NavAppLink to={paths.signIn} onClick={collapseNavOnMobile}>
              Inscriere
            </NavAppLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
