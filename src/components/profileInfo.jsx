import React from "react"
import db from "../data/db.json";
import Typography from "@mui/material/Typography"
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
        {db.name}
      </Typography>

      <Typography
        variant="body2"
        gutterBottom
        sx={{ margin: "0rem 0rem 0.25rem" }}
        color={darkTheme.palette.text.secondary}
      >
        {db.about}
      </Typography>
    </>
  )
}

export default ProfileInfo
