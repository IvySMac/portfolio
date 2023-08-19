import React from "react";
import resume from "../utils/Resume.pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  const handleLoadError = (error) => {
    console.error("Error loading PDF:", error);
  };
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch(resume).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "IvyMcCurdyResume.pdf";
        alink.click();
      });
    });
  };

  return (
    <div className="resume">
      <h2>Resume</h2>
      <Document
        file={resume}
        onLoadError={handleLoadError}
        className="pdf-document"
      >
        <Page pageIndex={0} />
      </Document>
      <span className="save-button">
      <button title="Download Resume" className="pdf-download" onClick={onButtonClick}>
      </button>
      </span>
    </div>
  );
}

export default Resume;
