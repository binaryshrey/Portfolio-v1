import React from "react"
import darkTheme from "../utils/appTheme"
import { Typography } from "@mui/material"
import { useMediaQuery } from "react-responsive"

const Footer = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 769px)",
  })

  return (
    <div style={{ margin: isDesktop ? "4rem 3rem 4rem" : "3rem 0.75rem 4rem" }}>
      <div
        style={{
          content: "",
          display: "block",
          height: "0.15rem",
          width: "3rem",
          background: "white",
          marginBottom: "1.5rem",
        }}
      />
      <Typography variant="body2" gutterBottom fontWeight="500">
        © 2022 - Shreyansh Saurabh
      </Typography>
      <Typography variant="caption" color={darkTheme.palette.text.secondary}>
        Built with
        <a
          href="https://www.gatsbyjs.com/"
          style={{
            color: darkTheme.palette.text.secondary,
            textDecoration: "None",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Gatsby
        </a>
      </Typography>
    </div>
  )
}

export default Footer
