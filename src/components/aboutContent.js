import * as React from "react"
import DB from "../utils/db.json"
import Card from "@mui/material/Card"
import { useMediaQuery } from "react-responsive"
import Typography from "@mui/material/Typography"
import CardContent from "@mui/material/CardContent"

const AboutContent = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 768px)",
  })

  return (
    <Card
      style={{
        background: "#424242",
        margin: isDesktop ? "48px 48px 24px" : "48px 12px 24px",
        borderRadius: "12px",
      }}
    >
      <CardContent>
        <Typography variant="body2" style={{ whiteSpace: "pre-line" }}>
          {DB?.about}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default AboutContent
