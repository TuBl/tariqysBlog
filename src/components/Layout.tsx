import React, { Fragment } from "react"
import HeaderDisplay from "./Header/HeaderDisplay"
const Layout = ({ children }: any) => {
  return (
    <Fragment>
      <header>
        <HeaderDisplay></HeaderDisplay>
      </header>
      <main>{children}</main>
      <footer>Down</footer>
    </Fragment>
  )
}

export default Layout
