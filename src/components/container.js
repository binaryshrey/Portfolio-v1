import React from "react"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material/styles"
import App from "../components/app"
import darkTheme from "../utils/appTheme"

const Container = ({ filter }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <App filter={filter} />
    </ThemeProvider>
  )
}

export default Container
