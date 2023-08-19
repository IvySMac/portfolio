import React from "react";
import resume from "../utils/Resume.pdf";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  return (
    <div className="resume">
      <h2>Resume</h2>
      <Document
        file={resume}
        onLoadError={console.error}
        style={{ width: "100vw", height: "auto" }}
      >
        <Page pageIndex={0} />
      </Document>
    </div>
  );
}

export default Resume;
