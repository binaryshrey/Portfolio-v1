import * as React from "react"
import { Link } from "gatsby"
import List from "@mui/material/List"
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
    padding: "20px 0px ",
    background: isDesktop ? "#303030" : "#404040",
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
                ? "rgba(255, 255, 255)"
                : "rgba(255, 255, 255, 0.6)",
          }}
        >
          <div className={styles.navLinks}>
            <ListItemButton sx={{ padding: "4px 20px", borderRadius: "20px" }}>
              <ListItemIcon
                style={{
                  textDecoration: "None",
                  color:
                    pathName === "/"
                      ? "rgba(255, 255, 255)"
                      : "rgba(255, 255, 255, 0.6)",
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
                ? "rgba(255, 255, 255)"
                : "rgba(255, 255, 255, 0.6)",
          }}
        >
          <div className={styles.navLinks}>
            <ListItemButton sx={{ padding: "4px 20px", borderRadius: "20px" }}>
              <ListItemIcon
                style={{
                  textDecoration: "None",
                  color:
                    pathName === "/about"
                      ? "rgba(255, 255, 255)"
                      : "rgba(255, 255, 255, 0.6)",
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
                ? "rgba(255, 255, 255)"
                : "rgba(255, 255, 255, 0.6)",
          }}
        >
          <div className={styles.navLinks}>
            <ListItemButton sx={{ padding: "4px 20px", borderRadius: "20px" }}>
              <ListItemIcon
                style={{
                  textDecoration: "None",
                  color:
                    pathName === "/blogs"
                      ? "rgba(255, 255, 255)"
                      : "rgba(255, 255, 255, 0.6)",
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
                ? "rgba(255, 255, 255)"
                : "rgba(255, 255, 255, 0.6)",
          }}
        >
          <div className={styles.navLinks}>
            <ListItemButton sx={{ padding: "4px 20px", borderRadius: "20px" }}>
              <ListItemIcon
                style={{
                  textDecoration: "None",
                  color:
                    pathName === "/projects"
                      ? "rgba(255, 255, 255)"
                      : "rgba(255, 255, 255, 0.6)",
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
                ? "rgba(255, 255, 255)"
                : "rgba(255, 255, 255, 0.6)",
          }}
        >
          <div className={styles.navLinks}>
            <ListItemButton sx={{ padding: "4px 20px", borderRadius: "20px" }}>
              <ListItemIcon
                style={{
                  textDecoration: "None",
                  color:
                    pathName === "/resume"
                      ? "rgba(255, 255, 255)"
                      : "rgba(255, 255, 255, 0.6)",
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
