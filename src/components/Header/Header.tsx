import React, {useState} from "react"
// import headerStyles from "../../common/assets/styles/header.module.scss"
import "../../common/assets/styles/styles.scss"
import MyToggle from "./Toggle"
import classnames from "classnames"
const Header = () => {
  const {navState, setState} = useState({
    prevScrollpos: window.pageYOffset,
    visible: true
  })
  return (
    <div className={classnames("navbar bg-white", {
      "navbar-hidden": !navState.visible
    })}>
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
