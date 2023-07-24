import React from "react"
import db from "../data/db.json";
import GitHubIcon from "@mui/icons-material/GitHub"
import TwitterIcon from "@mui/icons-material/Twitter"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import darkTheme from "../utils/appTheme"
import * as styles from "../styles/app.module.css"

const SocialInfo = () => {

  return (
    <>
      <div className={styles.socialContainer}>
        <div className={styles.socialPadding}>
          <a
            href={db.socials.LinkedIn}
            style={{ color: darkTheme.palette.text.secondary }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon
              fontSize="small"
              sx={{ "&:hover": { color: darkTheme.palette.text.primary } }}
            />
          </a>
        </div>
        <div className={styles.socialPadding}>
          <a
            href={db.socials.Github} 
            style={{ color: darkTheme.palette.text.secondary }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon
              fontSize="small"
              sx={{ "&:hover": { color: darkTheme.palette.text.primary } }}
            />
          </a>
        </div>
        <div className={styles.socialPadding}>
          <a
            href={db.socials.Twitter}
            style={{ color: darkTheme.palette.text.secondary }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon
              fontSize="small"
              sx={{ "&:hover": { color: darkTheme.palette.text.primary } }}
            />
          </a>
        </div>
      </div>
    </>
  )
}

export default SocialInfo
