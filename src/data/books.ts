export type CatalogCategory = 'dezvoltare-personala' | 'it' | 'literatura' | 'studenti'

export type Book = {
  author: string
  catalogCategory: CatalogCategory
  category: string
  description: string
  isAvailable: boolean
  slug: string
  title: string
  tone: 'gold' | 'green' | 'red'
}

export const catalogCategories: { label: string; value: CatalogCategory }[] = [
  { label: 'Studenti', value: 'studenti' },
  { label: 'IT', value: 'it' },
  { label: 'Literatura', value: 'literatura' },
  { label: 'Dezvoltare personala', value: 'dezvoltare-personala' },
]

export const books: Book[] = [
  {
    author: 'George Calinescu',
    catalogCategory: 'literatura',
    category: 'Roman clasic',
    description:
      'O poveste despre maturizare, mostenire si relatii complicate in Bucurestiul de la inceputul secolului XX.',
    isAvailable: true,
    slug: 'enigma-otiliei',
    title: 'Enigma Otiliei',
    tone: 'gold',
  },
  {
    author: 'Mircea Eliade',
    catalogCategory: 'studenti',
    category: 'Roman psihologic',
    description:
      'Un roman despre iubire, diferente culturale si descoperirea sinelui, inspirat din experienta indiana a autorului.',
    isAvailable: true,
    slug: 'maitreyi',
    title: 'Maitreyi',
    tone: 'green',
  },
  {
    author: 'Liviu Rebreanu',
    catalogCategory: 'literatura',
    category: 'Roman realist',
    description:
      'Drama unui taran prins intre dorinta de pamant, iubire si presiunea comunitatii rurale traditionale.',
    isAvailable: true,
    slug: 'ion',
    title: 'Ion',
    tone: 'red',
  },
  {
    author: 'Mihail Sadoveanu',
    catalogCategory: 'literatura',
    category: 'Roman traditional',
    description:
      'Calatoria Vitoriei Lipan pentru aflarea adevarului, intr-o lume construita pe datini, curaj si dreptate.',
    isAvailable: false,
    slug: 'baltagul',
    title: 'Baltagul',
    tone: 'gold',
  },
  {
    author: 'Marin Preda',
    catalogCategory: 'literatura',
    category: 'Roman realist',
    description:
      'Portretul unei familii si al satului romanesc aflat intre traditie, schimbare sociala si tensiuni istorice.',
    isAvailable: true,
    slug: 'morometii',
    title: 'Morometii',
    tone: 'green',
  },
  {
    author: 'Mircea Eliade',
    catalogCategory: 'dezvoltare-personala',
    category: 'Roman autobiografic',
    description:
      'Confesiunea unui tanar preocupat de carti, identitate, ambitii intelectuale si cautarea propriei voci.',
    isAvailable: true,
    slug: 'romanul-adolescentului-miop',
    title: 'Romanul adolescentului miop',
    tone: 'red',
  },
  {
    author: 'Thomas H. Cormen',
    catalogCategory: 'it',
    category: 'IT',
    description:
      'Introducere clara in algoritmi, structuri de date si gandire computationala pentru proiecte tehnice.',
    isAvailable: true,
    slug: 'introducere-in-algoritmi',
    title: 'Introducere in algoritmi',
    tone: 'green',
  },
  {
    author: 'Stephen R. Covey',
    catalogCategory: 'dezvoltare-personala',
    category: 'Dezvoltare personala',
    description:
      'Ghid practic despre obiceiuri, prioritati si organizare personala pentru obiective pe termen lung.',
    isAvailable: true,
    slug: 'cele-7-deprinderi',
    title: 'Cele 7 deprinderi',
    tone: 'gold',
  },
  {
    author: 'Maria Popescu',
    catalogCategory: 'studenti',
    category: 'Ghid pentru studenti',
    description:
      'Resurse pentru invatare eficienta, notite, pregatirea examenelor si gestionarea timpului la facultate.',
    isAvailable: true,
    slug: 'ghidul-studentului',
    title: 'Ghidul studentului',
    tone: 'red',
  },
]

export function getBookPath(slug: string) {
  return `/catalog/${slug}`
}

export function getBookInitials(title: string) {
  return title
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toLocaleUpperCase('ro-RO')
}

export function getCatalogCategoryLabel(category: CatalogCategory) {
  return catalogCategories.find((item) => item.value === category)?.label ?? category
}
