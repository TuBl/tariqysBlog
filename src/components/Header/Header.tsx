import React from "react"
// import headerStyles from "../../common/assets/styles/header.module.scss"
import "../../common/assets/styles/styles.scss"

const Header = () => {
  return (
    <div className={"navbar bg-white"}>
      <h1>
        <p>Toggle placeholder</p>
      </h1>
      <ul>
        <li>
          <a href="profiles.html">Developers</a>
        </li>
        <li>
          <a href="register.html">Register</a>
        </li>
        <li>
          <a href="login.html">Login</a>
        </li>
      </ul>
    </div>
  )
}

export default Header
