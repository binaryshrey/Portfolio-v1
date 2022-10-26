import React from "react"
import * as styles from "../../src/Styles.module.css"
import DB from "../utils/db.json"

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
