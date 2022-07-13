import React from "react"
import { useIntl } from "react-intl"

interface ServicesCardInterface {
  path: string
  title: string
}

export default function ServicesCard({ path, title }: ServicesCardInterface) {
  const { formatMessage: f } = useIntl()

  return (
    <div
      className="services-card"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("${path}") no-repeat right`,
        backgroundSize: "cover",
      }}
    >
      <p className="services-card-title-shadow position-relative">{title}</p>
      <p className="services-card-title position-relative">{title}</p>
      <p className="services-card-layout position-absolute align-content-end">
        <span className="services-card-layout-text">
          → {f({ id: "Services_Read_More" })}
        </span>
      </p>
    </div>
  )
}
