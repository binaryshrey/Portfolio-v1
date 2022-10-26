import React from "react"
import Typography from "@mui/material/Typography"
import DB from "../utils/db.json"

const ProfileInfo = () => {
  return (
    <>
      <Typography
        variant="body1"
        gutterBottom
        style={{ margin: "20px 0px 4px" }}
        fontWeight="600"
      >
        {DB.name}
      </Typography>

      <Typography
        variant="body2"
        gutterBottom
        style={{ margin: "0px 0px 4px" }}
        color="rgba(255, 255, 255, 0.6)"
      >
        {DB.profileHeader}
      </Typography>
    </>
  )
}

export default ProfileInfo
