import React, { FC, ReactElement } from "react"
import Header from "src/components/HomeLayoutComponents/Header"
import Footer from "src/components/HomeLayoutComponents/Footer"

interface HomeLayoutInterface {
  children: ReactElement
}

// eslint-disable-next-line react/function-component-definition
const HomeLayout: FC<HomeLayoutInterface> = ({
  children,
}: HomeLayoutInterface) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default HomeLayout
