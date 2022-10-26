import React from "react"
import Card from "@mui/material/Card"
import Chip from "@mui/material/Chip"
import Stack from "@mui/material/Stack"
import { CardActionArea } from "@mui/material"
import CardMedia from "@mui/material/CardMedia"
import { useMediaQuery } from "react-responsive"
import Typography from "@mui/material/Typography"
import CardContent from "@mui/material/CardContent"
import * as styles from "../../src/Styles.module.css"
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined"
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined"

const Contents = ({ content }) => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 768px)",
  })

  return (
    <Card
      style={{
        background: "#424242",
        margin: isDesktop ? "48px 48px 24px" : "48px 12px 24px",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image={content.imageURI}
          alt="default img"
        />
        <CardContent style={{ padding: "24px" }}>
          <div>
            <Stack direction="row" spacing={1} paddingBottom="24px">
              {content?.tags?.map(tag => {
                return <Chip label={tag} size="small" color="success" />
              })}
            </Stack>
            <Typography gutterBottom variant="h6" component="div">
              {content.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {content.description}
            </Typography>

            <div className={styles.displayFlex}>
              <div className={styles.cardTime}>
                <CalendarMonthOutlinedIcon fontSize="small" />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ marginLeft: "12px" }}
                >
                  {content.publishedOn}
                </Typography>
              </div>

              <div className={styles.cardClock}>
                <AccessTimeOutlinedIcon fontSize="small" />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ marginLeft: "12px" }}
                >
                  {content.readTime} min read
                </Typography>
              </div>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default Contents
