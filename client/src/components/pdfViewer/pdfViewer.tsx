import * as React from "react";
import { Document, Page, pdfjs, PDFPageItem } from "react-pdf";
import "./pdfViewer.scss";

interface Props {
  file: PDFPageItem;
  pageNumber: number;
}

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfViewer: React.FC<Props> = ({ file, pageNumber = 1 }) => {
  const refPdfContainer = React.useRef<HTMLDivElement>(null);
  const [pdfWidth, setPdfWidth] = React.useState<number>();
  const [error, setError] = React.useState<boolean>(false);
  const [numPages, setNumPages] = React.useState<number | null>(null);

  return (
    <section className="pdf-container" ref={refPdfContainer}>
      <Document
        className="pdf-container__document"
        file={file}
        onLoadError={console.error}
      >
        <Page
          className="pdf-container__document-page"
          width={pdfWidth}
          renderTextLayer
          renderAnnotationLayer
          pageNumber={pageNumber}
          onLoadError={console.error}
        />
      </Document>
    </section>
  );
};

export default PdfViewer;
