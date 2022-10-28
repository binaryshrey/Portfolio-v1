import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export const SeoConfig = ({ title, description }) => {
  const { title: defaultTitle, description: defaultDescription } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      
    </>
  )
}