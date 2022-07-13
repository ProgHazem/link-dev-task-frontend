import { FC, useState } from "react"
import { useIntl } from "react-intl"

// eslint-disable-next-line react/function-component-definition
const Header: FC = () => {
  const { formatMessage: f } = useIntl()
  const [isNavCollapsed, setIsNavCollapsed] = useState(true)
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed)

  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="/">
              <img
                src="/images/logo/Logo.svg"
                width="171"
                height="73"
                className="header-img d-inline-block align-top img-fluid"
                alt="Logo"
                loading="lazy"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mobile"
              aria-controls="navbarSupportedContent"
              aria-expanded={!isNavCollapsed}
              aria-label="Toggle navigation"
              onClick={handleNavCollapse}
            >
              <img
                src="/images/icons/toggle.svg"
                className="navbar-toggler-icon"
                alt="toggle"
              />
            </button>
            <div
              className={`${
                isNavCollapsed ? "collapse" : ""
              } navbar-collapse justify-content-center`}
              id="mobile"
            >
              <ul className="navbar-nav me-auto m-auto mb-2 mb-lg-0">
                <li className="nav-item mx-3">
                  <a className="nav-link" href="/">
                    {f({ id: "Header_Home" })}
                  </a>
                </li>
                <li className="nav-item mx-3">
                  <a className="nav-link" href="/">
                    {f({ id: "Header_About_Us" })}
                  </a>
                </li>
                <li className="nav-item mx-3">
                  <a className="nav-link" href="/">
                    {f({ id: "Header_News" })}
                  </a>
                </li>
                <li className="nav-item mx-3">
                  <a className="nav-link" href="/">
                    {f({ id: "Header_Contact_Us" })}
                  </a>
                </li>
              </ul>
              <div className="d-flex left-header">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item mx-4">
                    <a className="nav-link" href="/">
                      {f({ id: "Header_Login" })}
                    </a>
                  </li>
                  <li className="nav-item border-register mx-4">
                    <a className="nav-link" href="/">
                      {f({ id: "Header_Register" })}
                    </a>
                  </li>
                  <li className="nav-item mx-4">
                    <select className="form-select border-0 bg-transparent">
                      <option defaultValue="1" value="1">
                        En
                      </option>
                      <option value="2">Ar</option>
                      <option value="3">Fr</option>
                    </select>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header
