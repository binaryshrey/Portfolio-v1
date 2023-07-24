import * as React from "react"
import Card from "@mui/material/Card"
import darkTheme from "../utils/appTheme"
import db from "../data/db.json";
import { useMediaQuery } from "react-responsive"
import Typography from "@mui/material/Typography"
import CardContent from "@mui/material/CardContent"

const AboutContent = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 769px)",
  })

  return (
    <Card
      style={{
        background: darkTheme.palette.action.disabledBackground,
        margin: isDesktop ? "3rem 3rem 1.5rem" : "3rem 0.75rem 1.5rem",
        borderRadius: "0.75rem",
      }}
    >
      <CardContent>
        <Typography variant="body1" style={{ whiteSpace: "pre-line" }}>
          {db.description1}
        </Typography>

        <Typography variant="body1" style={{ whiteSpace: "pre-line", marginTop:'2rem'}}>
          {db.description2}
        </Typography>

        <Typography variant="body1" style={{ whiteSpace: "pre-line", marginTop:'2rem'}}>
          {db.description3}
        </Typography>

        <Typography variant="body1" style={{ whiteSpace: "pre-line", marginTop:'2rem'}}>
          {db.description4}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default AboutContent
