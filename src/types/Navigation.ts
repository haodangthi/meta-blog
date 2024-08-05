export interface INavItem {
  link: {
    id: string
    url: string
    type: string
    link_type: string
    target: string | null
  }
  label: string
}

interface INavData {
  nav_item: INavItem[]
}

export interface IHeader {
  id: string
  data: INavData
}
