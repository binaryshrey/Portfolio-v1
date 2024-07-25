import React from "react"
import db from "../data/db.json";
import GitHubIcon from "@mui/icons-material/GitHub"
import TwitterIcon from "@mui/icons-material/Twitter"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import darkTheme from "../utils/appTheme"
import { FaHashnode } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";
import { FaSpotify } from "react-icons/fa6";


import { FaGithub } from "react-icons/fa6";


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
            <FaLinkedin size={20} />
          </a>
        </div>
        <div className={styles.socialPadding}>
          <a
            href={db.socials.Github} 
            style={{ color: darkTheme.palette.text.secondary }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={20}/>
          </a>
        </div>
        <div className={styles.socialPadding}>
          <a
            href={db.socials.Twitter}
            style={{ color: darkTheme.palette.text.secondary }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={20}/>
          </a>
        </div>
        <div className={styles.socialPadding}>
          <a
            href={db.socials.Spotify}
            style={{ color: darkTheme.palette.text.secondary }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSpotify size={20}/>
          </a>
        </div>
        <div className={styles.socialPadding}>
          <a
            href={db.socials.Hashnode}
            style={{ color: darkTheme.palette.text.secondary }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaHashnode size={20}/>
          </a>
        </div>
        <div className={styles.socialPadding}>
          <a
            href={db.socials.Substack}
            style={{ color: darkTheme.palette.text.secondary }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiSubstack size={20}/>
          </a>
        </div>
        
      </div>
    </>
  )
}

export default SocialInfo
