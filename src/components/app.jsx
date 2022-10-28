import React from "react"
import uuid from "react-uuid"
import { graphql, useStaticQuery } from "gatsby"
import { useMediaQuery } from "react-responsive"
import NavBar from "./navbar"
import Contents from "./contents"
import * as styles from "../styles/app.module.css"
import AboutContent from "./aboutContent"

const App = ({ filter }) => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 768px)",
  })

  const data = useStaticQuery(graphql`query Content {
  file {
    childDataJson {
      contents {
        name
        description
        imageURI
        imageURIMobile
        link
        publishedOn
        readTime
        stars
        tags
      } 
    }
  }}`)

  const {contents} = data.file.childDataJson
  
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
                {contents &&
                  contents.map(item => {
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
              {contents &&
                contents.map(item => {
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
