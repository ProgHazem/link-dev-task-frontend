import React from "react"
import { useIntl } from "react-intl"
import { BannerType } from "src/types/Banner.type"

interface HomeSliderProps {
  activeBanner: BannerType | undefined
  setActiveSlider: Function
}

export default function HomeSlider({
  activeBanner,
  setActiveSlider,
}: HomeSliderProps) {
  const { formatMessage: f } = useIntl()

  return (
    <div className="container-fluid">
      <div className="row slider slide">
        <div className="col-lg-7 col-12">
          <div className="container left-slider">
            <div className="row">
              <div className="col-12">
                <h2
                  className="text-uppercase category"
                  style={{ color: `#${activeBanner?.colorCode}` }}
                >
                  {activeBanner?.category}
                </h2>
              </div>
              <div className="col-12">
                <img
                  className="title-background"
                  src={activeBanner?.itemUrl}
                  alt="Vector"
                />
                <h3 className="title">{activeBanner?.title}</h3>
              </div>
              <div className="col-12">
                <p className="brief">{activeBanner?.brief}</p>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-5 col-lg-2">
                    <button type="button" className="btn btn-orange">
                      {f({ id: "Slider-Find-More" })}
                    </button>
                  </div>
                  <div className="col-7 col-lg-3">
                    <button
                      type="button"
                      className="btn text-color bg-transparent play-demo"
                    >
                      <img
                        className="border-radius-50 px-2 play-demo-image"
                        src="/images/icons/play-button.png"
                        alt="play"
                      />
                      {f({ id: "Slider-Play-Demo" })}
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 border-dot px-0">
                <div className="position-relative navigation-slider d-flex justify-content-between">
                  {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                  <button
                    type="button"
                    className={`btn slider-nav-size border-radius-50 bg-pink ${
                      activeBanner?.id === 1 ? "active-slider" : ""
                    }`}
                    onClick={() => setActiveSlider(1)}
                  />
                  {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                  <button
                    type="button"
                    className={`btn slider-nav-size border-radius-50 bg-green ${
                      activeBanner?.id === 2 ? "active-slider" : ""
                    }`}
                    onClick={() => setActiveSlider(2)}
                  />
                  {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                  <button
                    type="button"
                    className={`btn slider-nav-size border-radius-50 bg-orange ${
                      activeBanner?.id === 0 ? "active-slider" : ""
                    }`}
                    onClick={() => setActiveSlider(0)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-5 slider-decore"
          style={{
            backgroundImage: `url("${
              // eslint-disable-next-line no-nested-ternary
              activeBanner?.id === 0
                ? "/images/slider/Decore-orange.svg"
                : activeBanner?.id === 1
                ? "/images/slider/Decore.svg"
                : "/images/slider/Decore-green.svg"
            }")`,
            backgroundSize: "cover",
          }}
        >
          <img
            className="slider-travel"
            src={activeBanner?.imgUrl}
            alt="Traveller1"
          />
        </div>
      </div>
    </div>
  )
}
