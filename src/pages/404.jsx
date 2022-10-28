import React from "react"
import { Link } from "gatsby"
import { Typography } from "@mui/material"
import Button from "@mui/material/Button"
import { useMediaQuery } from "react-responsive"
import { SeoConfig } from "../components/seo"
import * as styles from "../styles/app.module.css"

const NotFound = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 600px)",
  })

  return (
    <div className={styles.notFoundContainer}>
      <div>
        <Typography
          variant="h2"
          color="#F56843"
          style={{
            textAlign: "center",
          }}
        >
          404
        </Typography>

        <Typography
          variant="body1"
          color="#F56843"
          style={{
            textAlign: "center",
            marginBottom: "32px",
          }}
        >
          Page Not Found !
        </Typography>
        <img
          src="404.webp"
          height={isDesktop ? 300 : 200}
          width={isDesktop ? 480 : 320}
          alt="404"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "64px",
          }}
        />
        <div className={styles.button404Container}>
          <Link
            to="/"
            style={{
              textDecoration: "None",
            }}
          >
            <Button
              variant="contained"
              style={{
                backgroundColor: "#F56843",
                borderRadius: "2rem",
              }}
            >
              Go to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound

export const Head = () => (
  <SeoConfig title="404"/>
)
