import * as React from "react";
import { Document, Page, pdfjs, PDFPageItem } from "react-pdf";
import "./pdfViewer.scss";

interface Props {
  file: PDFPageItem;
  pageNumber: number;
  height: number;
}

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfViewer: React.FC<Props> = ({ file, pageNumber = 1, height }) => {
  const [numPages, setNumPages] = React.useState<number>(3);

  const onDocumentLoadSuccess = ({ numPages }: any) => {
    setNumPages(numPages);
  };

  const handlePageNumber = () => {
    if (pageNumber > numPages) {
      return numPages;
    } else {
      return pageNumber;
    }
  };

  return (
    <section className="pdf-container">
      <Document
        className="pdf-container__document"
        file={file}
        onLoadError={console.error}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page
          className="pdf-container__document-page"
          renderTextLayer
          renderAnnotationLayer
          height={height}
          pageNumber={handlePageNumber()}
          onLoadError={console.error}
        />
      </Document>
    </section>
  );
};

export default PdfViewer;
