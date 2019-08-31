import React, { Fragment } from "react"
import HeaderDisplay from "./Header/HeaderDisplay"
const Layout = ({ children }: any) => {
  return (
    <Fragment>
      <header>
        <HeaderDisplay></HeaderDisplay>
      </header>
      <main>{children}</main>
      <footer style={{ textAlign: "center" }}>
        DONT FORGET TO ADD FOOTER HERE
      </footer>
    </Fragment>
  )
}

export default Layout
