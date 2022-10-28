import React from "react"
import DB from "../utils/db.json"
import * as styles from "../styles/app.module.css"

const ProfileImage = () => {
  return (
    <>
      <img
        src={DB.profileImage}
        alt="profile-pic"
        width="120"
        height="120"
        className={styles.profilePic}
      />
    </>
  )
}

export default ProfileImage
