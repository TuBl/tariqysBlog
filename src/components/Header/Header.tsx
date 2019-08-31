import React from "react"
// import headerStyles from "../../common/assets/styles/header.module.scss"
import "../../common/assets/styles/styles.scss"
import MyToggle from "./Toggle"
const Header = () => {
  return (
    <div className={"navbar bg-white"}>
      <h1>
        <MyToggle />
      </h1>
      <ul>
        <li>
          <a href="profiles.html">About</a>
        </li>
        <li>
          <a href="register.html">Contact</a>
        </li>
        <li>
          <a href="login.html">Blog</a>
        </li>
      </ul>
    </div>
  )
}

export default Header
