import { FC } from "react"
import { useIntl } from "react-intl"

// eslint-disable-next-line react/function-component-definition
const Footer: FC = () => {
  const { formatMessage: f } = useIntl()
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-3">
            <div className="row">
              <div className="col-12">
                <img
                  src="/images/logo/Logo.svg"
                  width="157"
                  height="60"
                  className="d-inline-block align-top"
                  alt="Logo"
                  loading="lazy"
                />
              </div>
              <div className="col-12 mt-2">
                <p className="text-color text-footer-font-desc">
                  {f({ id: "Footer_Desc" })}
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-2">
            <div className="row">
              <div className="col-12">
                <h3 className="text-footer-font-header mb-2">
                  {f({ id: "Footer_Company" })}
                </h3>
              </div>
              <div className="col-12">
                <ul className="list-unstyled">
                  <li>
                    <a href="/about">{f({ id: "Footer_Company_About" })}</a>
                  </li>
                  <li>
                    <a href="/careers">{f({ id: "Footer_Company_Careers" })}</a>
                  </li>
                  <li>
                    <a href="/mobile">{f({ id: "Footer_Company_Mobile" })}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-2">
            <div className="row">
              <div className="col-12">
                <h3 className="text-footer-font-header mb-2">
                  {f({ id: "Footer_Contact" })}
                </h3>
              </div>
              <div className="col-12">
                <ul className="list-unstyled">
                  <li>
                    <a href="/faq">{f({ id: "Footer_Contact_FAQ" })}</a>
                  </li>
                  <li>
                    <a href="/press">{f({ id: "Footer_Contact_Press" })}</a>
                  </li>
                  <li>
                    <a href="/affilates">
                      {f({ id: "Footer_Contact_Affilates" })}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-3 col-lg-2">
            <div className="row">
              <div className="col-12">
                <h3 className="text-footer-font-header mb-2">
                  {f({ id: "Footer_Media" })}
                </h3>
              </div>
              <div className="col-12">
                <ul className="list-unstyled">
                  <li>
                    <a href="/news">{f({ id: "Footer_Media_News" })}</a>
                  </li>
                  <li>
                    <a href="/photo">{f({ id: "Footer_Media_Photo" })}</a>
                  </li>
                  <li>
                    <a href="/video">{f({ id: "Footer_Media_video" })}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-9 col-lg-3">
            <div className="row">
              <div className="col-12 text-center">
                <img
                  src="/images/social/instegram.png"
                  className="mx-2 border-radius-50"
                  width="46"
                  height="46"
                  alt="inestegram"
                  loading="lazy"
                />
                <img
                  src="/images/social/facebook.png"
                  width="42"
                  height="42"
                  className="mx-2 border-radius-50"
                  alt="facebook"
                  loading="lazy"
                />
                <img
                  src="/images/social/twitter.png"
                  className="mx-2 border-radius-50"
                  width="42"
                  height="42"
                  alt="twitter"
                  loading="lazy"
                />
              </div>
              <div className="col-12 mt-2">
                <h4 className="text-center text-color">
                  {f({ id: "Footer_Social_Desc" })}
                </h4>
              </div>
              <div className="col-12 text-center">
                <img
                  src="/images/Download/Google_Play.png"
                  width="108"
                  height="36"
                  alt="google play"
                  loading="lazy"
                />
                <img
                  src="/images/Download/Play _Store.png"
                  width="101"
                  height="36"
                  alt="apple"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="col-12 mt-2">
            <p className="text-center text-color text-footer-font-copy-right">
              {f({ id: "Footer_Copy_Right" })}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
