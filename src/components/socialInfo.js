import React from "react"
import { IconButton } from "@mui/material"
import GitHubIcon from "@mui/icons-material/GitHub"
import TwitterIcon from "@mui/icons-material/Twitter"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import DB from "../utils/db.json"
import * as styles from "../../src/Styles.module.css"

const SocialInfo = () => {
  return (
    <>
      <div className={styles.socialContainer}>
        <div className={styles.socialPadding}>
          <a
            href={DB.socials.LinkedIn}
            style={{ color: "rgba(255, 255, 255, 0.6)" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon
              fontSize="small"
              sx={{ "&:hover": { color: "white" } }}
            />
          </a>
        </div>
        <div className={styles.socialPadding}>
          <a
            href={DB.socials.Github}
            style={{ color: "rgba(255, 255, 255, 0.6)" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon
              fontSize="small"
              sx={{ "&:hover": { color: "white" } }}
            />
          </a>
        </div>
        <div className={styles.socialPadding}>
          <a
            href={DB.socials.Twitter}
            style={{ color: "rgba(255, 255, 255, 0.6)" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon
              fontSize="small"
              sx={{ "&:hover": { color: "white" } }}
            />
          </a>
        </div>
      </div>
    </>
  )
}

export default SocialInfo
