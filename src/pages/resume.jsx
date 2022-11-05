import React, { useState } from "react"
import PDF from "../../static/Resume.pdf"
import "@react-pdf-viewer/core/lib/styles/index.css"
import { Worker, Viewer } from "@react-pdf-viewer/core"
import "@react-pdf-viewer/default-layout/lib/styles/index.css"
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"

const Resume = () => {
  const [resumePDF] = useState(PDF)
  const defaultLayoutPluginInstance = defaultLayoutPlugin()

  return (
    <>
      {resumePDF && (
        <>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
            <Viewer
              fileUrl={resumePDF}
              plugins={[defaultLayoutPluginInstance]}
            />
          </Worker>
        </>
      )}
    </>
  )
}

export default Resume
