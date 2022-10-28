import React from "react"
import Hamburger from "hamburger-react"
import { useMediaQuery } from "react-responsive"
import NavLinks from "./navLinks"
import SocialInfo from "./socialInfo"
import ProfileInfo from "./profileInfo"
import * as styles from "../styles/app.module.css"
import ProfileImage from "./profileImage"

const NavBar = () => {
  const [showLinks, setShowLinks] = React.useState(false)
  const [opacity, setOpacity] = React.useState(0)

  const toggleShowLinks = () => {
    setShowLinks(!showLinks)
    opacity === 0 ? setOpacity(1) : setOpacity(0)
  }

  const isDesktop = useMediaQuery({
    query: "(min-width: 768px)",
  })

  return (
    <>
      <div className={styles.navbarUpperContainer}>
        <div className={styles.profileContainer}>
          <ProfileImage />
          {!isDesktop && (
            <div>
              <Hamburger toggled={showLinks} toggle={toggleShowLinks} />
            </div>
          )}
        </div>
        <ProfileInfo />
        <SocialInfo />
      </div>
      {isDesktop ? (
        <NavLinks />
      ) : (
        <div
          style={{
            opacity: opacity,
            transition: "all 0.5s ease-in",
          }}
        >
          {showLinks && <NavLinks />}
        </div>
      )}
    </>
  )
}

export default NavBar
