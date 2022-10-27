import React from "react"
import uuid from "react-uuid"
import { useMediaQuery } from "react-responsive"
import DB from "../utils/db.json"
import NavBar from "../components/navbar"
import Contents from "../components/contents"
import * as styles from "../../src/Styles.module.css"
import AboutContent from "./aboutContent"

const App = ({ filter }) => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 768px)",
  })

  return (
    <>
      {isDesktop ? (
        <div className={styles.parentContainer}>
          <aside className={styles.sidebar}>
            <NavBar />
          </aside>

          <main className={styles.contentBody}>
            {filter === "About" ? (
              <AboutContent />
            ) : (
              <div>
                {DB?.content &&
                  DB?.content.map(item => {
                    if (filter === "Home") {
                      return <Contents key={uuid()} content={item} />
                    } else {
                      return item.tags.includes(filter) ? (
                        <Contents key={uuid()} content={item} />
                      ) : null
                    }
                  })}
              </div>
            )}
          </main>
        </div>
      ) : (
        <>
          <NavBar />
          {filter === "About" ? (
            <AboutContent />
          ) : (
            <div>
              {DB?.content &&
                DB?.content.map(item => {
                  if (filter === "Home") {
                    return <Contents key={uuid()} content={item} />
                  } else {
                    return item.tags.includes(filter) ? (
                      <Contents key={uuid()} content={item} />
                    ) : null
                  }
                })}
            </div>
          )}
        </>
      )}
    </>
  )
}

export default App
