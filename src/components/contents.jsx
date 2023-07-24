import React from "react"
import { v4 as uuidv4 } from 'uuid'
import Card from "@mui/material/Card"
import Chip from "@mui/material/Chip"
import darkTheme from "../utils/appTheme"
import StarIcon from "@mui/icons-material/Star"
import CardMedia from "@mui/material/CardMedia"
import { useMediaQuery } from "react-responsive"
import Typography from "@mui/material/Typography"
import CardContent from "@mui/material/CardContent"
import * as styles from "../styles/app.module.css"
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined"
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined"
import DownloadForOfflineRoundedIcon from '@mui/icons-material/DownloadForOfflineRounded';

const Contents = ({ content }) => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 769px)",
  })

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  })

  return (
    <div>
      <Card style={{ background: darkTheme.palette.action.hover, margin: isDesktop ? "3rem 3rem 1.5rem" : "3rem 0.75rem 1.5rem", borderRadius: "0.75rem", }} >
            <a href={content.link} style={{ color: darkTheme.palette.text.secondary, textDecoration: "None", }} target="_blank" rel="noopener noreferrer">
              <CardMedia component="img" height="320rem" image={isMobile ? content.imageURIMobile : content.imageURI} alt="default img" style={{ objectPosition: "top" }} />
            </a>
            <CardContent style={{ padding: "1.5rem" }}>
              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom:"1.5rem"}} spacing={1} >
                  {content?.tags?.map(tag => {
                    return (
                      <div key={uuidv4()} style={{marginRight:'0.4rem', marginTop:'0.2rem', marginBottom:'0.2rem'}}>
                        <a href={tag.uri} style={{ color: darkTheme.palette.text.secondary, textDecoration: "None", }} target="_blank" rel="noopener noreferrer">
                          <Chip  label={ tag.name } size="small" style={{backgroundColor:'#202020', padding:"0.4rem"}} />
                        </a>
                      </div>
                    )
                  })}
                </div>
                <Typography variant="h6"component="div"color="text.primary" style={{marginBottom : "0.5rem"}}>
                  {content.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {content.description}
                </Typography>

                <div className={styles.displayFlex}>
                  <div className={styles.cardTime}>
                    <CalendarMonthOutlinedIcon fontSize="small" />
                    <Typography variant="body2" color="text.secondary" style={{ marginLeft: "12px" }}>
                      {content.publishedOn}
                    </Typography>
                  </div>

                  <div className={styles.cardClock}>
                    {content.readTime ? <AccessTimeOutlinedIcon fontSize="small" /> : content.stars ? <StarIcon fontSize="small" /> : <DownloadForOfflineRoundedIcon fontSize="small" />}
                    {content.readTime ? (
                      <Typography variant="body2" color="text.secondary" style={{ marginLeft: "0.75rem" }} >
                        {content.readTime} min read
                      </Typography>
                    ) : 
                    
                    content.stars ?
                    (
                      <Typography variant="body2" color="text.secondary" style={{ marginLeft: "0.75rem" }} >
                        {content.stars} stars
                      </Typography>
                    ):
                    (
                      <Typography variant="body2" color="text.secondary" style={{ marginLeft: "0.75rem" }} >
                        {content.downloads} downloads
                      </Typography>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
      </Card>
    </div>
  )
}

export default Contents
