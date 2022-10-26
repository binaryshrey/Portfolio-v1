import React from "react"
import { useMediaQuery } from "react-responsive"
import IconButton from "@mui/material/IconButton"
import CloseIcon from "@mui/icons-material/Close"
import NavLinks from "../components/navLinks"
import SocialInfo from "../components/socialInfo"
import ProfileInfo from "../components/profileInfo"
import * as styles from "../../src/Styles.module.css"
import ProfileImage from "../components/profileImage"
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined"

const NavBar = () => {
  const [showLinks, setShowLinks] = React.useState(false)

  const toggleShowLinks = () => {
    setShowLinks(!showLinks)
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
              <IconButton onClick={toggleShowLinks}>
                {showLinks ? (
                  <CloseIcon fontSize="large" />
                ) : (
                  <MenuOutlinedIcon fontSize="large" />
                )}
              </IconButton>
            </div>
          )}
        </div>
        <ProfileInfo />
        <SocialInfo />
      </div>
      {isDesktop ? <NavLinks /> : showLinks && <NavLinks />}
    </>
  )
}

export default NavBar
