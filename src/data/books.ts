export type Book = {
  author: string
  category: string
  description: string
  isAvailable: boolean
  slug: string
  title: string
  tone: 'gold' | 'green' | 'red'
}

export const books: Book[] = [
  {
    author: 'George Calinescu',
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
    category: 'Roman autobiografic',
    description:
      'Confesiunea unui tanar preocupat de carti, identitate, ambitii intelectuale si cautarea propriei voci.',
    isAvailable: true,
    slug: 'romanul-adolescentului-miop',
    title: 'Romanul adolescentului miop',
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
