import React from "react"
import db from "../data/db.json";
import * as styles from "../styles/app.module.css"

const ProfileImage = () => {

  return (
    <>
      <img
        src={db.profileImage}
        alt="profile-pic"
        width="120"
        height="120"
        className={styles.profilePic}
      />
    </>
  )
}

export default ProfileImage
