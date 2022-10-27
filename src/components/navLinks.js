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
  const isDesktop = useMediaQuery({
    query: "(min-width: 768px)",
  })

  return (
    <div
      style={{
        padding: "20px 20px",
        background: isDesktop ? "#303030" : "#404040",
      }}
    >
      <List dense className={styles.navLinksContainer}>
        <Link to="/" style={{ textDecoration: "None", color: "inherit" }}>
          <div className={styles.navLinks}>
            <ListItemButton sx={{ padding: 0 }}>
              <ListItemIcon>
                <HomeIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </div>
        </Link>

        <Link to="/about" style={{ textDecoration: "None", color: "inherit" }}>
          <div className={styles.navLinks}>
            <ListItemButton sx={{ padding: 0 }}>
              <ListItemIcon>
                <PersonIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItemButton>
          </div>
        </Link>

        <Link to="/blogs" style={{ textDecoration: "None", color: "inherit" }}>
          <div className={styles.navLinks}>
            <ListItemButton sx={{ padding: 0 }}>
              <ListItemIcon>
                <BookIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Blogs" />
            </ListItemButton>
          </div>
        </Link>

        <Link
          to="/projects"
          style={{ textDecoration: "None", color: "inherit" }}
        >
          <div className={styles.navLinks}>
            <ListItemButton sx={{ padding: 0 }}>
              <ListItemIcon>
                <BusinessCenterIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Projects" />
            </ListItemButton>
          </div>
        </Link>

        <Link to="/resume" style={{ textDecoration: "None", color: "inherit" }}>
          <div className={styles.navLinks}>
            <ListItemButton sx={{ padding: 0 }}>
              <ListItemIcon>
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
