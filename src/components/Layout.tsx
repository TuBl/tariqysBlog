import React, { Fragment } from "react"

const Layout = ({ children }: any) => {
  return (
    <Fragment>
      <header>Up</header>
      <main>{children}</main>
      <footer>Down</footer>
    </Fragment>
  )
}

export default Layout
