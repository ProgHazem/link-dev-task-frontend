import React, { useEffect, useState } from "react"
import Banner from "src/apis/banner"
import BannersType, { BannerType } from "src/types/Banner.type"
import CategoriesType, { CategoryType } from "src/types/Category.type"
import NewsCategory from "src/apis/news_category-listing"
import AllNewsType from "src/types/News.type"
import NewsList from "src/apis/news_listing"
import HomeSlider from "src/components/Home/HomeSlider"
import Services from "src/components/Home/Services"
import { useIntl } from "react-intl"
import NewsCard from "src/components/News/NewsCard"

export default function Home() {
  const { formatMessage: f } = useIntl()
  const [banners, setBanners] = useState<BannersType>()
  const [activeBanner, setActiveBanner] = useState<BannerType>()
  const [categories, setCategories] = useState<CategoriesType>()
  const [activeCategory, setActiveCategory] = useState<CategoryType>({
    id: 0,
    name: f({ id: "News_All_News" }),
  })
  const [allNews, setAllNews] = useState<AllNewsType>()
  const [filterNews, setFilterNews] = useState<AllNewsType>()
  const [perPage, setPerPage] = useState(6)

  useEffect(() => {
    ;(async () => {
      await setBanners(Banner)
      await setCategories(NewsCategory)
      await setAllNews(NewsList)
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      await setActiveBanner(
        banners?.slides.find((slider) => slider.order === 3)
      )
    })()
  }, [banners])

  useEffect(() => {
    ;(async () => {
      if (activeCategory?.id === 0) {
        // eslint-disable-next-line no-shadow
        const filterNews = allNews?.News?.filter(
          (news) => news.showOnHomepage === "yes"
        )?.slice(0, perPage)
        setFilterNews({ News: filterNews })
      } else {
        // eslint-disable-next-line no-shadow
        const filterNews = allNews?.News?.filter(
          (news) =>
            news.categoryID === String(activeCategory.id) &&
            news.showOnHomepage === "yes"
        )?.slice(0, perPage)
        setFilterNews({ News: filterNews })
      }
    })()
  }, [allNews, activeCategory, perPage])

  const setActiveSlider = async (id: number) => {
    await setActiveBanner(banners?.slides.find((slider) => slider.id === id))
  }

  return (
    <>
      <HomeSlider
        activeBanner={activeBanner}
        setActiveSlider={setActiveSlider}
      />
      <Services />
      <div className="news mb-5">
        <div className="container">
          <h3 className="news-media">{f({ id: "News_Media" })}</h3>
          <h3 className="top-news">{f({ id: "News_Top_News" })}</h3>
          <div className="row">
            <div className="col-12 mt-2">
              <ul className="nav justify-content-center">
                <li className="nav-item m-2" key={0}>
                  <button
                    type="button"
                    className={`btn nav-link p-2 ${
                      activeCategory?.id === 0 ? "active-category" : ""
                    }`}
                    onClick={() =>
                      setActiveCategory({
                        id: 0,
                        name: f({ id: "News_All_News" }),
                      })
                    }
                  >
                    {f({ id: "News_All_News" })}
                  </button>
                </li>
                {categories?.newsCategory.map((category) => (
                  <li className="nav-item m-2" key={category?.id}>
                    <button
                      type="button"
                      className={`btn nav-link p-2 ${
                        activeCategory?.id === category?.id
                          ? "active-category"
                          : ""
                      }`}
                      onClick={() => setActiveCategory(category)}
                    >
                      {category?.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-12">
              <div className="row">
                {filterNews?.News?.map((news) => (
                  <div className="col-12 col-lg-4 my-4" key={news?.id}>
                    <NewsCard news={news} />
                  </div>
                ))}
                <div
                  className={`col-12 text-center ${
                    perPage === 12 || filterNews?.News?.length === 0
                      ? "d-none"
                      : ""
                  }`}
                >
                  <button
                    type="button"
                    className="btn view-all"
                    onClick={() => setPerPage(perPage + 6)}
                  >
                    {f({ id: "News_Show_More" })}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
