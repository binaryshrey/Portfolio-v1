import React from "react"
import { v4 as uuidv4 } from 'uuid'
import db from "../data/db.json";
import NavBar from "./navbar"
import Contents from "./contents"
import AboutContent from "./aboutContent"
import Footer from "./footer"

const MobileLayout = ({ filter }) => {

  return (
    <div>
      <NavBar />
      {filter === "About" ? (
        <AboutContent />
      ) : (
        <div>
          {db.contents &&
            db.contents.map(item => {
              if (filter === "Home") {
                return <Contents key={uuidv4()} content={item} />
              } else {
                return item.tags.includes(filter) ? (
                  <Contents key={uuidv4()} content={item} />
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
