import { Fragment, lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoadingScreen from "src/screens/LoadingScreen"
import GuestGuard from "src/guards/GuestGuard"
import HomeLayout from "src/layouts/HomeLayout"

const routes: any = [
  //  =============== Home ===============
  {
    path: "/",
    component: lazy(() => import("src/pages/Home")),
    guard: GuestGuard,
    layout: HomeLayout,
  },
]

export const renderRoutes = (AllRoutes: any, basename: string) => (
  <BrowserRouter basename={basename}>
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        {AllRoutes?.map((route: any) => {
          const RenderComponent = route?.component || Fragment
          const Guard = route?.guard
          const Layout = route?.layout || Fragment
          const Role = route?.role
          return (
            <Route
              key={route?.path}
              path={route?.path}
              element={
                <Guard roles={Role}>
                  <Layout>
                    <RenderComponent />
                  </Layout>
                </Guard>
              }
            />
          )
        })}
      </Routes>
    </Suspense>
  </BrowserRouter>
)

export default routes
