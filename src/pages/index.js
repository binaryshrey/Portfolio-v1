import React from "react"
import ProfileImage from "../components/profileImage"
import ProfileInfo from "../components/profileInfo"
import SocialInfo from "../components/socialInfo"
import CssBaseline from "@mui/material/CssBaseline"
import darkTheme from "../utils/appTheme"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import NavLinks from "../components/navLinks"

export default function Home() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ProfileImage />
      <ProfileInfo />
      <SocialInfo />
      <NavLinks />
    </ThemeProvider>
  )
}
