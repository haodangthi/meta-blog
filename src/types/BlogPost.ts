interface Image {
  dimensions: {
    width: number
    height: number
  }
  alt: string | null
  copyright: string | null
  url: string
  id: string
  edit: {
    x: number
    y: number
    zoom: number
    background: string
  }
}

interface IAvatar {
  dimensions: {
    width: number
    height: number
  }
  alt: string | null
  copyright: string | null
  url: string
  id: string
  edit: {
    x: number
    y: number
    zoom: number
    background: string
  }
}

export interface ICategory {
  text_color: string
  name: string
  bg_color: string
}

export interface IPosts {
  posts: IPost[]
}

export interface IPost {
  uid: string
  data: IBlogPost
}

export interface IBlogPost {
  img: Image
  avatar: IAvatar
  category: ICategory[]
  date: string
  author: string
  title: string
}
