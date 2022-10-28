import React from "react"
import Hamburger from "hamburger-react"
import { useMediaQuery } from "react-responsive"
import NavLinks from "../components/navLinks"
import SocialInfo from "../components/socialInfo"
import ProfileInfo from "../components/profileInfo"
import * as styles from "../../src/Styles.module.css"
import ProfileImage from "../components/profileImage"

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
            transition: "all 1s ease-in",
          }}
        >
          {showLinks && <NavLinks />}
        </div>
      )}
    </>
  )
}

export default NavBar
