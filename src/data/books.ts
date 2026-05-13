export type Book = {
  author: string
  category: string
  coverMode?: 'full' | 'mask-right'
  coverUrl?: string
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
    coverUrl: 'https://www.librarie.net/coperti2/8/6/5/4/1/300x300.jpg',
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
    coverUrl: 'https://www.librarie.net/coperti2/4/0/0/0/5/6/300x300.jpg',
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
    coverMode: 'mask-right',
    coverUrl: 'https://www.librarie.net/coperti2/4/4/3/5/8/2/300x300.jpg',
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
    coverUrl: 'https://www.librarie.net/coperti2/1/9/8/2/5/2/300x300.jpg',
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
    coverMode: 'full',
    coverUrl: 'https://cdn.dc5.ro/img-prod/4183012175-0-240.jpeg',
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
    coverUrl: 'https://www.librarie.net/coperti2/4/0/1/7/9/2/300x300.jpg',
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
