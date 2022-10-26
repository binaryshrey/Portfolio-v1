import React from "react"
import ProfileImage from "../components/profileImage"
import ProfileInfo from "../components/profileInfo"
import SocialInfo from "../components/socialInfo"
import CssBaseline from "@mui/material/CssBaseline"
import darkTheme from "../utils/appTheme"
import NavLinks from "../components/navLinks"
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined"
import IconButton from "@mui/material/IconButton"
import { useMediaQuery } from "react-responsive"
import CloseIcon from "@mui/icons-material/Close"

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
      <div style={{ padding: "36px 12px 0px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
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
