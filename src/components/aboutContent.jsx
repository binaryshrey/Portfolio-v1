import * as React from "react"
import Card from "@mui/material/Card"
import darkTheme from "../utils/appTheme"
import { useMediaQuery } from "react-responsive"
import { graphql, useStaticQuery } from "gatsby"
import Typography from "@mui/material/Typography"
import CardContent from "@mui/material/CardContent"

const AboutContent = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 769px)",
  })

  const data = useStaticQuery(graphql`
    query Description {
      file {
        childDataJson {
          description
        }
      }
    }
  `)

  const { description } = data.file.childDataJson

  return (
    <Card
      style={{
        background: darkTheme.palette.action.disabledBackground,
        margin: isDesktop ? "3rem 3rem 1.5rem" : "3rem 0.75rem 1.5rem",
        borderRadius: "0.75rem",
      }}
    >
      <CardContent>
        <Typography variant="body2" style={{ whiteSpace: "pre-line" }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default AboutContent
