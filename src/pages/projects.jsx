import React from "react"
import { SeoConfig } from "../components/seo"
import Container from "../components/container"

const Projects = () => {
  return <Container filter={"Project"} />
}

export default Projects

export const Head = () => (
  <SeoConfig title="Projects - Shreyansh Saurabh"/>
)
