import React from "react"
import uuid from "react-uuid"
import { graphql, useStaticQuery } from "gatsby"
import NavBar from "./navbar"
import Contents from "./contents"
import AboutContent from "./aboutContent"
import Footer from "./footer"

const MobileLayout = ({ filter }) => {
  const data = useStaticQuery(graphql`
    query Content {
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
      }
    }
  `)

  const { contents } = data.file.childDataJson

  return (
    <div>
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
      <Footer />
    </div>
  )
}

export default MobileLayout
