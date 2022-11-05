import React from "react"
import uuid from "react-uuid"
import Card from "@mui/material/Card"
import Chip from "@mui/material/Chip"
import Stack from "@mui/material/Stack"
import darkTheme from "../utils/appTheme"
import { CardActionArea } from "@mui/material"
import StarIcon from "@mui/icons-material/Star"
import CardMedia from "@mui/material/CardMedia"
import { useMediaQuery } from "react-responsive"
import Typography from "@mui/material/Typography"
import CardContent from "@mui/material/CardContent"
import * as styles from "../styles/app.module.css"
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined"
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined"

const Contents = ({ content }) => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 769px)",
  })

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  })

  return (
    <div>
      <Card
        style={{
          background: darkTheme.palette.action.disabledBackground,
          margin: isDesktop ? "3rem 3rem 1.5rem" : "3rem 0.75rem 1.5rem",
          borderRadius: "0.75rem",
        }}
      >
        <a
          href={content.link}
          style={{
            color: darkTheme.palette.text.secondary,
            textDecoration: "None",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="280rem"
              image={isMobile ? content.imageURIMobile : content.imageURI}
              alt="default img"
              style={{ objectPosition: "top" }}
            />
            <CardContent style={{ padding: "1.5rem" }}>
              <div>
                <Stack direction="row" spacing={1} paddingBottom="1.5rem">
                  {content?.tags?.map(tag => {
                    return (
                      <Chip
                        key={uuid()}
                        label={tag}
                        size="small"
                        color="success"
                      />
                    )
                  })}
                </Stack>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  color="text.primary"
                >
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
                    {content.readTime ? (
                      <AccessTimeOutlinedIcon fontSize="small" />
                    ) : (
                      <StarIcon fontSize="small" />
                    )}
                    {content.readTime ? (
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        style={{ marginLeft: "0.75rem" }}
                      >
                        {content.readTime} min read
                      </Typography>
                    ) : (
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        style={{ marginLeft: "0.75rem" }}
                      >
                        {content.stars}
                      </Typography>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </CardActionArea>
        </a>
      </Card>
    </div>
  )
}

export default Contents
