import React from "react"
import { SeoConfig } from "../components/seo"
import Container from "../components/container"

const Index = () => {
  return <Container filter={"Home"} />
}

export default Index

export const Head = () => (
  <SeoConfig />
)
