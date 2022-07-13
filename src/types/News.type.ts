export default interface AllNewsType {
  News:
    | {
        id: string
        categoryID: string
        title: string
        description?: string | undefined
        publishedDate: string
        content: string
        urlToImage: string
        showOnHomepage: string
      }[]
    | undefined
}

export interface NewsType {
  id: string
  categoryID: string
  title: string
  description?: string | undefined
  publishedDate: string
  content: string
  urlToImage: string
  showOnHomepage: string
}
