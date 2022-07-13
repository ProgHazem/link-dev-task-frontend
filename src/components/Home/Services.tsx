import React, { useEffect, useState } from "react"
import ServicesCard from "src/components/Services/ServicesCard"
import { useIntl } from "react-intl"
import ServicesType from "src/types/Services.type"
import AllServices from "src/apis/services"

export default function Services() {
  const { formatMessage: f } = useIntl()
  const [allServices, setAllServices] = useState<ServicesType>()

  useEffect(() => {
    ;(async () => {
      await setAllServices(AllServices)
    })()
  }, [])

  return allServices && allServices.services.length > 0 ? (
    <div className="services">
      <img
        src="/images/services/Things_We_Do.png"
        alt="Things we do"
        className="position-relative services-things-we-do"
      />
      <div className="row position-relative services-body">
        <div className="col-12 col-lg-5 services-left-side">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-12 col-lg-6 p-lg-0 position-relative card-1">
                <ServicesCard
                  path={allServices?.services[0]?.path ?? ""}
                  title={f({
                    id: `${allServices?.services[0]?.title ?? "Not_Found"}`,
                  })}
                />
              </div>
              <div className="col-12 col-lg-6 p-lg-0">
                <div className="row">
                  <div className="col-12 p-0">
                    <ServicesCard
                      path={allServices?.services[1]?.path ?? ""}
                      title={f({
                        id: `${allServices?.services[1]?.title ?? "Not_Found"}`,
                      })}
                    />
                  </div>
                  <div className="col-12 p-0">
                    <ServicesCard
                      path={allServices?.services[2]?.path ?? ""}
                      title={f({
                        id: `${allServices?.services[2]?.title ?? "Not_Found"}`,
                      })}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-12 col-lg-7"
          style={{
            backgroundImage: "url('/images/services/background-2.png')",
            backgroundSize: "cover",
          }}
        >
          <div className="row">
            <div className="col-12 col-lg-4 p-lg-0 position-relative services-right-side">
              <ServicesCard
                path={allServices?.services[3]?.path ?? ""}
                title={f({
                  id: `${allServices?.services[3]?.title ?? "Not_Found"}`,
                })}
              />
              <ServicesCard
                path={allServices?.services[4]?.path ?? ""}
                title={f({
                  id: `${allServices?.services[4]?.title ?? "Not_Found"}`,
                })}
              />
            </div>
            <div className="col-12 col-lg-7 pt-4">
              <h3 className="services-heading">
                {f({ id: "Services_Heading" })}
              </h3>
              <p className="services-desc">{f({ id: "Services_Desc" })}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <p />
  )
}
