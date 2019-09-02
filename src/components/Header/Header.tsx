import React, { useState, useEffect } from "react"
// import headerStyles from "../../common/assets/styles/header.module.scss"
import "../../common/assets/styles/styles.scss"
import MyToggle from "./Toggle"
import classnames from "classnames"
const Header = () => {
  const [navState, setState] = useState({
    prevScrollpos: window.pageYOffset,
    visible: true,
  })
  const { prevScrollpos, visible } = navState
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset
    const visible = prevScrollpos > currentScrollPos
    setState({ ...navState, prevScrollpos: currentScrollPos, visible })
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    console.log("useeffect")
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  return (
    <div
      className={classnames("navbar  bg-white", {
        "navbar-hidden": !visible,
      })}
    >
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
