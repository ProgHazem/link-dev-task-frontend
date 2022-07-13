export default interface BannersType {
  slides: {
    id: number
    category: string
    title: string
    brief: string
    colorCode: string
    imgUrl: string
    itemUrl: string
    videoUrl: string
    order: number
  }[]
}
export interface BannerType {
  id: number | undefined
  category: string | undefined
  title: string | undefined
  brief: string | undefined
  colorCode: string | undefined
  imgUrl: string | undefined
  itemUrl: string | undefined
  videoUrl: string | undefined
  order: number | undefined
}
