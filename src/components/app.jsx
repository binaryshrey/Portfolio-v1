import React from "react"

import { useMediaQuery } from "react-responsive"
import MobileLayout from "./mobileLayout"
import DesktopLayout from "./desktopLayout"

const App = ({ filter }) => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 769px)",
  })

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  })

  return (
    <>
      {isDesktop && <DesktopLayout filter={filter} />}
      {isMobile && <MobileLayout filter={filter} />}
    </>
  )
}

export default App
