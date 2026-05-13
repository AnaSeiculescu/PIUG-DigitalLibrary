import type { FormEvent } from 'react'
import { Badge, Button, ButtonGroup, Card, Form, Table } from 'react-bootstrap'
import { Link, useNavigate, useSearchParams } from 'react-router'

import { PageShell } from '../../components/PageShell'
import {
  books,
  catalogCategories,
  getBookInitials,
  getBookPath,
  getCatalogCategoryLabel,
  type CatalogCategory,
} from '../../data/books'
import { paths } from '../../routes/routes.config'

type ActiveCategory = CatalogCategory | 'toate'

export function Catalog() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const searchTerm = searchParams.get('q')?.trim() ?? ''
  const requestedCategory = searchParams.get('categorie')
  const activeCategory: ActiveCategory = catalogCategories.some(
    (category) => category.value === requestedCategory,
  )
    ? (requestedCategory as CatalogCategory)
    : 'toate'
  const normalizedSearchTerm = searchTerm.toLocaleLowerCase('ro-RO')
  const visibleBooks = books.filter((book) => {
    const matchesCategory =
      activeCategory === 'toate' || book.catalogCategory === activeCategory
    const searchableBookText = [
      book.title,
      book.author,
      book.category,
      getCatalogCategoryLabel(book.catalogCategory),
    ]
      .join(' ')
      .toLocaleLowerCase('ro-RO')
    const matchesSearch =
      !normalizedSearchTerm || searchableBookText.includes(normalizedSearchTerm)

    return matchesCategory && matchesSearch
  })

  function buildCatalogUrl(nextSearchTerm: string, nextCategory: ActiveCategory) {
    const nextSearchParams = new URLSearchParams()

    if (nextSearchTerm) {
      nextSearchParams.set('q', nextSearchTerm)
    }

    if (nextCategory !== 'toate') {
      nextSearchParams.set('categorie', nextCategory)
    }

    const query = nextSearchParams.toString()

    return `${paths.catalog}${query ? `?${query}` : ''}#rezultate`
  }

  function handleCatalogSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const nextSearchTerm = String(formData.get('q') ?? '').trim()

    navigate(buildCatalogUrl(nextSearchTerm, activeCategory))
  }

  function handleCategoryChange(nextCategory: ActiveCategory) {
    navigate(buildCatalogUrl(searchTerm, nextCategory))
  }

  return (
    <PageShell className="catalog-page" eyebrow="Colectia bibliotecii" title="Catalog">
      <div className="catalog-tools mb-4">
        <Form id="cautare" onSubmit={handleCatalogSearch} role="search">
          <Form.Label>Cauta in catalog</Form.Label>
          <div className="d-flex gap-2">
            <Form.Control
              defaultValue={searchTerm}
              name="q"
              placeholder="Cauta dupa titlu, autor sau categorie"
              type="search"
            />
            <Button className="search-submit" type="submit">
              Cauta
            </Button>
          </div>
        </Form>

        <div className="catalog-category-filter" aria-label="Categorii catalog">
          <div className="fw-bold mb-2">Categorii</div>
          <ButtonGroup className="flex-wrap gap-2">
            <Button
              className="catalog-filter-button"
              type="button"
              variant={activeCategory === 'toate' ? 'success' : 'outline-light'}
              onClick={() => handleCategoryChange('toate')}
            >
              Toate
            </Button>
            {catalogCategories.map((category) => (
              <Button
                className="catalog-filter-button"
                key={category.value}
                type="button"
                variant={activeCategory === category.value ? 'success' : 'outline-light'}
                onClick={() => handleCategoryChange(category.value)}
              >
                {category.label}
              </Button>
            ))}
          </ButtonGroup>
        </div>
      </div>

      <Card className="catalog-table-card border-0 shadow-sm" id="rezultate">
        <Card.Body>
          <Table className="catalog-table align-middle mb-0" responsive>
            <thead>
              <tr>
                <th>Coperta</th>
                <th>Titlu</th>
                <th>Autor</th>
                <th>Categorie</th>
                <th>Disponibilitate</th>
              </tr>
            </thead>
            <tbody>
              {visibleBooks.map((book) => (
                <tr key={book.slug}>
                  <td>
                    <Link
                      aria-label={`Vezi detalii pentru ${book.title}`}
                      className={`book-cover-thumb book-cover--${book.tone}`}
                      to={getBookPath(book.slug)}
                    >
                      <span>{getBookInitials(book.title)}</span>
                    </Link>
                  </td>
                  <td>
                    <Link className="catalog-book-title" to={getBookPath(book.slug)}>
                      {book.title}
                    </Link>
                    <div className="catalog-book-description">{book.description}</div>
                  </td>
                  <td data-label="Autor">{book.author}</td>
                  <td data-label="Categorie">
                    <div>{book.category}</div>
                    <small>{getCatalogCategoryLabel(book.catalogCategory)}</small>
                  </td>
                  <td data-label="Disponibilitate">
                    <Badge bg={book.isAvailable ? 'success' : 'secondary'}>
                      {book.isAvailable ? 'Disponibila' : 'Indisponibila'}
                    </Badge>
                  </td>
                </tr>
              ))}
              {visibleBooks.length === 0 ? (
                <tr>
                  <td className="text-center py-4" colSpan={5}>
                    Nu am gasit carti pentru criteriile alese.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </PageShell>
  )
}
