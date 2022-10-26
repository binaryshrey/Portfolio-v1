import React from "react"
import CssBaseline from "@mui/material/CssBaseline"
import darkTheme from "../utils/appTheme"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import NavLinks from "../components/navLinks"
import NavBar from "../components/navbar"

export default function Home() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <NavBar />
    </ThemeProvider>
  )
}
