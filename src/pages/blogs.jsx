import React from "react"
import { SeoConfig } from "../components/seo"
import Container from "../components/container"

const Blogs = () => {
  return <Container filter={"Blog"} />
}

export default Blogs

export const Head = () => (
  <SeoConfig title="Blogs - Shreyansh Saurabh"/>
)
