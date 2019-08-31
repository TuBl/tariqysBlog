import React, { useState } from "react"
import Toggle from "react-toggle"
import "react-toggle/style.css"
import sun from "../../common/assets/images/sun.png"
import moon from "../../common/assets/images/moon.png"
import "../../common/assets/styles/styles.scss"
const MyToggle = () => {
  const [toggleState, setToggle] = useState({ checked: false })
  const { checked } = toggleState
  const handleToggle = e => {
    setToggle({ ...toggleState, checked: true })
  }
  return (
    <label>
      <Toggle
        defaultChecked={checked}
        icons={{
          checked: (
            <img
              src={moon}
              width="18"
              height="18"
              role="presentation"
              style={{ pointerEvents: "none" }}
            />
          ),
          unchecked: (
            <img
              src={sun}
              width="18"
              height="18"
              role="presentation"
              style={{ pointerEvents: "none" }}
            />
          ),
        }}
        className="toggle"
        onChange={handleToggle}
      />
    </label>
  )
}

export default MyToggle
