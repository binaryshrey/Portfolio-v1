import React from "react"
import { SeoConfig } from "../components/seo"
import Container from "../components/container"

const About = () => {
  return <Container filter={"About"} />
}

export default About

export const Head = () => (
  <SeoConfig title="About - Shreyansh Saurabh"/>
)
