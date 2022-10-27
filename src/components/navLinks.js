import * as React from "react"
import { Link } from "gatsby"
import List from "@mui/material/List"
import darkTheme from "../utils/appTheme"
import BookIcon from "@mui/icons-material/Book"
import HomeIcon from "@mui/icons-material/Home"
import { useMediaQuery } from "react-responsive"
import PersonIcon from "@mui/icons-material/Person"
import ArticleIcon from "@mui/icons-material/Article"
import * as styles from "../../src/Styles.module.css"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import ListItemButton from "@mui/material/ListItemButton"
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter"

const NavLinks = () => {
  let pathName = window.location.pathname

  const isDesktop = useMediaQuery({
    query: "(min-width: 768px)",
  })

  const containerStyle = {
    padding: "1.25rem 0rem ",
    background: isDesktop
      ? darkTheme.palette.background.default
      : darkTheme.palette.divider,
  }

  return (
    <div style={containerStyle}>
      <List dense className={styles.navLinksContainer}>
        <Link
          to="/"
          style={{
            textDecoration: "None",
            color:
              pathName === "/"
                ? darkTheme.palette.text.primary
                : darkTheme.palette.text.secondary,
          }}
        >
          <div className={styles.navLinks}>
            <ListItemButton
              sx={{ padding: "0.25rem 1.25rem", borderRadius: "1.25rem" }}
            >
              <ListItemIcon
                style={{
                  textDecoration: "None",
                  color:
                    pathName === "/"
                      ? darkTheme.palette.text.primary
                      : darkTheme.palette.text.secondary,
                }}
              >
                <HomeIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </div>
        </Link>

        <Link
          to="/about"
          style={{
            textDecoration: "None",
            color:
              pathName === "/about"
                ? darkTheme.palette.text.primary
                : darkTheme.palette.text.secondary,
          }}
        >
          <div className={styles.navLinks}>
            <ListItemButton
              sx={{ padding: "0.25rem 1.25rem", borderRadius: "1.25rem" }}
            >
              <ListItemIcon
                style={{
                  textDecoration: "None",
                  color:
                    pathName === "/about"
                      ? darkTheme.palette.text.primary
                      : darkTheme.palette.text.secondary,
                }}
              >
                <PersonIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItemButton>
          </div>
        </Link>

        <Link
          to="/blogs"
          style={{
            textDecoration: "None",
            color:
              pathName === "/blogs"
                ? darkTheme.palette.text.primary
                : darkTheme.palette.text.secondary,
          }}
        >
          <div className={styles.navLinks}>
            <ListItemButton
              sx={{ padding: "0.25rem 1.25rem", borderRadius: "1.25rem" }}
            >
              <ListItemIcon
                style={{
                  textDecoration: "None",
                  color:
                    pathName === "/blogs"
                      ? darkTheme.palette.text.primary
                      : darkTheme.palette.text.secondary,
                }}
              >
                <BookIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Blogs" />
            </ListItemButton>
          </div>
        </Link>

        <Link
          to="/projects"
          style={{
            textDecoration: "None",
            color:
              pathName === "/projects"
                ? darkTheme.palette.text.primary
                : darkTheme.palette.text.secondary,
          }}
        >
          <div className={styles.navLinks}>
            <ListItemButton
              sx={{ padding: "0.25rem 1.25rem", borderRadius: "1.25rem" }}
            >
              <ListItemIcon
                style={{
                  textDecoration: "None",
                  color:
                    pathName === "/projects"
                      ? darkTheme.palette.text.primary
                      : darkTheme.palette.text.secondary,
                }}
              >
                <BusinessCenterIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Projects" />
            </ListItemButton>
          </div>
        </Link>

        <Link
          to="/resume"
          style={{
            textDecoration: "None",
            color:
              pathName === "/resume"
                ? darkTheme.palette.text.primary
                : darkTheme.palette.text.secondary,
          }}
        >
          <div className={styles.navLinks}>
            <ListItemButton
              sx={{ padding: "0.25rem 1.25rem", borderRadius: "1.25rem" }}
            >
              <ListItemIcon
                style={{
                  textDecoration: "None",
                  color:
                    pathName === "/resume"
                      ? darkTheme.palette.text.primary
                      : darkTheme.palette.text.secondary,
                }}
              >
                <ArticleIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Resume" />
            </ListItemButton>
          </div>
        </Link>
      </List>
    </div>
  )
}

export default NavLinks
