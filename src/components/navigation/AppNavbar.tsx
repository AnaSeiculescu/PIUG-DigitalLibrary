import type { FormEvent } from 'react'
import { useMemo, useState } from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router'

import { books } from '../../data/books'
import { paths } from '../../routes/routes.config'

import { NavAppLink } from './NavAppLink'

export function AppNavbar() {
  const navigate = useNavigate()
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const searchSuggestions = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLocaleLowerCase('ro-RO')
    const matchingBooks = normalizedQuery
      ? books.filter((book) => book.title.toLocaleLowerCase('ro-RO').includes(normalizedQuery))
      : books

    return matchingBooks.slice(0, 3)
  }, [searchQuery])

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const searchTerm = searchQuery.trim()
    const query = searchTerm ? `?q=${encodeURIComponent(searchTerm)}#rezultate` : '#cautare'

    navigate(`${paths.catalog}${query}`)
    setIsSearchFocused(false)
  }

  function handleSuggestion(title: string) {
    setSearchQuery(title)
    setIsSearchFocused(false)
    navigate(`${paths.catalog}?q=${encodeURIComponent(title)}#rezultate`)
  }

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
          <Form
            className="d-flex gap-2 mt-3 mt-lg-0 search-form"
            onSubmit={handleSearch}
            role="search"
          >
            <div className="search-field">
              <Form.Control
                aria-label="Cauta in catalog"
                autoComplete="off"
                name="q"
                onBlur={() => setIsSearchFocused(false)}
                onChange={(event) => setSearchQuery(event.currentTarget.value)}
                onFocus={() => setIsSearchFocused(true)}
                placeholder="Cauta o carte"
                type="search"
                value={searchQuery}
              />
              {isSearchFocused && searchSuggestions.length > 0 && (
                <div className="search-suggestions" role="listbox">
                  {searchSuggestions.map((book) => (
                    <button
                      className="search-suggestion"
                      key={book.slug}
                      onMouseDown={(event) => {
                        event.preventDefault()
                        handleSuggestion(book.title)
                      }}
                      role="option"
                      type="button"
                    >
                      {book.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <Button aria-label="Cauta" className="search-submit" type="submit" variant="success">
              Cauta
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
