import React from "react"
import { v4 as uuidv4 } from 'uuid'
import db from "../data/db.json";
import NavBar from "./navbar"
import Contents from "./contents"
import * as styles from "../styles/app.module.css"
import AboutContent from "./aboutContent"
import Footer from "./footer"

const DesktopLayout = ({ filter }) => {

  return (
    <div className={styles.parentContainer}>
      <aside className={styles.sidebar}>
        <NavBar />
      </aside>

      <main className={styles.contentBody}>
        {filter === "About" ? (
          <AboutContent />
        ) : (
          <div>
            { db.contents &&
               db.contents.map(item => {
                if (filter === "Home") {
                  return <Contents key={uuidv4()} content={item} />
                } else {
                  return item.type.includes(filter) ? (
                    <Contents key={uuidv4()} content={item} />
                  ) : null
                }
              })}
          </div>
        )}
        <Footer />
      </main>
    </div>
  )
}

export default DesktopLayout
