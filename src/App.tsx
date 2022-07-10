import React from "react"
import I18nProvider from "src/languages"
import routes, { renderRoutes } from "src/navigation"

function App() {
  return <I18nProvider>{renderRoutes(routes, "/")}</I18nProvider>
}

export default App
