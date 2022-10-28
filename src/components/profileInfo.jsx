import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Typography from "@mui/material/Typography"
import darkTheme from "../utils/appTheme"

const ProfileInfo = () => {

  const data = useStaticQuery(graphql`query ProfileInfo {
  file {
    childDataJson {
      name
      about
    }
  }}`)

  const {name,about} = data.file.childDataJson

  return (
    <>
      <Typography
        variant="body1"
        gutterBottom
        sx={{ margin: "1rem 0rem 0.25rem" }}
        fontWeight="600"
      >
        {name}
      </Typography>

      <Typography
        variant="body2"
        gutterBottom
        sx={{ margin: "0rem 0rem 0.25rem" }}
        color={darkTheme.palette.text.secondary}
      >
        {about}
      </Typography>
    </>
  )
}

export default ProfileInfo
