import React from "react"
import { useMediaQuery } from "react-responsive"
import DB from "../utils/db.json"
import NavBar from "../components/navbar"
import Contents from "../components/contents"
import * as styles from "../../src/Styles.module.css"

const App = () => {
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
            {DB?.content &&
              DB?.content.map(item => {
                return <Contents content={item} />
              })}
          </main>
        </div>
      ) : (
        <>
          <NavBar />
          {DB?.content &&
            DB?.content.map(item => {
              return <Contents content={item} />
            })}
        </>
      )}
    </>
  )
}

export default App
