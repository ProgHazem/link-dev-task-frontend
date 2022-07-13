import React from "react"
import { NewsType } from "src/types/News.type"
import NewsCategory from "src/apis/news_category-listing"

interface NewsCardInterface {
  news: NewsType
}

export default function NewsCard({ news }: NewsCardInterface) {
  return (
    <div className="card">
      <img src={news?.urlToImage} className="card-img-top" alt={news?.title} />
      <div className="card-body">
        <h5 className="card-title">{news?.title}</h5>
        {/* <p className="card-text">{news?.content}</p> */}
        <p className="card-text date-text">
          <img
            width="19"
            height="21"
            src="/images/icons/date.png"
            className="news-date"
            alt={news?.publishedDate}
          />
          {news?.publishedDate}
        </p>
        <p className="card-text">
          <span className="news-category">
            {
              NewsCategory?.newsCategory?.find(
                (category) => news.categoryID === String(category?.id)
              )?.name
            }
          </span>
          <span className="float-end">
            <img
              width="17"
              height="16"
              src="/images/icons/like.png"
              alt={news?.categoryID}
              className="mx-2"
            />
            <img
              width="18"
              height="20"
              src="/images/icons/share.png"
              alt={news?.categoryID}
            />
          </span>
        </p>
      </div>
    </div>
  )
}
