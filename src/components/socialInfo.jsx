import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import GitHubIcon from "@mui/icons-material/GitHub"
import TwitterIcon from "@mui/icons-material/Twitter"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import darkTheme from "../utils/appTheme"
import * as styles from "../styles/app.module.css"

const SocialInfo = () => {

  const data = useStaticQuery(graphql`query SocialInfo {
  file {
    childDataJson {
      socials {
        Github
        LinkedIn
        Twitter
      }
    }
  }
}
`)

  const {LinkedIn,Github, Twitter} = data.file.childDataJson.socials

  return (
    <>
      <div className={styles.socialContainer}>
        <div className={styles.socialPadding}>
          <a
            href={LinkedIn}
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
            href={Github}
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
            href={Twitter}
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
