import * as React from "react"
import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import HomeIcon from "@mui/icons-material/Home"
import PersonIcon from "@mui/icons-material/Person"
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter"
import BookIcon from "@mui/icons-material/Book"
import ArticleIcon from "@mui/icons-material/Article"
import * as styles from "../../src/Styles.module.css"
import { useMediaQuery } from "react-responsive"

export default function NavLinks() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 768px)",
  })

  return (
    <div
      style={{
        padding: isDesktop ? "64px 12px" : "24px 12px",
        background: isDesktop ? "#303030" : "#404040",
      }}
    >
      <List disablePadding dense className={styles.navLinksContainer}>
        <div className={styles.navLinks}>
          <ListItemButton sx={{ padding: 0 }}>
            <ListItemIcon disablePadding>
              <HomeIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </div>

        <div className={styles.navLinks}>
          <ListItemButton sx={{ padding: 0 }}>
            <ListItemIcon disablePadding>
              <PersonIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItemButton>
        </div>

        <div className={styles.navLinks}>
          <ListItemButton sx={{ padding: 0 }}>
            <ListItemIcon disablePadding>
              <BookIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Blogs" />
          </ListItemButton>
        </div>

        <div className={styles.navLinks}>
          <ListItemButton sx={{ padding: 0 }}>
            <ListItemIcon disablePadding>
              <BusinessCenterIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Projects" />
          </ListItemButton>
        </div>

        <div className={styles.navLinks}>
          <ListItemButton sx={{ padding: 0 }}>
            <ListItemIcon disablePadding>
              <ArticleIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Resume" />
          </ListItemButton>
        </div>
      </List>
    </div>
  )
}
