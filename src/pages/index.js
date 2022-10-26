import React from "react"
import ProfileImage from "../components/profileImage"
import ProfileInfo from "../components/profileInfo"
import CssBaseline from "@mui/material/CssBaseline"
import darkTheme from "../utils/appTheme"
import { ThemeProvider, createTheme } from "@mui/material/styles"

export default function Home() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ProfileImage />
      <ProfileInfo />
    </ThemeProvider>
  )
}
