import React from "react"
import Typography from "@mui/material/Typography"
import DB from "../utils/db.json"
import darkTheme from "../utils/appTheme"

const ProfileInfo = () => {
  return (
    <>
      <Typography
        variant="body1"
        gutterBottom
        sx={{ margin: "1rem 0rem 0.25rem" }}
        fontWeight="600"
      >
        {DB.name}
      </Typography>

      <Typography
        variant="body2"
        gutterBottom
        sx={{ margin: "0rem 0rem 0.25rem" }}
        color={darkTheme.palette.text.secondary}
      >
        {DB.profileHeader}
      </Typography>
    </>
  )
}

export default ProfileInfo
