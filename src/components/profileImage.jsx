import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as styles from "../styles/app.module.css"

const ProfileImage = () => {

  const data = useStaticQuery(graphql`query ProfileImage {
  file {
    childDataJson {
      profileImage
    }
  }}`)

  const {profileImage} = data.file.childDataJson
  
  return (
    <>
      <img
        src={profileImage}
        alt="profile-pic"
        width="120"
        height="120"
        className={styles.profilePic}
      />
    </>
  )
}

export default ProfileImage
