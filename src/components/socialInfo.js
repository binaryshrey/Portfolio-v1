import React from "react"
import { Link } from "gatsby"
import DB from "../utils/db.json"
import * as styles from "../../src/Styles.module.css"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
import TwitterIcon from "@mui/icons-material/Twitter"

const SocialInfo = () => {
  return (
    <>
      <div className={styles.socialContainer}>
        <div className={styles.socialPadding}>
          <Link
            href={DB.socials.LinkedIn}
            style={{ color: "rgba(255, 255, 255, 0.8)" }}
            target="_blank"
          >
            <LinkedInIcon fontSize="small" />
          </Link>
        </div>
        <div className={styles.socialPadding}>
          <Link
            href={DB.socials.Github}
            style={{ color: "rgba(255, 255, 255, 0.8)" }}
            target="_blank"
          >
            <GitHubIcon fontSize="small" />
          </Link>
        </div>
        <div className={styles.socialPadding}>
          <Link
            href={DB.socials.Twitter}
            style={{ color: "rgba(255, 255, 255, 0.8)" }}
            target="_blank"
          >
            <TwitterIcon fontSize="small" />
          </Link>
        </div>
      </div>
    </>
  )
}

export default SocialInfo
